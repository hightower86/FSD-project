import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { {{pascalCase}} } from 'entities/{{pascalCase}}';


const Template: ComponentStory<typeof {{pascalCase}}> = (args) => (
    <{{pascalCase}} {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
   
    },
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
