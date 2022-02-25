import { Box, Button, Container, Divider, Flex, Heading, Image, position, Text } from "@chakra-ui/react";
import { FaLongArrowAltRight } from "react-icons/fa";

function MainHeader() {
  return (
    <Container maxW="container.xl" color="white">
      <Flex py={16} minH="calc(100% - 82px)">
        <Box w="50%" p={4} pl={0}>
          <Heading as="h1" fontSize={["4xl", "5xl", "8xl"]} fontWeight="bold" lineHeight="1">
            Hi! I{"'"}m Marcos,
          </Heading>
          <Heading as="h1" fontSize={["4xl", "5xl", "8xl"]} fontStyle="italic" lineHeight="1">
            fullstack developer.
          </Heading>
          <Divider my={8} />
          <Text fontSize="2xl">Passionate about web technologies, JavaScript enthusiast.</Text>
          <Button my={8} borderRadius="28px" px={8} p={"28px 36px"} bg={"yellow.400"} color="gray.800" rightIcon={<FaLongArrowAltRight />} width="240px" display="flex" justifyContent="space-between" fontWeight="400" fontSize="19px">
            Check it out
          </Button>
        </Box>
        <Flex w="50%" p={4} pr={0} justifyContent="flex-end"  _before={{ backgroundImage: "/images/bg.webp", content: '" "', width: "120%", height: "120%", position: "absolute", top: "0", left: "0", backgrounSize: "cover", backgroundPosition: "120% 0%", zIndex:'-2',backgroundRepeat: "no-repeat",filter: 'blur(20px)' }}>
          <Box w="480px" height="550px">
            <Image pl={8} pt={8} alt="intro" src="/images/1.avif" objectFit="fill" width="100%" height="100%" />
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}

export default MainHeader;
