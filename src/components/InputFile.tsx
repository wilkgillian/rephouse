import {
  Box,
  FormLabel,
  Icon,
  Text,
  FormControl,
  Flex
} from '@chakra-ui/react';
import { FaUserCircle } from 'react-icons/fa';

export interface FileInputProps {
  name: string;
  title: string;
}

export default function FileInput({ name, title }: FileInputProps) {
  return (
    <FormControl>
      <FormLabel
        m="auto"
        w={28}
        h={28}
        htmlFor={name}
        cursor="pointer"
        // cursor={isSending ? "progress" : "pointer"}
        // opacity={isSending ? 0.5 : 1}
      >
        <Box
          pos="relative"
          h="full"
          border="2px dashed #9AE6B4"
          padding={2}
          borderRadius={20}
          color="#9AE6B4"
        >
          {/* {!!error && (
                  <Tooltip label={error.message} bg="red.500">
                    <FormErrorMessage
                      pos="absolute"
                      right={2}
                      top={2}
                      mt={0}
                      zIndex="tooltip"
                    >
                      <Icon as={FiAlertCircle} color="red.500" w={4} h={4} />
                    </FormErrorMessage>
                  </Tooltip>
                )} */}

          <Flex
            h="full"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
          >
            <Icon as={FaUserCircle} fontSize={32} />
            <Text as="span" pt={2} fontSize={14} textAlign="center">
              {title}
            </Text>
          </Flex>
        </Box>
        <input
          data-testid={name}
          //   disabled={isSending}
          id={name}
          name={name}
          //   onChange={handleImageUpload}
          //   ref={ref}
          type="file"
          style={{
            display: 'none'
          }}
          //   {...rest}
        />
      </FormLabel>
    </FormControl>
  );
}
