import * as React from "react";
import {GeyserType, GeyserBehavior, Vector3} from "@/parser/main";
import {useSelector, useDispatch} from "react-redux";

import {AppState} from "@/state";

import {geyserConfigSelector, geyserPositionSelector} from "../selectors/geysers";
import {modifyBehavior, BehaviorDataTarget} from "../actions/modify-behavior";
import {changeGeyserType} from "../actions/change-geyser-type";
import {changeGeyserParameter} from "../actions/change-geyser-parameter";
import {modifyPosition} from "@/services/oni-save/actions/modify-position";

export interface UseGeyser {
    geyserType: string | null;
    emitRate: number | null;
    yearLength: number | null;
    yearActive: number | null;
    emitActive: number | null;
    position: Vector3;

    onChangePosition(position: Vector3): void;

    onChangeEmitRate(rate: number): void;

    onChangeGeyserType(type: string): void;

    onChangeYearLength(fraction: number): void;

    onChangeYearActive(fraction: number): void;

    onChangeEmitActive(fraction: number): void;
}

export default function useGeyser(gameObjectId: number): UseGeyser {
    const dispatch = useDispatch();
    const config = useSelector((state: AppState) =>
        geyserConfigSelector(state, gameObjectId)
    );
    const position = useSelector((state: AppState) =>
        geyserPositionSelector(state, gameObjectId)
    );

    const onChangeEmitRate = React.useCallback(
        (rate: number) => {
            dispatch(
                modifyBehavior(
                    gameObjectId,
                    GeyserBehavior,
                    BehaviorDataTarget.Template,
                    {
                        configuration: {
                            rateRoll: rate
                        }
                    },
                    true
                )
            );
        },
        [dispatch, gameObjectId]
    );

    const onChangePosition = React.useCallback(
        (position: Vector3) => {
            dispatch(
                modifyPosition(
                    gameObjectId,
                    position
                )
            );
        },
        [dispatch, gameObjectId]
    );

    const onChangeGeyserType = React.useCallback(
        (type: string) => {
            dispatch(changeGeyserType(gameObjectId, type));
        },
        [dispatch, gameObjectId]
    );

    const onChangeYearLength = React.useCallback(
        (fraction: number) => {
            dispatch(changeGeyserParameter(gameObjectId, "yearLengthRoll", fraction));
        },
        [dispatch, gameObjectId]
    );

    const onChangeYearActive = React.useCallback(
        (fraction: number) => {
            dispatch(
                changeGeyserParameter(gameObjectId, "yearPercentRoll", fraction)
            );
        },
        [dispatch, gameObjectId]
    );

    const onChangeEmitActive = React.useCallback(
        (fraction: number) => {
            dispatch(
                changeGeyserParameter(gameObjectId, "iterationPercentRoll", fraction)
            );
        },
        [dispatch, gameObjectId]
    );

    return {
        geyserType: config ? GeyserType[config.typeId.hash] : null,
        emitRate: config ? config.rateRoll : null,
        yearLength: config ? config.yearLengthRoll : null,
        yearActive: config ? config.yearPercentRoll : null,
        emitActive: config ? config.iterationPercentRoll : null,
        position: position,
        onChangeEmitRate,
        onChangeGeyserType,
        onChangeYearLength,
        onChangeYearActive,
        onChangeEmitActive,
        onChangePosition
    };
}
