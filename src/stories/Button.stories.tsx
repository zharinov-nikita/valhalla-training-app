import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from '../ui/Button/Button'

export default {
  title: 'Button',
  component: Button,
  args: {
    text: 'Кнопка',
    color: 'gray',
    size: 'medium',
  },
} as ComponentMeta<typeof Button>

export const Deafult: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)
