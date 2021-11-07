import { SubstrateExtrinsic, SubstrateEvent, SubstrateBlock } from "@subql/types";
export declare function handleBlock(block: SubstrateBlock): Promise<void>;
export declare function handleEvent(event: SubstrateEvent): Promise<void>;
export declare function handleCall(extrinsic: SubstrateExtrinsic): Promise<void>;
