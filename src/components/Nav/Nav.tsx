import { Box, Container, Flex, HStack } from "@chakra-ui/react";
import React from "react";

function Nav() {
  return (
    <Box w="100%" h="auto" bg={"gray.800"} padding={4}>
      <Container>
        <Flex>
          <Box>marcosATr</Box>
          <HStack>Blog</HStack>
          <HStack>
            <Box>li</Box>
            <Box>tw</Box>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

export default Nav;
