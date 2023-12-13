import { Box,Heading,Grid,GridItem,Image, Flex,Center } from '@chakra-ui/react'
import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import chakra from '../assets/chakra.png'
import github from '../assets/github.png'

export const Skills = () => {
  return (
    <>
    <Heading letterSpacing='1px' textDecoration='underline' marginTop="100px" marginBottom="40px" _hover="blueviolet" id='skills'>
    Skills
  </Heading>

  <Center>
  <Grid w='60%' bg='gray' justifyContent='center' templateColumns='repeat(3, 1fr)' gap={6}>
  <  Image  w='100px' marginBottom='50px' marginLeft='50px' marginTop='50px' src={html} alt='html'/>
  <  Image  w='100px' marginBottom='50px' marginLeft='50px' marginTop='50px' src={css} alt='css'/>
  <  Image  w='100px' marginBottom='50px' marginLeft='50px' marginTop='50px' src={js} alt='Js'/>
  <  Image  w='100px' marginBottom='50px' marginLeft='50px' src={react} alt='react'/>
  <  Image  w='100px' marginBottom='50px' marginLeft='50px' src={chakra} alt='chakra'/>
  <  Image  w='100px' marginBottom='50px' marginLeft='50px' src={github} alt='github'/>
</Grid>
</Center>
</>
  )
}
