import React from 'react'
import { Link,Box,Heading, Flex,Card,Image,Stack,Text,Divider,CardBody,CardFooter,ButtonGroup,Button, Spacer, } from '@chakra-ui/react'
// import { Link } from 'react-router-dom'
import dora from '../assets/dora.png'
import kfc from '../assets/kfc.png'

export const Projects = () => {
  return (
    <>
    <Heading marginTop="100px" textDecoration='underline' letterSpacing='1px' marginBottom="40px"  id='projects'>
        Projects
      </Heading>

      <Flex justifyContent='center'  margin='5% 15%' padding='2%' gap="2em" background='gray'>
      <Card maxW='md' >
  <CardBody>
    <Image
      src={dora}
      alt='dora'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>SuperHero Resume</Heading>
      <Text>
        SuperHero Resume contents information about the animation character.
      </Text>
      <Text color='blueviolet' fontSize='2xl'>
        Tech-Stack:HTML|CSS
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='gray'>
        Git Repo <Link href='https://github.com/masai-course/kirthika_jayaraman_cap05_160/tree/master/SuperHero'></Link>
      </Button>
      <Button variant='solid' colorScheme='gray'>
        Git Live <Link href='https://luminous-gingersnap-8be22f.netlify.app' isExternal></Link>
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>


<Card maxW='md'>
  <CardBody>
    <Image
      src={kfc}
      alt='kfc'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>KFC</Heading>
      <Text>
       
KFC is a fast-food restaurant chain that specializes in fried chicken.
Helps to find nearby locations, and place online orders
      </Text>
      <Text color='blueviolet' fontSize='2xl'>
        Tech-Stack:
        <Text>HTML|CSS|JavaScript|React|ChakraUI</Text>
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='gray'>
        Git Repo <Link href='https://github.com/kirthi1594/kfc/tree/main/kfc'/>
      </Button>
      <Button variant='solid' colorScheme='gray'>
        Go Live <Link href='https://kfcc-a7j15uloo-kirthika-js-projects.vercel.app/'/>
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</Flex>


      </>
  )
}
