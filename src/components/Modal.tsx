import { ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { styled, keyframes } from '@stitches/react';
// import { violet, blackA, mauve, green } from '@radix-ui/colors';
import { Cross2Icon } from '@radix-ui/react-icons';
// import { Button } from './Button';

export interface ModalProps {
  open?: boolean,
  setOpen?: (open: boolean) => void,
  children?: ReactNode
}

export const Modal = ({open, setOpen, children}: ModalProps) => {

return (
  <Dialog.Root open={open} onOpenChange={setOpen}>
    <Dialog.Trigger>
     <button>Open Modal</button>
    </Dialog.Trigger >
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        {children}
        {/* <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
        <Fieldset>
          <Label htmlFor="name">Name</Label>
          <Input id="name" defaultValue="Pedro Duarte" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="username">Username</Label>
          <Input id="username" defaultValue="@peduarte" />
        </Fieldset>
        <Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
          <Dialog.Close asChild>
            <Button>Save changes</Button>
          </Dialog.Close>
        </Flex> */}
        <Dialog.Close asChild>
          <IconButton aria-label="Close" onClick={() => setOpen?.(false) }>
            <Cross2Icon aria-label="Close" />
          </IconButton>
        </Dialog.Close>
      </DialogContent>
    </Dialog.Portal>
  </Dialog.Root>
)};

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: '#9c9c9c99',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

const DialogContent = styled(Dialog.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' },
});

const DialogTitle = styled(Dialog.Title, {
  margin: 0,
  fontWeight: 500,
  color: '#4b4b4b',
  fontSize: 17,
});

const DialogDescription = styled(Dialog.Description, {
  margin: '10px 0 20px',
  color: 'black',
  fontSize: 15,
  lineHeight: 1.5,
});

const Flex = styled('div', { display: 'flex' });

const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    variant: {
      violet: {
        backgroundColor: 'white',
        color: '#4B4B4B',
        boxShadow: `0 2px 10px #9c9c9c99`,
        '&:hover': { backgroundColor: 'gray' },
        '&:focus': { boxShadow: `0 0 0 2px #9c9c9c99` },
      },
      green: {
        backgroundColor: 'green',
        color: 'green',
        '&:hover': { backgroundColor: 'green' },
        '&:focus': { boxShadow: `0 0 0 2px green` },
      },
    },
  },

  defaultVariants: {
    variant: '#33002f',
  },
});

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#33002f',
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': { backgroundColor: 'gray' },
  '&:focus': { boxShadow: `0 0 0 2px #33002f` },
});

const Fieldset = styled('fieldset', {
  all: 'unset',
  display: 'flex',
  gap: 20,
  alignItems: 'center',
  marginBottom: 15,
});

const Label = styled('label', {
  fontSize: 15,
  color: 'Violet',
  width: 90,
  textAlign: 'right',
});

const Input = styled('input', {
  all: 'unset',
  width: '100%',
  flex: '1',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: 15,
  lineHeight: 1,
  color: 'violet',
  boxShadow: `0 0 0 1px violet`,
  height: 35,

  '&:focus': { boxShadow: `0 0 0 2px violet` },
});
