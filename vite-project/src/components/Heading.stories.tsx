import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from "./Heading";

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Subtitulo da página',
        size: 'md',
    },

    argsTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }


} as Meta

export const Default: StoryObj<HeadingProps> = {}
export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm',
    }
}
export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}
export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <p>Teste</p>
        )
    },

    argTypes: {
        children: {
            table: {
                disable: true,
            }
        }
    },
}