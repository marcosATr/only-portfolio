import { Box, Container, Divider, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box mt={8}>
      <Divider />
      <Container maxW="container.xl">
        <Text color='white' py={4} size='2xl'>2022</Text>
      </Container>
    </Box>
  );
}

export default Footer;
