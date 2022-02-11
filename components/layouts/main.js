import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Voxel from '../voxel'

const Main = ({ children, router}) => {
    return (
        <Box as="main" pb={10}> 
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Dustin Ma</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <Voxel/>
                {children}
            </Container>
        </Box>

    )
}

export default Main