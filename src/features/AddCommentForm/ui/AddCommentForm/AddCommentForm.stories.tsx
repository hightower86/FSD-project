import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddCommentForm } from 'features/AddCommentForm';

export default {
    title: 'features/AddCommentForm/ui/AddCommentForm',
    component: AddCommentForm,
    argTypes: {},
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => (
    <AddCommentForm {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
