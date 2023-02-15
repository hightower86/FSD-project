import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'app/entities/Counter';
import { StateSchema } from './stateSchema';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
