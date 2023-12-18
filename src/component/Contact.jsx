import React from "react";
import { Box, Heading, Text, Image, Flex, Center } from "@chakra-ui/react";
import github from "../assets/github.png";
import ph from "../assets/ph.jpg";
import linkedin from "../assets/linkedin.png";
import mail from "../assets/mail.png";
import { PhoneIcon, AddIcon, EmailIcon } from "@chakra-ui/icons";

export const Contact = () => {
  return (
    <>
      <Heading
        id="contact"
        textDecoration="underline"
        marginTop={{ base: "50px", md: "100px" }}
        letterSpacing="1px"
        marginBottom="40px"
        _hover="blueviolet"
        textAlign="center"
      >
        Contact
      </Heading>
      <Center>
        <Box border="10px solid gray" p={{ base: "10px", md: "15px" }}>
          <Flex m="3px">
            <img
              style={{ width: "30px", margin: "none" }}
              src={mail}
              alt="linkdin"
            />
            <Text fontSize={{ base: "0.75rem", md: "1rem" }}>
              kirthikajayaraman15942gmail.com
            </Text>
          </Flex>
          <Flex m="3px">
            <img
              style={{ width: "30px", margin: "none" }}
              src={ph}
              alt="linkdin"
            />
            <Text fontSize={{ base: "0.75rem", md: "1rem" }}>9840167748</Text>
          </Flex>

          {/* <Flex><Image src={ph} alt='' w="3rem" /><Text>9840167748</Text></Flex> */}
          <Flex m="3px">
            <img
              style={{ width: "30px", margin: "none" }}
              src={linkedin}
              alt="linkdin"
            />
            <Text fontSize={{ base: "0.75rem", md: "1rem" }}>
              Kirthika Jayaraman
            </Text>{" "}
          </Flex>
          <Flex m="3px">
            <img
              style={{ width: "30px", margin: "none" }}
              src={github}
              alt="github"
            />
            <Text fontSize={{ base: "0.75rem", md: "1rem" }}>kirthi1594</Text>
          </Flex>
        </Box>
      </Center>
    </>
  );
};
