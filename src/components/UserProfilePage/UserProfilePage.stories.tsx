import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { UserProfilePage, UserProfilePageProps } from './UserProfilePage';

export default {
    title: 'UserProfilePage',
    component: UserProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<UserProfilePageProps> = args => <UserProfilePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
