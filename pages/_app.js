import { ChakraProvider } from "@chakra-ui/react";
import theme from '../themes/theme'
import Fonts from '../components/fonts'
import Layout from '../components/layouts/main'
import Footer from '../components/footer'
import { AnimatePresence } from "framer-motion";

const Website = ({Component, pageProps, router}) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence exitBeforeEnter initial={true}>
                <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
            <Footer/>
        </ChakraProvider>
    )
}

export default Website