import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { LoadingStatus } from "../state";
import { loadOniSave } from "../actions/load-onisave";
import { loadingStatusSelector } from "../selectors/loading-status";
import {call, put} from "redux-saga/effects";
import {receiveOniSaveBegin} from "@/services/oni-save/actions/receive-onisave";
import {useAppDispatch} from "@/services/oni-save/hooks/useSaveGame";

export interface UseLoadFile {
  disabled: boolean;
  onLoadSave(file: File): void;
}

function isBusy(status: LoadingStatus) {
  switch (status) {
    case LoadingStatus.Loading:
    case LoadingStatus.Saving:
      return true;
  }
  return false;
}

export default function useLoadFile(): UseLoadFile {
  const dispatch = useAppDispatch();
  const loadingStatus = useSelector(loadingStatusSelector);
  const onLoadSave = React.useCallback(async function (file: File) {
    dispatch(receiveOniSaveBegin(LoadingStatus.Loading, true));

    const data : ArrayBuffer = await readFile(file);
    const serializedData = new Uint8Array(data).values().toArray();

    dispatch(loadOniSave(serializedData, {
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified
    }));
  }, [dispatch]);
  return {
    disabled: isBusy(loadingStatus),
    onLoadSave
  };
}

function readFile(file: File): Promise<ArrayBuffer> {
  const reader = new FileReader();
  return new Promise<ArrayBuffer>((accept, reject) => {
    reader.onload = () => {
      accept(reader.result as ArrayBuffer);
    };
    reader.onerror = () => {
      reject(reader.error);
    };
    reader.readAsArrayBuffer(file);
  });
}
