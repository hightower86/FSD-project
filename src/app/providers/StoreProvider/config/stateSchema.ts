import { CounterSchema } from 'app/entities/Counter';

export interface CounterState {
    value: number;
}

export interface StateSchema {
    counter: CounterSchema;
}
