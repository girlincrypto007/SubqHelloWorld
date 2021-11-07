"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarterEntity = void 0;
const tslib_1 = require("tslib");
const assert_1 = (0, tslib_1.__importDefault)(require("assert"));
class StarterEntity {
    constructor(id) {
        this.id = id;
    }
    async save() {
        let id = this.id;
        (0, assert_1.default)(id !== null, "Cannot save StarterEntity entity without an ID");
        await store.set('StarterEntity', id.toString(), this);
    }
    static async remove(id) {
        (0, assert_1.default)(id !== null, "Cannot remove StarterEntity entity without an ID");
        await store.remove('StarterEntity', id.toString());
    }
    static async get(id) {
        (0, assert_1.default)((id !== null && id !== undefined), "Cannot get StarterEntity entity without an ID");
        const record = await store.get('StarterEntity', id.toString());
        if (record) {
            return StarterEntity.create(record);
        }
        else {
            return;
        }
    }
    static create(record) {
        (0, assert_1.default)(typeof record.id === 'string', "id must be provided");
        let entity = new StarterEntity(record.id);
        Object.assign(entity, record);
        return entity;
    }
}
exports.StarterEntity = StarterEntity;
