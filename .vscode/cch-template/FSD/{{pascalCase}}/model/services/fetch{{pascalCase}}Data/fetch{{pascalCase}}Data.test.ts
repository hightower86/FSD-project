import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncthunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { fetch{{pascalCase}}Data } from './fetch{{pascalCase}}Data';

const profileData = {
    username: 'admin',
    age: 48,
    country: Country.Georgia,
    lastname: 'Rezvanov',
    first: 'Adel',
    city: 'Tbilisi',
    currency: Currency.USD,
};

describe('fetch{{pascalCase}}Data.test', () => {
    test('success fetching', async () => {
        const thunk = new TestAsyncThunk(fetch{{pascalCase}}Data);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: profileData }));
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profileData);
    });

    test('error profile fetching', async () => {
        const thunk = new TestAsyncThunk(fetch{{pascalCase}}Data);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
