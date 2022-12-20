import { Button, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';

export function Hero() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <VStack
      w="100%"
      justifyContent="center"
      alignItems="center"
      padding={10}
      bgGradient="linear(to-t, yellow.500, gray.300)"
      bgClip="text"
      gap={6}
    >
      <Text>
        Status atual:{' '}
        <Text as="strong" fontWeight="black" color={isOpen ? 'red' : 'green'}>
          {isOpen ? 'Aberto' : 'Fechado'}
        </Text>
      </Text>
      <Text fontWeight="bold" fontSize="3xl">
        Controles
      </Text>
      <Button
        variant="outline"
        colorScheme="green"
        rounded="button"
        flexGrow={1}
        fontSize="2xl"
        fontWeight="bold"
        textTransform="uppercase"
        h={20}
        w="full"
        disabled={isOpen ? true : false}
        onClick={() => setIsOpen(true)}
      >
        Desfechar
      </Button>
      <Button
        variant="outline"
        colorScheme="yellow"
        rounded="button"
        flexGrow={1}
        fontSize="2xl"
        fontWeight="bold"
        textTransform="uppercase"
        h={20}
        w="full"
      >
        PARAR
      </Button>
      <Button
        variant="outline"
        colorScheme="none"
        rounded="button"
        color="red"
        flexGrow={1}
        fontSize="2xl"
        fontWeight="bold"
        textTransform="uppercase"
        h={20}
        w="full"
        disabled={isOpen ? false : true}
        onClick={() => setIsOpen(false)}
      >
        Fechar
      </Button>
    </VStack>
  );
}
