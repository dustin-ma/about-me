import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Dustin Ma - Design inspired by <Link href="https://github.com/craftzdog">@craftzdog</Link>.
    </Box>
  )
}

export default Footer