import { SaveGame } from "@/parser/main";

export enum LoadingStatus {
  Idle = "idle",
  Loading = "loading",
  Saving = "saving",
  Ready = "ready",
  Error = "error",
}

export interface CopyPasteData {
  gameObjectType: string;
  behaviors: Record<string, BehaviorCopyData>;
}
export interface BehaviorCopyData {
  templateData?: any;
  extraData?: any;
}

export interface FileMeta {
  name: string;
  size: number;
  type: string;
  lastModified: number;
}

export interface OniSaveState {
  loadingFile: FileMeta | null;
  loadingStatus: LoadingStatus;
  loadingProgressMessage: string | null;
  loadError: Error | null;
  saveGame: SaveGame | null;
  isMock: boolean;
  isModified: boolean;
  copyPasteData: CopyPasteData | null;
  warnInputChecksum: boolean;
}

export const defaultOniSaveState: Readonly<OniSaveState> = {
  loadingFile: null,
  loadingStatus: LoadingStatus.Idle,
  loadingProgressMessage: null,
  loadError: null,
  saveGame: null,
  isMock: false,
  isModified: false,
  copyPasteData: null,
  warnInputChecksum: false,
};
Object.freeze(defaultOniSaveState);
