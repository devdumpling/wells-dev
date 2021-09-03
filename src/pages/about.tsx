import { Heading, Text, Stack } from "@chakra-ui/react";

import { Container } from "../components/Container";

const About = () => (
  <Container letterSpacing="widest" alignItems="flex-start" minHeight="100vh">
    <Stack spacing={8} maxW="2xl" mx="auto" my="8rem" px="0.5rem">
      <Heading size="4xl">Hi, I'm Devon!</Heading>
      <Text fontSize="4xl">
        I'm a software engineer dwelling in Columbus, OH.{" "}
        <span role="img" aria-label="wave">
          👋
        </span>
      </Text>
      <Text fontSize="4xl">
        Mostly, I work on web applications. I'm also doing the dad thing.
      </Text>      
      <Text as="u" alignSelf="flex-end" fontSize="2xl">
        <a href="mailto:devon.wells@pm.me?subject=Hi Devon">devon.wells@pm.me</a>
      </Text>      
    </Stack>
  </Container>
);

export default About;
