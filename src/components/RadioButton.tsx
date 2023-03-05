import * as RadioGroup from '@radix-ui/react-radio-group';
import { styled } from '@stitches/react';
import { InputHTMLAttributes } from 'react';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement>{}

const RadioGroupDemo = (props: RadioProps) => (
  <form>
    <RadioGroupRoot defaultValue="default" aria-label="View density">
      <Flex css={{ alignItems: 'center' }}>
        <RadioGroupItem value="default" id={props.id}>
          <RadioGroupIndicator />
        </RadioGroupItem>
        <Label htmlFor={props.id}>Default</Label>
      </Flex>
      <Flex css={{ alignItems: 'center' }}>
        <RadioGroupItem value="comfortable" id={props.id}>
          <RadioGroupIndicator />
        </RadioGroupItem>
        <Label htmlFor={props.id}>Comfortable</Label>
      </Flex>
      <Flex css={{ alignItems: 'center' }}>
        <RadioGroupItem value="compact" id={props.id}>
          <RadioGroupIndicator />
        </RadioGroupItem>
        <Label htmlFor={props.id}>Compact</Label>
      </Flex>
    </RadioGroupRoot>
  </form>
);

const RadioGroupRoot = styled(RadioGroup.Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

const RadioGroupItem = styled(RadioGroup.Item, {
  all: 'unset',
  backgroundColor: 'white',
  width: 25,
  height: 25,
  borderRadius: '100%',
  border: '1px solid #c7c7d2',
  boxShadow: `0 2px 10px #d6d6d6`,
  '&:hover': { backgroundColor: '#f6f6f6' },
  '&:focus': { boxShadow: `0 0 0 2px #d6d6d6` },
});

const RadioGroupIndicator = styled(RadioGroup.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: 11,
    height: 11,
    borderRadius: '50%',
    backgroundColor: '#33022f',
  },
});

const Flex = styled('div', { display: 'flex' });

const Label = styled('label', {
  color: '#4b4b4b',
  fontSize: 15,
  lineHeight: 1,
  userSelect: 'none',
  paddingLeft: 15,
});

export default RadioGroupDemo;