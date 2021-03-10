import React from 'react';
import DemoComponent from './index';

export default {
  title: 'DemoComponent',
  component: DemoComponent
}

const Template = args => <DemoComponent {...args} />;

export const SimpleDemo = Template.bind({});
SimpleDemo.args = {
  type: 'primary',
  align: 'center'
}

export const SecondaryDemo = Template.bind({});
SecondaryDemo.args = {
  type: 'secondary',
  align: 'left'
}