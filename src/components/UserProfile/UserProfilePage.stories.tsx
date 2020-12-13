import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { UserProfile, UserProfileProps } from './UserProfile';

export default {
    title: 'UserProfile',
    component: UserProfile,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<UserProfileProps> = args => <UserProfile {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    name: 'John Doe',
    followers: 20,
    tweets: ['hi there', 'second tweet', 'third tweet'],
    twitterHandle: 'https://twitter.com/MarkoDj59491254',
};
