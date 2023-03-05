import React, { InputHTMLAttributes } from 'react';
import * as SelectDemo from '@radix-ui/react-select';
import { styled } from '@stitches/react';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

export interface SelectProps extends InputHTMLAttributes<HTMLInputElement>{
  label?: string;
  option: string;
}

export const Select = ({label, value, option}: SelectProps ) => (
  <SelectDemo.Root>
    <SelectTrigger aria-label="Food">
      <SelectDemo.Value placeholder={label} />
      <SelectIcon>
        <ChevronDownIcon />
      </SelectIcon>
    </SelectTrigger>
    <SelectDemo.Portal>
      <SelectContent>
        <SelectScrollUpButton>
          <ChevronUpIcon />
        </SelectScrollUpButton>
        <SelectViewport>
          <SelectDemo.Group>
            {/* <SelectLabel>{label}</SelectLabel> */}
            <SelectItem value={value}>{option}</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectDemo.Group>
         </SelectViewport>
        <SelectScrollDownButton>
          <ChevronDownIcon />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectDemo.Portal>
  </SelectDemo.Root>
);

const SelectTrigger = styled(SelectDemo.SelectTrigger, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 13,
  lineHeight: 1,
  height: 35,
  gap: 5,
  backgroundColor: 'white',
  border: '1px solid black',
  color: '#33002F',
  boxShadow: `0 2px 10px '#4b4b4b'`,
  '&:hover': { backgroundColor: "" },
  '&:focus': { boxShadow: `0 0 0 2px #33002F` },
  '&[data-placeholder]': { color: '#33002F' },
});

const SelectIcon = styled(SelectDemo.SelectIcon, {
  color: '#33002F',
});

const SelectContent = styled(SelectDemo.Content, {
  overflow: 'hidden',
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});

const SelectViewport = styled(SelectDemo.Viewport, {
  padding: 5,
});

const SelectItem = React.forwardRef(({ children, ...props }: any, forwardedRef) => {
  return (
    <StyledItem {...props} ref={forwardedRef}>
      <SelectDemo.ItemText>{children}</SelectDemo.ItemText>
      <StyledItemIndicator>
        <CheckIcon />
      </StyledItemIndicator>
    </StyledItem>
  );
});

const StyledItem = styled(SelectDemo.Item, {
  fontSize: 13,
  lineHeight: 1,
  color: '#33002F',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 35px 0 25px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: '#4b4b4b',
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    outline: 'none',
    backgroundColor: '#eaeaea',
    color: '#33002F',
  },
});

const SelectLabel = styled(SelectDemo.Label, {
  padding: '0 25px',
  fontSize: 12,
  lineHeight: '25px',
  color: '#4b4b4b',
});

const SelectSeparator = styled(SelectDemo.Separator, {
  height: 1,
  backgroundColor: 'violet',
  margin: 5,
});

const StyledItemIndicator = styled(SelectDemo.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: 'white',
  color: '#33002F',
  cursor: 'default',
};

const SelectScrollUpButton = styled(SelectDemo.ScrollUpButton, scrollButtonStyles);

const SelectScrollDownButton = styled(SelectDemo.ScrollDownButton, scrollButtonStyles);

export default SelectDemo;