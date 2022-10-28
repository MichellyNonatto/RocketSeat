import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps{
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
    return(
        <div className='flex intens-center gap-3 border-none py-4 px-3 rounded bg-gray-800 '>
            {props.children}
        </div>
    )
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

 function TextInputInput(props: TextInputInputProps) {
    return (
        <input
            className= ' bg-transparente flex-1 text-gray-100 text-xs w-full placeholder:text-gray-400 bg-gray-800  outline-none border-none'
           {...props}
        />
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
}