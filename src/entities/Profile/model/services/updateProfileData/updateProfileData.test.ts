import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncthunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileError } from '../../types/profile';

const profileData = {
    username: 'admin',
    age: 48,
    country: Country.Georgia,
    lastname: 'Rezvanov',
    first: 'Adel',
    city: 'Tbilisi',
    currency: Currency.USD,
};

describe('updateProfileData.test', () => {
    test('success update', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: profileData,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data: profileData }));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profileData);
    });

    test('error profile updating', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: profileData,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...profileData, lastname: '' },
            },
        });

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
});
