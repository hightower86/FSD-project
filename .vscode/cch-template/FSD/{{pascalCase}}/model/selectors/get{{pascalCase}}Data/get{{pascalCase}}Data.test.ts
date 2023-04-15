import { StateSchema } from 'app/providers/StoreProvider';
import { get{{pascalCase}}Data } from './get{{pascalCase}}Data';

describe('getLoginError.test', () => {
    test('should return profile data', () => {
  
        expect(get{{pascalCase}}Data(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(get{{pascalCase}}Data(state as StateSchema)).toEqual(undefined);
    });
});
