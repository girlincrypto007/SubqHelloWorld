"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleCall = exports.handleEvent = exports.handleBlock = void 0;
const types_1 = require("../types");
async function handleBlock(block) {
    //Create a new starterEntity with ID using block hash
    let record = new types_1.StarterEntity(block.block.header.hash.toString());
    //Record block number
    record.field1 = block.block.header.number.toNumber();
    await record.save();
}
exports.handleBlock = handleBlock;
async function handleEvent(event) {
    const { event: { data: [account, balance] } } = event;
    //Retrieve the record by its ID
    const record = await types_1.StarterEntity.get(event.extrinsic.block.block.header.hash.toString());
    record.field2 = account.toString();
    //Big integer type Balance of a transfer event
    record.field3 = balance.toBigInt();
    await record.save();
}
exports.handleEvent = handleEvent;
async function handleCall(extrinsic) {
    const record = await types_1.StarterEntity.get(extrinsic.block.block.header.hash.toString());
    //Date type timestamp
    record.field4 = extrinsic.block.timestamp;
    //Boolean tyep
    record.field5 = true;
    await record.save();
}
exports.handleCall = handleCall;
