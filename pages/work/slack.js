
import { Container, Badge, Link, List, ListItem, Heading, UnorderedList } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, ButtonBox } from '../../components/work'
import Layout from '../../components/layouts/article'
import NextLink from 'next/link'



const Work = () => (
    <Layout title="Slack Bot">
      <Container>
        <Title>
          Slack Chat Bot <Badge>2022</Badge>
        </Title>

        <List ml={4} mb={4}>
        <ListItem>
            <Meta color="red">Project Type</Meta>
            <span>Personal/Academic</span>
          </ListItem>
        <ListItem>
            <Meta color="orange">Work Type</Meta>
            <span>N/A</span>
          </ListItem>
         
          <ListItem>
            <Meta color="yellow">Platform</Meta>
            <span>Slack</span>
          </ListItem>
          <ListItem>
            <Meta color="green">Stack</Meta>
            <span>Python</span>
          </ListItem>
          <ListItem>
            <Meta color="teal">Website</Meta>
            N/A
          </ListItem>
          
        </List>
        

        <Heading mb={2} as="h4" size="sm"> Currently work in progress... </Heading>
       
        
        
        <ButtonBox/>
        
      
      
  
       
      </Container>
    </Layout>
  )
  
  export default Work