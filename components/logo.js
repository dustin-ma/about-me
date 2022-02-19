import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 22px;
    display: inline-flex;
    align-items: center;
    height: 40px;
    line-height; 20px;
    padding: 10px;

    &:hover img {
        transform: rotate(30deg);
    }
`

const Logo = () => {
    const dmLogo = `/images/logo${useColorModeValue('', '-dark')}.png`
    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={dmLogo} width={30} height={30} alt="logo"/>
                    <Text 
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='M PLUS Rounded 1c'
                        fontWeight='bold'
                        ml={3}>
                            Dustin Ma
                        </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo;