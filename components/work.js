import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge, Button} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoGithub, IoLogoLinkedin, IoDocumentText, IoNewspaperOutline } from 'react-icons/io5'

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/work">
      <Link>Work</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const ButtonBox = () => (
    <Box align="center" my={4}>
        <NextLink href="/work" scroll={false}>
            <Button size="sm" mr={2} rightIcon={<IoDocumentText />} colorScheme="orange">
              Resume
            </Button>
          </NextLink>
        <NextLink href="https://github.com/dustin-ma" target="_blank" scroll={false}>
            <Button size="sm" mr={2} rightIcon={<IoLogoGithub />} colorScheme="purple">
              Github
            </Button>
          </NextLink>
          <NextLink mr={2} href="/work" scroll={false}>
            <Button size="sm" rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Back
            </Button>
          </NextLink>
        </Box>
)

export const MenuButtonBox = () => (
  <Box align="center" my={4}>
      <NextLink href="https://drive.google.com/file/d/1etoU-ZTsKZ8ioLphrsAs9PpJZSgP-WiV/view?usp=sharing" scroll={false}>
          <Button size="sm" mr={2} rightIcon={<IoDocumentText />} colorScheme="orange">
            Resume
          </Button>
        </NextLink>
      <NextLink href="https://github.com/dustin-ma" target="_blank" scroll={false}>
          <Button size="sm" mr={2} rightIcon={<IoLogoGithub />} colorScheme="purple">
            Github
          </Button>
        </NextLink>
        <NextLink mr={2} href="/" scroll={false}>
          <Button size="sm" rightIcon={<ChevronRightIcon />} colorScheme="teal">
            Home
          </Button>
        </NextLink>
      </Box>
)

export const Meta = ({ color, children }) => (
  <Badge colorScheme={color} mr={2}>
    {children}
  </Badge>
)