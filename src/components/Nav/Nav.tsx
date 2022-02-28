import { Box, Container, Flex, HStack, Link as A } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import LinkItem from "../LinkItem/LinkItem";

function Nav() {
  return (
    <Box w="100%" h="auto" bg={"#131313"} padding={6} color="white" position='fixed' zIndex='3' top='0' opacity={0.95}>
      <Container maxW="container.xl">
        <Flex justifyContent={"space-between"} align="center" w="100%">
          <Box fontSize="2xl" fontWeight="bold" lineHeight="1.4">
            <LinkItem href="/">marcosATr</LinkItem>
          </Box>
          {/* <HStack spacing="30px" fontSize="xl">
            <Box>
              <LinkItem href="/">Projects</LinkItem>
            </Box>
            <Box>
              <LinkItem href="/">CV</LinkItem>
            </Box>
          </HStack> */}
          <HStack spacing="30px" fontSize="xl">
            <Box>
              <LinkItem href="/">
                <FaLinkedinIn />
              </LinkItem>
            </Box>
            <Box>
              <LinkItem href="/">
                <FaTwitter />
              </LinkItem>
            </Box>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

export default Nav;
