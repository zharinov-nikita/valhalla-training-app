import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Input from '../ui/Input/Input'

export default {
  title: 'Input',
  component: Input,
  args: {
    type: 'text',
  },
} as ComponentMeta<typeof Input>

export const Deafult: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
)
