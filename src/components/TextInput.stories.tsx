import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputIconProps, TextInputRootProps } from './TextInput'
import { Envelope } from 'phosphor-react'

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        label: "E-mail",
        children: (
            <>
                <TextInput.Input placeholder="Digite o seu email"></TextInput.Input>
            </>
        )
    },
    argTypes:{}
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

// export const WithIcon: StoryObj<TextInputRootProps> = {
//     args: {
//         children: (
//             <>
//                 <TextInput.Icon>
//                     <Envelope />
//                 </TextInput.Icon>
//                 <TextInput.Input placeholder="Digite o seu email"></TextInput.Input>
//             </>
//         )
//     },
    
// }
