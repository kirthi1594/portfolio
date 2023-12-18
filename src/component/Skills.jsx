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
import GithubCalendar from "./GithubCalendar";
import { Tools } from "./Tools";

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
        textAlign="center"
      >
        Skills
      </Heading>

      <Center>
        <Grid
          w={{ base: "90%", md: "50%" }}
          bg="gray"
          justifyContent="space-around"
          // alignItems="center"
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
          gap={{ base: 2, md: 5 }}
        >
          <Image
            // p="5px"
            w="100px"
            m='auto'
            // marginLeft={{ base: "5px", md: "60px" }}
            src={html}
            alt="html"
          />
          <Image  m='auto' p="5px" w="100px" src={css} alt="css" />
          <Image  m='auto' p="5px" w="100px" src={js} alt="Js" />
          <Image
            p="5px"
            m='auto'
            w="100px"
            // marginLeft={{ base: "5px", md: "60px" }}
            src={react}
            alt="react"
          />
          <Image  m='auto' p="5px" w="100px" src={chakra} alt="chakra" />
          <Image  m='auto' p="5px" w="100px" src={github} alt="github" />
        </Grid>
      </Center>
      <Tools/>
      <GithubCalendar/>
    </>
  );
};
