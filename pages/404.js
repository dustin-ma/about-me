import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">404: Not Found</Heading>
      <Text>This page either does not exist or the website is broken (probably).</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Return to home page</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound