import {Container, Stack, Button, Flex, Box, Heading, Image, Link, useColorModeValue} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'

import { IoLogoGithub, IoLogoLinkedin, IoDocumentText, IoNewspaperOutline } from 'react-icons/io5'



const Page = () => {
    //<Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.300', 'whiteAlpha.200')} p={3} mb={6} align="left">
    return(
        <Layout>
        <Container>
            

            <Flex justifyContent="space-between" marginBottom="10px">
            
                <Box>
                
                    <Heading as="h2" variant="page-title">
                        Dustin Ma
                    </Heading>
                    <Heading as="h3" size="sm">
                        Software Engineer
                    </Heading>
                </Box>

                <Box>
                  
            
                    
            <Stack spacing={-1} direction='column' align='right'>
            <Link href="https://github.com/dustin-ma" target="_blank">        
                <Button colorScheme='teal' leftIcon={<IoLogoGithub />} size='sm' variant='ghost'>
                        Github
                </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/madustin/" target="_blank">   
                <Button colorScheme='teal' leftIcon={<IoLogoLinkedin />} size='sm' variant='ghost'>
                        LinkedIn
                 </Button>
            </Link>
            <Link href="httpw://www.google.ca" target="_blank">   
                <Button colorScheme='teal' leftIcon={<IoDocumentText />} size='sm' variant='ghost'>
                        Resume
                </Button>
            </Link>
  
        </Stack>
        </Box>
                
                
                
            </Flex>

            <Section delay={0.3} >
                
                    <Heading as="h3" variant="section-title">
                    About
                    </Heading>
                
                
                <Paragraph>Hi there,
                 I am a final year Computer Science student 
            studying at <Link href="https://google.com">Ryerson University</Link> in Toronto expecting to graduate in April 2022. I thrive to further develop my skills in order to
            articulate my ideas through meaningful work as a Software Engineer.
                I am currently seeking entry level opportunities with a company that I can 
                grow and learn with. Please feel free to check out my <Link href="https://google.com">work</Link> or <Link href="https://google.com">reach out</Link> to me.</Paragraph>
                
            </Section>

        </Container>
        </Layout>
    )
}

export default Page