
import { Check } from 'phosphor-react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

export interface CheckboxProps { }

export function Checkbox({ }: CheckboxProps) {
    return (
        <CheckboxPrimitive.Root
            className='w-6 h-6 p-0 bg-gray-800 rounded border-none'
        >
            <CheckboxPrimitive.Indicator asChild>
                <Check weight='bold' className='h-5 w-5 text-cyan-500'/>
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
}