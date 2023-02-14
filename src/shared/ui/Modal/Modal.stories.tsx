import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'shared/Modal',
    component: Modal,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum consectetur praesentium quisquam fugiat esse aspernatur adipisci necessitatibus, et facere quia, quod distinctio doloremque at ut ullam asperiores iste saepe! Alias rerum omnis modi ipsum atque. Nostrum libero earum qui! Ipsam, blanditiis eaque impedit dicta deserunt eligendi rerum reprehenderit pariatur iusto!',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum consectetur praesentium quisquam fugiat esse aspernatur adipisci necessitatibus, et facere quia, quod distinctio doloremque at ut ullam asperiores iste saepe! Alias rerum omnis modi ipsum atque. Nostrum libero earum qui! Ipsam, blanditiis eaque impedit dicta deserunt eligendi rerum reprehenderit pariatur iusto!',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
