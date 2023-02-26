import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';

export const StoreProviderDecorator = (story: () => Story) => (
    <StoreProvider>{story()}</StoreProvider>
);
