import {Entity, Schema} from 'redis-om';

class Todo extends Entity {
    toJSON() {
        return {
            id: this.entityId,
            todo: this.todo,
            status: this.status,
        }
    }
}

export const todoSchema = new Schema(Todo, {
    todo: {
        type: 'string',
    },
    status: {
        type: 'string',
    },
})
