import { TabsProps } from './Tabs'
import {Meta, StoryObj} from '@storybook/react'
import { Tabs } from './Tabs'

export default {
    title: 'Components/Tabs',
    component: Tabs,
    args: {
        label: 'Lorem Ipsum',
        value: 'Valor',
        option: 'Exemplo'
    },
    argTypes:{}
} as Meta<TabsProps>

export const Default: StoryObj<TabsProps> = {}