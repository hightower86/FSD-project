import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreProviderDecorator } from 'shared/config/storybook/StoreProviderDecorator/StoreProviderDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
    <LoginForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    className: 'className',
};
Primary.decorators = [
    StoreProviderDecorator({
        login: { username: '123', password: 'asd' },
    }),
];

export const Dark = Template.bind({});
Dark.args = {
    className: 'className',
};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreProviderDecorator({
        login: { username: '123', password: 'asd' },
    }),
];
