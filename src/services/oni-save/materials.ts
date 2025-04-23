import { SimHashNames } from "@/parser/main";

// TODO: Seeds, clothing, other sweepables
export const MaterialGameObjectNames = [...SimHashNames];
export type MaterialObjectName = ArrayValues<typeof MaterialGameObjectNames>;
