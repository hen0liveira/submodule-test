import { ModalProps } from './Modal'
import {Meta, StoryObj} from '@storybook/react'
import { Modal } from './Modal'

export default {
    title: 'Components/Modal',
    component: Modal,
    args: {
        children: (
            <div>
                <p>Modal Content</p>
            </div>
        )
    },
    argTypes:{}
} as Meta<ModalProps>

export const Default: StoryObj<ModalProps> = {}