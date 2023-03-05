import { AccordionProps } from './Accordion'
import {Meta, StoryObj} from '@storybook/react'
import AccordionDemo from './Accordion'

export default {
    title: 'Components/Accordion',
    component: AccordionDemo,
    args: {
        id: '1',
        label: 'Lorem Ipsum',
        children: (
            <div>
                <p>Lorem Ipsum</p>
            </div>
        )
    },
    argTypes:{}
} as Meta<AccordionProps>

export const Default: StoryObj<AccordionProps> = {}