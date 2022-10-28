import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from "./Button";

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Criando um botão',
    },

    argsTypes: {
    }


} as Meta

export const Default: StoryObj<ButtonProps> = {}