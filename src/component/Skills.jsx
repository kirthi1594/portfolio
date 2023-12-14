import {
  Box,
  Heading,
  Grid,
  GridItem,
  Image,
  Flex,
  Center,
} from "@chakra-ui/react";
import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import chakra from "../assets/chakra.png";
import github from "../assets/github.png";

export const Skills = () => {
  return (
    <>
      <Heading
        letterSpacing="1px"
        textDecoration="underline"
        marginTop={{ base: "50px", md: "100px" }}
        marginBottom="40px"
        _hover="blueviolet"
        id="skills"
      >
        Skills
      </Heading>

      <Center>
        <Grid
          w={{ base: "90%", md: "50%" }}
          bg="gray"
          justifyContent="center"
          alignItems="center"
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
          gap={{ base: 2, md: 5 }}
        >
          <Image
            p="5px"
            w="100px"
            marginLeft={{ base: "5px", md: "60px" }}
            src={html}
            alt="html"
          />
          <Image p="5px" w="100px" src={css} alt="css" />
          <Image p="5px" w="100px" src={js} alt="Js" />
          <Image
            p="5px"
            w="100px"
            marginLeft={{ base: "5px", md: "60px" }}
            src={react}
            alt="react"
          />
          <Image p="5px" w="100px" src={chakra} alt="chakra" />
          <Image p="5px" w="100px" src={github} alt="github" />
        </Grid>
      </Center>
    </>
  );
};
