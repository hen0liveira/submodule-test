import { RadioProps } from './RadioButton'
import {Meta, StoryObj} from '@storybook/react'
import RadioGroupDemo from './RadioButton'

export default {
    title: 'Components/RadioButton',
    component: RadioGroupDemo,
    args: {
        type: "radio",
        id: '1',
        title: 'Lorem Ipsum',
    },
    argTypes:{}
} as Meta<RadioProps>

export const Default: StoryObj<RadioProps> = {}