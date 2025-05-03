import { eventChannel, END, SagaIterator } from "redux-saga";
import { call, put, takeEvery, take } from "redux-saga/effects";

import {
  ACTION_ONISAVE_LOAD,
  LoadOniSaveAction,
} from "../actions/load-onisave";

import {
  receiveOniSaveBegin,
  receiveOniSaveError,
  receiveOniSaveSuccess,
} from "../actions/receive-onisave";

import { parseProgress } from "../actions/parse-progress";

import { parseSave } from "../worker-instance";
import { LoadingStatus } from "../state";

export default function* saveEditorSaga(): SagaIterator {
  yield takeEvery(ACTION_ONISAVE_LOAD, handleOniSaveLoad);
}

function* handleOniSaveLoad(action: LoadOniSaveAction): SagaIterator {
  const data = new Uint8Array(action.payload.data).buffer;

  const loadChannel = createLoadChannel(data, action.payload.bypassVersionCheck);

  while (true) {
    const msg = yield take(loadChannel);
    if (msg.type === "progress") {
      yield put(parseProgress(msg.message));
      continue;
    } else if (msg.type === "success") {
      yield put(receiveOniSaveSuccess(msg.saveGame, LoadingStatus.Loading));
      return;
    } else if (msg.type === "error") {
      yield put(receiveOniSaveError(msg.error, LoadingStatus.Loading));
      return;
    }
  }
}

function createLoadChannel(data: ArrayBuffer, bypassVersionCheck: boolean) {
  return eventChannel((emitter) => {
    function onProgress(message: string) {
      emitter({
        type: "progress",
        message,
      });
    }

    parseSave(data, bypassVersionCheck, onProgress)
      .then((saveGame) => {
        emitter({
          type: "success",
          saveGame,
        });
        emitter(END);
      })
      .catch((error) => {
        emitter({
          type: "error",
          error,
        });
        emitter(END);
      });

    //This is the cancellation func.
    // TODO: We can support cancellation in @/parser/main rather easily.
    return () => {};
  });
}
