import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Link,
  Button,
} from "@chakra-ui/react";
import React from "react";
// import { Button } from 'react-scroll'
import { ExternalLinkIcon } from "@chakra-ui/icons";

export const Home = () => {
  return (
    <>
      <Flex
        id="home"
        h="calc(100vh-3rem)"
        direction={{ base: "column", md: "row" }}
      >
        <Box
          w={{ base: "100%", md: "60%" }}
          marginTop={{ base: "2rem", md: "3rem" }}
          marginLeft={{ md: "5rem" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text fontSize={{ base: "1.5rem", md: "2rem" }} pt="10px">
            Hello,
          </Text>
          <Heading fontSize={{ base: "3rem", md: "4rem" }} textAlign="left">
            I am{" "}
            <Heading as="span" fontSize="4rem" color="blueviolet">
              Kirthika
            </Heading>
          </Heading>
          <Heading fontSize={{ base: "2rem", md: "3rem" }} textAlign="left">
            Frontend Developer
          </Heading>
          <Text fontSize={{ base: "1.5rem", md: "2rem" }} textAlign="left">
            I am a skilled web developer in creating user friendly website.
          </Text>
          <Button
            style={{
              fontSize: "1.5rem",
              background: "blueviolet",
              padding: ".5em",
              borderRadius: ".5em",
              color: "white",
            }}
          >
            <Link
              href="https://drive.google.com/file/d/1DfDfV0ErAmDbSsbkDSiUcUixGRZXmH4h/view?usp=sharing"
              isExternal
            >
              Resume
              <ExternalLinkIcon mx="2px" />
            </Link>
          </Button>
        </Box>
        <Image
          borderRadius="50%"
          src="https://ca.slack-edge.com/T056QHT26Q0-U05BN0VEA84-7a81981040de-512"
          alt="pic"
          w={{ base: "100%", md: "40%" }}
          mt={{ base: "2rem", md: "0" }}
        />
      </Flex>
    </>
  );
};