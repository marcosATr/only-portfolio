import { Box, Container, Divider, Flex, Heading, HStack, Image, Text, type BoxProps } from "@chakra-ui/react";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link as A } from "@chakra-ui/react";
import { motion } from 'framer-motion'
import { Previews } from "../../utils/previews";



function ProjectItem({html, metadata}: Previews) {
  const MotionBox = motion<BoxProps>(Box)
  return (
    <Container maxW="container.xl" color="white" px={0} py={8}>
      <Divider />
      <Flex justifyContent="space-between" align="center" py={16}>
        <MotionBox minW="385px" h="320px" whileHover={{ scale: 1.1 }}>
          <Link href="/" passHref>
            <a>
              <Image alt="" src="/images/1.avif" width="100%" height="100%" />
            </a>
          </Link>
        </MotionBox>
        <Heading as="h1" size="4xl" fontWeight="700" px={8}>
          <Link href="/" passHref>
            <A color="white" _hover={{ color: "yellow.300" }}>
              Título do primeiro projeto
            </A>
          </Link>
        </Heading>
        <Box maxW="385px">
          <Text>We have introduced modern payment methods to the market, tailored to the needs of customers. Modern technology for developers.</Text>
          <Link href="/" passHref>
            <A color="yellow.300" _hover={{ color: "white" }}>
              <HStack my={8} spacing="8">
                <Text fontSize="xl">Read More</Text>
                <FaLongArrowAltRight />
              </HStack>
            </A>
          </Link>
        </Box>
      </Flex>
      <Divider />
    </Container>
  );
}

export default ProjectItem;
