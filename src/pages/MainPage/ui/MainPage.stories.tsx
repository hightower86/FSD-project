import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import MainPage from './MainPage';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Light = Template.bind({});
Light.decorators = [
    StoreDecorator({
        login: { username: '123', password: 'asd' },
    }),
];

export const Dark = Template.bind({});

Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        login: { username: '123', password: 'asd' },
    }),
];
