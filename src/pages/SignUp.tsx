import { Box, Button, Checkbox, Text, VStack } from '@chakra-ui/react';
import { FaSmoking, FaUserAstronaut, FaUserFriends } from 'react-icons/fa';
import { GiNothingToSay } from 'react-icons/gi';
import { BsFillTelephonePlusFill } from 'react-icons/bs';
import { Container } from '../components/Container';
import InputField from '../components/Input';
import FileInput from '../components/InputFile';

export default function SignUp() {
  return (
    <Container height="100vh">
      <VStack mt={6} gap={4} fontWeight="bold" as="form">
        <Text fontSize={24} textAlign="center">
          Cadastre um corno(a) <br /> e libere sua entrada <br />
          😏
        </Text>
        <FileInput name="Foto do elemento" title="Foto do elemento" />
        <InputField
          icon={FaUserAstronaut}
          type="text"
          placeholder="Nome do elemento"
        />
        <InputField icon={GiNothingToSay} type="text" placeholder="Pra que?" />
        <InputField
          icon={BsFillTelephonePlusFill}
          type="tel"
          placeholder="Contato"
        />
        <InputField
          icon={FaUserFriends}
          type="text"
          placeholder="Tipo de vínculo"
        />
        <Box w="full">
          <FaSmoking />
          <Checkbox>É nóia?</Checkbox>
        </Box>
        <Button
          type="submit"
          textTransform="uppercase"
          w="full"
          colorScheme="green"
          variant="outline"
        >
          Cadastrar
        </Button>
      </VStack>
    </Container>
  );
}
