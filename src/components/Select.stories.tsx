import { SelectProps } from './Select'
import {Meta, StoryObj} from '@storybook/react'
import { Select } from './Select'

export default {
    title: 'Components/Select',
    component: Select,
    args: {
        label: 'Lorem Ipsum',
        value: 'Valor',
        option: 'Exemplo'
    },
    argTypes:{}
} as Meta<SelectProps>

export const Default: StoryObj<SelectProps> = {}