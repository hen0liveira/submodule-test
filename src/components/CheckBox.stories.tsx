import { CheckBoxProps } from './CheckBox'
import {Meta, StoryObj} from '@storybook/react'
import { CheckBox } from './CheckBox'

export default {
    title: 'Components/Checkbox',
    component: CheckBox,
    args: {
        id: '1',
        label: 'Lorem Ipsum',
    },
    argTypes:{}
} as Meta<CheckBoxProps>

export const Default: StoryObj<CheckBoxProps> = {}