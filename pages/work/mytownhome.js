
import { Container, Badge, Link, List, ListItem, Heading, UnorderedList } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, ButtonBox } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'


const Work = () => (
    <Layout title="Rockstar Music">
      <Container>
        <Title>
          MyTownhome <Badge>2019 - 2020</Badge>
        </Title>

        <List ml={4} mb={4}>
        <ListItem>
            <Meta color="red">Position</Meta>
            <span>Project Manager</span>
          </ListItem>
        <ListItem>
            <Meta color="orange">Work Type</Meta>
            <span>Internship, Co-op</span>
          </ListItem>
         
          <ListItem>
            <Meta color="yellow">Platform</Meta>
            <span>Web-based</span>
          </ListItem>
          <ListItem>
            <Meta color="green">Technology</Meta>
            <span>Zoho, Jira</span>
          </ListItem>
          <ListItem>
            <Meta color="teal">Website</Meta>
            <Link href="https://www.mytownhome.ca/">
              https://www.mytownhome.ca/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          
        </List>


        <Heading mb={2} as="h4" size="sm">Managed the implementation and productionalization of a CRM system with Zoho API.</Heading>
        <UnorderedList>
            <ListItem>Designed, developed and deployed a back-end server using Express.js and Azure Cloud.</ListItem>
            <ListItem>Oversaw the design process of the web application and assisted in UI/UX design on a weekly basis.</ListItem>
            <ListItem>Established and maintained communication with developers through weekly meetings for project updates.</ListItem>
            <ListItem>Assisted with search engine optimization using Google Analytics</ListItem>
        </UnorderedList> <br/>
        
          
        
        
        <ButtonBox/>
        
      
      
  
       
      </Container>
    </Layout>
  )
  
  export default Work