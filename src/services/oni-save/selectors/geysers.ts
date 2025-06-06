import {createCachedSelector} from "re-reselect";
import {gameObjectsByIdSelector} from "./game-objects";
import {getBehavior, GeyserBehavior} from "@/parser/main";

export const geyserConfigSelector = createCachedSelector(
  gameObjectsByIdSelector,
  (_: any, gameObjectId: number) => gameObjectId,
  (gameObjectsById, gameObjectId) => {
    if (!gameObjectsById || !gameObjectsById[gameObjectId]) {
      return null;
    }
    const gameObject = gameObjectsById[gameObjectId];

    const geyserBehavior = getBehavior(gameObject, GeyserBehavior);
    if (!geyserBehavior || !geyserBehavior.templateData.configuration) {
      return null;
    }
    return geyserBehavior.templateData.configuration;
  }
)((_: any, gameObjectId: number) => gameObjectId);

export const geyserPositionSelector = createCachedSelector(
    gameObjectsByIdSelector,
    (_: any, gameObjectId: number) => gameObjectId,
    (gameObjectsById, gameObjectId) => {
        const gameObject = gameObjectsById[gameObjectId];

        return gameObject.position;
    }
)((_: any, gameObjectId: number) => gameObjectId);