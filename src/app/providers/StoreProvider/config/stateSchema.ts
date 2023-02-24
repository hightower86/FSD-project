import { UserSchema } from 'entities/User/model/types/user';
import { CounterSchema } from 'entities/Counter';

export interface CounterState {
    value: number;
}

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
}
