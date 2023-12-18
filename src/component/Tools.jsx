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
  import npm from "../assets/npm.png";
  import netlify from "../assets/netlify.png";
  import replit from "../assets/replit.jpg";
  import router from "../assets/router.jpg";
  import vercel from "../assets/vercel.svg";
  import git from "../assets/git.png"

  
  export const Tools = () => {
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
          Tools
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
              src={git}
              alt="git"
            />
            <Image  m='auto' p="5px" w="100px" src={replit} alt="replit" />
            <Image  m='auto' p="5px" w="100px" src={npm} alt="npm" />
            <Image
              p="5px"
              m='auto'
              w="100px"
              // marginLeft={{ base: "5px", md: "60px" }}
              src={router}
              alt="router"
            />
            <Image  m='auto' p="5px" w="100px" src={netlify} alt="netlify" />
            <Image  m='auto' p="5px" w="100px" src={vercel} alt="vercel" />
          </Grid>
        </Center>
      </>
    );
  };
  