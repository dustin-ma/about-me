
import { Container, Badge, Link, List, ListItem, Heading, UnorderedList } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, ButtonBox } from '../../components/work'
import Layout from '../../components/layouts/article'
import NextLink from 'next/link'



const Work = () => (
    <Layout title="React Interactive Landing Page">
      <Container>
        <Title>
          Interactive Landing Page <Badge>2021</Badge>
        </Title>

        <List ml={4} mb={4}>
        <ListItem>
            <Meta color="red">Project Type</Meta>
            <span>Personal</span>
          </ListItem>
        <ListItem>
            <Meta color="orange">Work Type</Meta>
            <span>N/A</span>
          </ListItem>
         
          <ListItem>
            <Meta color="yellow">Platform</Meta>
            <span>Web-based</span>
          </ListItem>
          <ListItem>
            <Meta color="green">Stack</Meta>
            <span>React, Framer Motion, SCSS</span>
          </ListItem>
          <ListItem>
            <Meta color="teal">Website</Meta>
            <Link href="speer-assessment.netlify.app">
            speer-assessment.netlify.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          
        </List>
        

        {/* <Heading mb={2} as="h4" size="sm"> Repository available on Github. </Heading> */}
       
        
        
        <ButtonBox/>
        
      
      
  
       
      </Container>
    </Layout>
  )
  
  export default Work