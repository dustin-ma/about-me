import {Container, Box, Heading} from '@chakra-ui/react'

const Page = () => {
    return(
        <Container>
            <Box borderRadius="lg" bg="gray.300" p={3} mb={6} align="center">
                Hello! This is Dustin.
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Dustin Ma
                    </Heading>
                </Box>
                <p>Placeholder text biography day night up left down right.</p>
            </Box>

        </Container>
        
    )
}

export default Page