
import { Box, Button, Container, Badge, Link, List, ListItem, Heading, UnorderedList } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta, ButtonBox } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'


const Work = () => (
    <Layout title="Inkdrop">
      <Container>
        <Title>
          Rockstar Music <Badge>2021 - 2022</Badge>
        </Title>

        <List ml={4} mb={4}>
        <ListItem>
            <Meta>Position</Meta>
            <span>Software Engineer</span>
          </ListItem>
        <ListItem>
            <Meta>Work Type</Meta>
            <span>Internship, Co-op</span>
          </ListItem>
         
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web-based</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, NodeJS, ExpressJS, MSSQL</span>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.rockstarmusic.ca/">
              https://www.rockstarmusic.ca/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          
        </List>


        <Heading mb={2} as="h4" size="sm">Led the team in migrating legacy back-end infrastructure to a modern stack.</Heading>
        <UnorderedList>
            <ListItem>Designed, developed and deployed a back-end server using Express.js and Azure Cloud.</ListItem>
            <ListItem>Developed and tested over 50 APIs for both client and server side services.</ListItem>
            <ListItem>Optimized new APIs to load on server side and decreased page load time by 20 percent on average.</ListItem>
            <ListItem>Migration and new server deployment successfully  completed on schedule.</ListItem>
        </UnorderedList> <br/>
        <Heading mb={2} as="h4" size="sm">Designed and developed an on-boarding flow to decrease teacher drop-off rate.</Heading>
        <UnorderedList>
            <ListItem>Developed the main interface using React integrated with Google Places API to ensure user data accuracy.</ListItem>
            <ListItem>Implemented an automated email service for client engagement and record keeping for administrators.  </ListItem>
            <ListItem>Decreased drop-off rate by 10 percent after deployment.</ListItem>
        </UnorderedList> <br/>
        <Heading mb={2} as="h4" size="sm">Implemented several reusable front-end features as per owner's request.</Heading>
        <UnorderedList>
            <ListItem>Re-designed and developed an interactive landing page using reusable components with Figma, React and React-Spring.</ListItem>
        </UnorderedList>
          
        
        
        <ButtonBox/>
        
      
      
  
       
      </Container>
    </Layout>
  )
  
  export default Work