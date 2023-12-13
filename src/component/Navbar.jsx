// src/components/Navbar.js
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo2 from "../assets/logo2.jpg";
import {
  Box,
  Flex,
  Button,
  useColorMode,
  IconButton,
  Spacer,
  useColorModeValue,
  Image,
  FlexDirection,
} from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  // const Links = ["Home", "About", "Skills", "Projects", "Contact"];
  const Links = [
    { text: "Home", id: "#home" },
    { text: "About", id: "#about" },
    { text: "Skills", id: "#skills" },
    { text: "Projects", id: "#projects" },
    { text: "Contact", id: "#contact" },
  ];

  const NavLink = ({ text, id }) => {
    return (
      <div>
        <Link to={id} smooth>
          {text}
        </Link>
      </div>
    );
  };

  return (
    <Flex
      bg="rgb(90,90,90)"
      color="white"
      position="sticky"
      top="0"
      h="80px"
      alignItems="center"
    >
      <Image w="100px" src={logo2} alt="logo" />

      <Spacer />
      <Box p="5px" fontSize={'2rem'}>
        <Flex gap="1rem"
         

        >
          {Links.map((link) => (
            <NavLink text={link.text} id={link.id}  />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
