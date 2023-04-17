import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    title: 'This is a Title',
    text: 'This is a long description or text about anytihing...',
};

export const Error = Template.bind({});
Error.args = {
    title: 'This is a Title',
    text: 'This is a long description or text about anytihing...',
    theme: TextTheme.ERROR,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'This is a Title',
    text: 'This is a long description or text about anytihing...',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'This is a Title.',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'This is a Dark Title.',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'This is a Title.',
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'This is a Title.',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Title lorem ipsun',
    text: 'Description Description Description Description',
    size: TextSize.L,
};
