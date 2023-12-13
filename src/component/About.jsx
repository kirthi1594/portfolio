import React from "react";
import { Box, Container, Text, Heading, Center } from "@chakra-ui/react";

export const About = () => {
  return (
    <>
      <Heading
        marginTop="100px"
        letterSpacing="1px"
        marginBottom="40px"
        _hover="blueviolet"
        id="about"
        textDecoration='underline'
      >
        About Me
      </Heading>
      <Container maxW="4xl" bg="gray" p='20px'>
        <Center color="white" fontSize={'1.5rem'}>
          Frontend Developer with the ability to learn and collaborate in
          rapidly changing environments and compositions.  Creative thinker to
          achieve modern business requirements using technical solutions.
          Ability to develop production-ready code using HTML, CSS, Javascript ,
          React, Chakra UI with impressive user experience. Looking forward to
          honing my skills in a challenging work environment.
        </Center>
      </Container>
    </>
  );
};
