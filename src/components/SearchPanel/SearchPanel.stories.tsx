import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SearchPanel, SearchPanelProps } from './SearchPanel';

export default {
    title: 'SearchPanel',
    component: SearchPanel,
} as Meta;

const Template: Story<SearchPanelProps> = args => <SearchPanel {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
