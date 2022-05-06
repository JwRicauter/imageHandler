import React from 'react';
import NavBar from '../components/NavBar';


export default {
  title: 'NavBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <NavBar {...args} />;

export const MainNavBar = Template.bind({});

