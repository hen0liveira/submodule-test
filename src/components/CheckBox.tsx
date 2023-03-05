import { InputHTMLAttributes } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { styled } from '@stitches/react';
import { CheckIcon } from '@radix-ui/react-icons';

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement>{
  label?: string;
}

export const CheckBox = (props: CheckBoxProps ) => (
  <form>
    <Flex css={{ alignItems: 'center' }}>
      <CheckboxRoot defaultChecked id={props.id}>
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>
      </CheckboxRoot>
      <Label css={{ paddingLeft: 15 }} htmlFor={props.id}>
        {props.label}
      </Label>
    </Flex>
  </form>
);

const CheckboxRoot = styled(Checkbox.Root, {
  all: 'unset',
  backgroundColor: 'white',
  width: 25,
  height: 25,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 2px 10px #4b4b4b`,
  '&:hover': { backgroundColor: '#fefefe' },
  '&:focus': { boxShadow: `0 0 0 2px #4b4b4b` },
});

const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '#4b4b4b',
});

const Label = styled('label', {
  color: '#4b4b4b',
  fontSize: 15,
  lineHeight: 1,
  userSelect: 'none',
});

const Flex = styled('div', { display: 'flex' });

