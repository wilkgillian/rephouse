import { Avatar, Box, HStack, Icon, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { TbCrown } from 'react-icons/tb';

export function Header() {
  const position = 'master';
  const router = useRouter();
  return (
    <HStack
      bgColor="gray.800"
      h={20}
      padding={4}
      justifyContent="space-between"
    >
      <Link passHref href="/">
        <Text color="#D69E2E" fontSize={28} fontWeight="bold">
          REP
          <Text as="span" color="white">
            House
          </Text>
        </Text>
      </Link>
      <Box
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VStack textAlign="center" mr={5}>
          <Text fontSize="lg" fontWeight="bold">
            Wilk Gillian
          </Text>
          <Text fontSize="sm" lineHeight="0">
            Master
          </Text>
        </VStack>
        <VStack mt={-4} height="100%" paddingTop={2}>
          {position === 'master' ? (
            <Icon
              as={TbCrown}
              position="absolute"
              zIndex={1}
              top={0.5}
              right={3}
              transform="rotate(35deg)"
              fontSize={32}
              color="yellow.500"
            />
          ) : (
            ''
          )}
          <Avatar
            onClick={() => router.push('/user')}
            position="relative"
            src="http://github.com/wilkgillian.png"
            border="3px solid #D69E2E"
          />
        </VStack>
      </Box>
    </HStack>
  );
}
