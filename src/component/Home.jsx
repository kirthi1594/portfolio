import { Box,Flex,Heading,Image,Text,Link } from '@chakra-ui/react'
import React from 'react'
import { Button } from 'react-scroll'
import {ExternalLinkIcon} from '@chakra-ui/icons';


export const Home = () => {
  return (
    <>
    
   <Flex id='home' h='calc(100vh-3rem)' >
    <Box w='60vw' marginTop='3rem' marginLeft='5rem'>
      <Text fontSize='1.5rem' pt='10px' textAlign='left'>Hello,</Text>
      <Heading fontSize='4rem'textAlign='left'>I am <Heading fontSize='4rem' color='blueviolet'>Kirthika</Heading></Heading>
      <Heading fontSize='3rem' textAlign='left'>Frontend Developer</Heading>
      <Text fontSize='2rem' textAlign='left'>I am a skilled web developer in creating user friendly website.</Text>
      <Button alignContent="left" style={{fontSize:'1.5rem',background:'blueviolet',alignContent:"flex-start", padding:".5em",borderRadius:".5em", color:"white"}}>
          <Link href='https://drive.google.com/file/d/1DfDfV0ErAmDbSsbkDSiUcUixGRZXmH4h/view?usp=sharing' isExternal>
          Resume<ExternalLinkIcon mx='2px' />
          </Link>
      </Button>
    </Box>
    <Image borderRadius='50%' src='https://ca.slack-edge.com/T056QHT26Q0-U05BN0VEA84-7a81981040de-512' alt='pic'/>

   </Flex>
    </>
  )
}
