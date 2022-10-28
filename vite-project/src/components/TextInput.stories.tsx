import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputInputProps, TextInputRootProps } from "./TextInput";

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: (
            <TextInput.Input placeholder="Type your e-mail address"/>
        )
    },

    argsTypes: {}

} as Meta<TextInputInputProps>

export const Default: StoryObj<TextInputInputProps> = {}