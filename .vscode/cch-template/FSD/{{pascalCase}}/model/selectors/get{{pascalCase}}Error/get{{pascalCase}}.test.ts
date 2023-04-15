// import { StateSchema } from 'app/providers/StoreProvider';
import { get{{pascalCase}}Error } from './get{{pascalCase}}Error';

describe('getLoginError.test', () => {
    test('should return profile data', () => {
        const state: DeepPartial<StateSchema> = {
            {{camelCase}}: {
                error: 'error',
            },
        };
        expect(get{{pascalCase}}Error(state as StateSchema)).toEqual('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(get{{pascalCase}}Error(state as StateSchema)).toEqual(undefined);
    });
});
