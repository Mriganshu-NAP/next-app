// NAPButton.stories.js

import React from 'react';
import NapButton from './index';

export default {
  title: 'Components/NAPButton',
  component: NapButton,
  argsTypes: {
    text: {control: 'text'}
  }
}

const Template = args => <NapButton {...args} />

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary'
}
export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary'
}
export const Ghost = Template.bind({});
Ghost.args = {
  type: 'ghost'
}
export const Outlined = Template.bind({});
Outlined.args = {
  type: 'outlined'
}
export const Link = Template.bind({});
Link.args = {
  type: 'link'
}