import {Meta, StoryObj} from '@storybook/react'
import { ButtonProps, Button } from './Button'

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Submit',
    },
    argTypes:{
        backgroundColor: {control: 'color'}
    }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

// export const Small: StoryObj<ButtonProps> = {
//     // args: {
//     //     size: 'sm'
//     // }
// }

// export const Medium: StoryObj<ButtonProps> = {
//     // args: {
//     //     size: 'md'
//     // }
// }

// export const Large: StoryObj<ButtonProps> = {
//     // args: {
//     //     size: 'lg'
//     // }
// }

// export const CustomComponent: StoryObj<ButtonProps> = {
//     args: {
//         asChild: true,
//         children: (
//             <p>Teste</p>
//         )
//     },
//     argTypes:{
//         children:{
//             table: {
//                 disable: true
//             }
//         }
//     }
// }