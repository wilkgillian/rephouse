import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { Container } from './Container';

interface FooterProps {
  isMaster: boolean;
}
export default function Footer({ isMaster }: FooterProps) {
  const router = useRouter();
  function handleSignUp() {
    if (isMaster) {
      router.push('/SignUp');
    } else {
      alert('Você não é master vacilão');
      return;
    }
  }
  return (
    <Container
      flexDirection="row"
      position="fixed"
      bottom={0}
      width="full"
      maxWidth="3xl"
      py={3}
    >
      <Button
        as="a"
        variant="solid"
        colorScheme="green"
        fontWeight="black"
        rounded="button"
        flexGrow={3}
        mx={2}
        width="100%"
        textTransform="uppercase"
        onClick={handleSignUp}
      >
        Cadastrar corno(a)
      </Button>
    </Container>
  );
}
