import React, { InputHTMLAttributes, ReactNode } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { styled, keyframes } from '@stitches/react';
import { ChevronDownIcon } from '@radix-ui/react-icons';

export interface AccordionProps {
  id: string,
  label: string,
  children: ReactNode
}

const AccordionDemo = ({id, label, children}: AccordionProps) => (
  <AccordionRoot type="single" defaultValue={id} collapsible>

    <AccordionItem value={id}>
      <AccordionTrigger>{label}</AccordionTrigger>
      <AccordionContent>{children}</AccordionContent>
    </AccordionItem>

  </AccordionRoot>
);

const AccordionRoot = styled(Accordion.Root, {
  borderRadius: 6,
  width: '100%',
  backgroundColor: "#FFFFFF",
  boxShadow: `#a5a5a5 0px 2px 10px`,
});

const AccordionItem = styled(Accordion.Item, {
  overflow: 'hidden',
  marginTop: 1,

  '&:first-child': {
    marginTop: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  '&:last-child': {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: `0 0 0 2px #4B4B4B`,
  },
});

const AccordionTrigger = React.forwardRef(({ children, ...props }: any, forwardedRef) => (
  <StyledHeader>
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <StyledChevron aria-hidden />
    </StyledTrigger>
  </StyledHeader>
));

const AccordionContent = React.forwardRef(({ children, ...props }: any, forwardedRef) => (
  <StyledContent {...props} ref={forwardedRef}>
    <StyledContentText>{children}</StyledContentText>
  </StyledContent>
));

const StyledHeader = styled(Accordion.Header, {
  all: 'unset',
  display: 'flex',
});

const StyledTrigger = styled(Accordion.Trigger, {
  all: 'unset',
  fontFamily: 'inherit',
  backgroundColor: 'transparent',
  padding: '0 20px',
  height: 65,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: 18,
  lineHeight: 1,
  color: "#4B4B4B",
  boxShadow: `0 1px 0 "purple"`,
  '&:hover': { backgroundColor: "#f3f3f3" },
});

const StyledChevron = styled(ChevronDownIcon, {
  width: '18px',
  height: '18px',
  color: "#4B4B4B",
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
});

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});

const StyledContent = styled(Accordion.Content, {
  overflow: 'hidden',
  fontSize: 15,
  color: "black",
  fontWeight: 'lighter',
  backgroundColor: "white",

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

const StyledContentText = styled('div', {
  padding: '15px 20px',
  fontWeight: 'lighter'  
});

export default AccordionDemo;