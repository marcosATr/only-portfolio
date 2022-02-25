import { Box, Container, Divider, Flex, Heading, HStack, Image, Text, type BoxProps } from "@chakra-ui/react";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link as A } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Previews } from "../../utils/previews";

function ProjectItem({ html, metadata }: Previews) {
  const MotionBox = motion<BoxProps>(Box);
  return (
    <Container maxW="container.xl" color="white" px={0} py={0}>
      <Divider borderColor='gray.500'/>
      <Flex justifyContent="space-between" align="center" py={16} flexDirection={['column', 'row']}>
        <MotionBox minW={['90%', "385px"]} h={['auto', "320px"]} whileHover={{ scale: 1.1 }} py={[4,0]}>
          <Link href={"/projects/" + metadata.slug} passHref>
            <a>
              <Image alt="" src={metadata.featured} width="100%" height="100%" objectFit='cover' />
            </a>
          </Link>
        </MotionBox>
        <Heading as="h1" size="4xl" fontWeight="700" px={8} py={[4,0]}>
          <Link href={"/projects/" + metadata.slug} passHref>
            <A color="white" _hover={{ color: "yellow.300" }}>
              {metadata.title}
            </A>
          </Link>
        </Heading>
        <Box maxW="385px" py={[4,0]}>
          <Text>{metadata.description}</Text>
          <Link href={"/projects/" + metadata.slug} passHref>
            <A color="yellow.300" _hover={{ color: "white" }}>
              <HStack my={8} spacing="8">
                <Text fontSize="xl">Read More</Text>
                <FaLongArrowAltRight />
              </HStack>
            </A>
          </Link>
        </Box>
      </Flex>
      {/* <Divider /> */}
    </Container>
  );
}

export default ProjectItem;
