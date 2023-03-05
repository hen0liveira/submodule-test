import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface ButtonProps{
    backgroundColor?: string,
    children: ReactNode;
    asChild?: boolean; 
    onClick?: () => void;
}

export function Button({children, asChild, onClick, backgroundColor}: ButtonProps) {
    const Comp = asChild ? Slot : 'button';
    
    return <Comp
        style={{backgroundColor: backgroundColor}} 
        className={clsx(`${backgroundColor ? '' : 'bg-violet'} hover:bg-purple font-bold w-full text-center text-sm h-10 rounded-full focus:ring-2 focus:ring-gray-mid text-white`)} 
        onClick={onClick} 
        >
            {children}
        </Comp>
}