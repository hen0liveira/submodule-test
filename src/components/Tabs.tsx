import * as TabsDemo from '@radix-ui/react-tabs';
import { styled } from '@stitches/react';
import { InputHTMLAttributes } from 'react';

export interface TabsProps extends InputHTMLAttributes<HTMLInputElement>{

}


export const Tabs = (props: TabsProps) => (
  <TabsRoot defaultValue="tab1">
    <TabsList aria-label="Manage your account">
      <TabsTrigger value="tab1">Account</TabsTrigger>
      <TabsTrigger value="tab2">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">
      <Text></Text>
      <Fieldset>
        <Label htmlFor="name">Name</Label>
        <Input id="name" defaultValue ="" />
      </Fieldset>
      <Fieldset>
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="" />
      </Fieldset>
      <Flex css={{ marginTop: 20, justifyContent: 'flex-end' }}>
        <Button variant="green">Save changes</Button>
      </Flex>
    </TabsContent>
    <TabsContent value="tab2">
      <Text></Text>
      <Fieldset>
        <Label htmlFor="currentPassword">Current password</Label>
        <Input id="currentPassword" type="password" />
      </Fieldset>
      <Fieldset>
        <Label htmlFor="newPassword">New password</Label>
        <Input id="newPassword" type="password" />
      </Fieldset>
      <Fieldset>
        <Label htmlFor="confirmPassword">Confirm password</Label>
        <Input id="confirmPassword" type="password" />
      </Fieldset>
      <Flex css={{ marginTop: 20, justifyContent: 'flex-end' }}>
        <Button variant="green">Change password</Button>
      </Flex>
    </TabsContent>
  </TabsRoot>
);

const TabsRoot = styled(TabsDemo.Root, {
  display: 'flex',
  flexDirection: 'column',
  width: 300,
  boxShadow: `0 2px 10px #4b4b4b`,
});

const TabsList = styled(TabsDemo.List, {
  flexShrink: 0,
  display: 'flex',
  borderBottom: `1px solid black`,
});

const TabsTrigger = styled(TabsDemo.Trigger, {
  all: 'unset',
  fontFamily: 'inherit',
  backgroundColor: 'white',
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 15,
  lineHeight: 1,
  color: 'black',
  userSelect: 'none',
  '&:first-child': { borderTopLeftRadius: 6 },
  '&:last-child': { borderTopRightRadius: 6 },
  '&:hover': { color: '#33002F' },
  '&[data-state="active"]': {
    color: '#33002F',
    boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
  },
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px black` },
});

const TabsContent = styled(TabsDemo.Content, {
  flexGrow: 1,
  padding: 20,
  backgroundColor: 'white',
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  outline: 'none',
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

const Flex = styled('div', { display: 'flex' });

const Text = styled('p', {
  marginTop: 0,
  marginBottom: 20,
  color: '#4b4b4b',
  fontSize: 15,
  lineHeight: 1.5,
});

const Fieldset = styled('fieldset', {
  all: 'unset',
  marginBottom: 15,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
});

const Label = styled('label', {
  fontSize: 13,
  lineHeight: 1,
  marginBottom: 10,
  color: '#33002F',
  display: 'block',
});

const Input = styled('input', {
  all: 'unset',
  flex: '1 0 auto',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: 15,
  lineHeight: 1,
  color: '#33002F',
  boxShadow: `0 0 0 1px #33002F`,
  height: 35,
  '&:focus': { boxShadow: `0 0 0 2px #33002F` },
});

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
      green: {
        backgroundColor: '#33002f',
        color: 'white',
        '&:hover': { backgroundColor: '#33002f' },
        '&:focus': { boxShadow: `0 0 0 2px #33002f` },
      },
    },
  },

  defaultVariants: {
    variant: 'green',
  },
});