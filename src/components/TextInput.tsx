import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>{
    label?: string;
}

export interface TextInputRootProps{
    children: ReactNode;
}

export interface TextInputIconProps{ 
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps){
    return (
        <Slot className="w-6 h-6 ml-[12px] text-gray-mid absolute">
            {props.children}
        </Slot>
    )
}

TextInputIcon.displayName = "TextInputIcon"

function TextInputRoot(props: TextInputProps){
    return (
        <>
            <label className="text-xs ml-1 text-gray-strong">{props.label}</label>
            <div className="flex items-center gap-3 w-full h-12 appearance-none leading-tight focus:bg-white focus:ring-2 ring-gray-strong">
                {props.children}
            </div>
        </>
    )
}

function TextInputInput(props: TextInputProps) {
    return <input 
        className="flex-1 text-xs placeholder:text-gray-x-light rounded-large py-3 px-4 border-[1px] border-gray-mid"
        {...props} 
        />
}

export const TextInput = { 
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}