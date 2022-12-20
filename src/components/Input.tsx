import {
  Icon,
  Input,
  InputGroup,
  InputProps as ChakraInputProps,
  InputLeftElement
} from '@chakra-ui/react';
import { ElementType } from 'react';

interface InputProps extends ChakraInputProps {
  icon: ElementType;
  placeholder?: string;
  type: string;
}

export default function InputField({ icon, placeholder, type }: InputProps) {
  return (
    <InputGroup w="full">
      <InputLeftElement pointerEvents="none" children={<Icon as={icon} />} />
      <Input type={type} placeholder={placeholder} />
    </InputGroup>
  );
}
