import {
    profileActions,
    profileReducer,
    {{pascalCase}}Schema,
    update{{pascalCase}}Data,
    Validate{{pascalCase}}Error,
} from 'entities/{{pascalCase}}';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const data = {
    username: 'admin',
    age: 48,
    country: Country.Georgia,
    lastname: 'Rezvanov',
    first: 'Adel',
    city: 'Tbilisi',
    currency: Currency.USD,
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<{{pascalCase}}Schema> = { readonly: false };
        expect(
            profileReducer(
                state as {{pascalCase}}Schema,
                profileActions.setReadOnly(true)
            )
        ).toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<{{pascalCase}}Schema> = {
            data,
            form: { username: '' },
        };

        expect(
            profileReducer(state as {{pascalCase}}Schema, profileActions.cancelEdit())
        ).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<{{pascalCase}}Schema> = { form: { username: '123' } };

        expect(
            profileReducer(
                state as {{pascalCase}}Schema,
                profileActions.update{{pascalCase}}({
                    username: '123456',
                })
            )
        ).toEqual({
            form: { username: '123456' },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<{{pascalCase}}Schema> = {
            isLoading: false,
            validateErrors: [Validate{{pascalCase}}Error.SERVER_ERROR],
        };

        expect(
            profileReducer(state as {{pascalCase}}Schema, update{{pascalCase}}Data.pending)
        ).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test update profile service fullfiled', () => {
        const state: DeepPartial<{{pascalCase}}Schema> = {
            isLoading: true,
        };

        expect(
            profileReducer(
                state as {{pascalCase}}Schema,
                update{{pascalCase}}Data.fulfilled(data, '')
            )
        ).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            validateError: undefined,
            form: data,
            data,
        });
    });
});
