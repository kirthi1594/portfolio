// src/components/Navbar.js
import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo2 from "../assets/logo2.jpg";
import { Box, Flex, IconButton, useColorMode, Image } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);

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
        <Link to={id} smooth onClick={() => setIsOpen(false)}>
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
      zIndex="4"
      top="0"
      h="80px"
      alignItems="center"
      justifyContent="space-between"
      px={[4, 6, 8]} // Responsive padding
    >
      <Image w={["80px", "100px"]} src={logo2} alt="logo" />

      {/* Hamburger icon for smaller screens */}
      <IconButton
        display={["flex", "flex", "none"]}
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Menu"
        bg="transparent"
        _hover={{ bg: "transparent" }}
      />

      {/* Navigation links */}
      <Box
        display={["none", "none", "flex"]}
        p="5px"
        fontSize={["1rem", "1.5rem", "2rem"]}
      >
        <Flex gap="1rem">
          {Links.map((link) => (
            <NavLink key={link.text} text={link.text} id={link.id} />
          ))}
        </Flex>
      </Box>

      {/* Responsive navigation links */}
      <Box
        display={isOpen ? "flex" : "none"}
        flexDirection="column"
        position="absolute"
        top="80px"
        right="0"
        bg="rgb(90,90,90)"
        p={4}
      >
        {Links.map((link) => (
          <NavLink key={link.text} text={link.text} id={link.id} />
        ))}
      </Box>

      {/* Theme toggle icon */}
      <IconButton
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        aria-label="Toggle Theme"
        variant="ghost"
        color="white"
        fontSize="20px"
        _hover={{ bg: "transparent" }}
      />
    </Flex>
  );
};

export default Navbar;
