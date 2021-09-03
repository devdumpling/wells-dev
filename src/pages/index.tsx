import { Flex, Heading, Link, HStack } from "@chakra-ui/react";
import { Container } from "../components/Container";
import NextLink from "next/link";

import { DarkModeSwitch } from "../components/DarkModeSwitch";

const Index = () => (
  <Container minHeight="100vh">
    <Flex
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      height="100vh"
    >
      <Heading size="4xl">Devon Wells</Heading>
      <HStack>
        <NextLink href="/about" passHref>
          <Link fontSize="2xl" color="gray.500" _hover={{color: "teal"}}>
            about
          </Link>
        </NextLink>
        <NextLink href="/about" passHref>
          <Link fontSize="2xl" color="gray.500" _hover={{color: "teal"}}>
            blog
          </Link>
        </NextLink>
        <NextLink href="/about" passHref>
          <Link fontSize="2xl" color="gray.500" _hover={{color: "teal"}}>
            portfolio
          </Link>
        </NextLink>
      </HStack>
    </Flex>

    <DarkModeSwitch />
  </Container>
);

export default Index;
