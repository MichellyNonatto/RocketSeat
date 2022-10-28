import { clsx } from 'clsx';
import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-Slot';

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';
    return (
        <Comp className={
            clsx(
                'py-4 px-3 bg-cyan-500 rounded font-semibold  text-black w-full border-none outline-none transition-colors hover:bg-cyan-300 focus:right-2 ringht-white',
            )}>
            {children}
        </Comp>
    )
}