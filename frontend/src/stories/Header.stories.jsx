import React from 'react';

import Header from '../components/Header';

export default {
  title: 'Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Header {...args} />;

export const MainHeader = Template.bind({});

