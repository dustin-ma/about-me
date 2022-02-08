import {Container, Box, Heading, Image, useColorModeValue} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'


const Page = () => {
    return(
        <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello! This is Dustin.
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Dustin Ma
                    </Heading>
                </Box>
                <p>Placeholder text biography day night up left down right.</p>
                <Box flexShrink={0} mt={{ base: 4, md: 0}} ml={{ md: 6}} align="center">

                <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/logo.png"></Image>

            </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <p>Some description here.</p>
            </Section>

        </Container>
        </Layout>
    )
}

export default Page