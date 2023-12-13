import React from 'react'
import { Box,Heading, Text,Image, Flex, Center} from '@chakra-ui/react'
import github from '../assets/github.png'
import ph from '../assets/ph.jpg'
import linkedin from '../assets/linkedin.png'
import mail from '../assets/mail.png'
import { PhoneIcon, AddIcon, EmailIcon } from '@chakra-ui/icons'



export const Contact = () => {
  return (
    
    <>
    <Heading id='contact' textDecoration='underline' marginTop="100px" letterSpacing='1px' marginBottom="40px" _hover="blueviolet">
    Contact
  </Heading>
  <Center>
  <Box border='10px solid blueviolet' p='15px'>
  <Flex><img style={{width:"30px", margin:"none",}} src={mail} alt='linkdin'/><Text fontSize='1.25rem'>kirthikajayaraman15942gmail.com</Text></Flex>
  <Flex><img style={{width:"30px", margin:"none",}} src={ph} alt='linkdin'/><Text fontSize='1.25rem'>9840167748</Text></Flex>
  
  {/* <Flex><Image src={ph} alt='' w="3rem" /><Text>9840167748</Text></Flex> */}
  <Flex><img style={{width:"30px", margin:"none",}} src={linkedin} alt='linkdin'/><Text fontSize='1.25rem'>Kirthika Jayaraman</Text> </Flex>
  <Flex><img style={{width:"30px", margin:"none"}} src={github} alt='github'/><Text fontSize='1.25rem'>kirthi1594</Text>
  </Flex>
  </Box>
  
  </Center>
  </>
  )
}
