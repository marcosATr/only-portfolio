import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  position,
  Text,
} from "@chakra-ui/react";
import { FaLongArrowAltRight } from "react-icons/fa";

function MainHeader() {
  return (
    <Container maxW="container.xl" color="white">
      <HStack
        spacing={["0", "0", "100px"]}
        minH="calc(100vh - 82px)"
        mt="100px"
        flexDirection={["column-reverse", "column-reverse", "row"]}
      >
        <Flex
          w={["100%", "100%", "50%"]}
          h={"90%"}
          flexDirection={["column"]}
          align={["center", "center", "flex-start"]}
          textAlign={["center", "center", "left"]}
        >
          <Heading
            as="h1"
            fontSize={["3xl", "4xl", "6xl", "8xl"]}
            fontWeight="bold"
            lineHeight="1"
            mt={[8, 8, 0, 0]}
          >
            Hi! I{"'"}m Marcos,
          </Heading>
          <Heading
            as="h1"
            fontSize={["3xl", "4xl", "6xl", "8xl"]}
            fontStyle="italic"
            lineHeight="1"
          >
            fullstack developer.
          </Heading>
          <Divider my={8} borderColor="gray.500" />
          <Text fontSize="2xl" textAlign={["center", "left"]}>
            Passionate about web technologies, JavaScript enthusiast.
          </Text>
          <Button
            my={8}
            borderRadius="28px"
            px={8}
            p={"28px 36px"}
            bg={"yellow.400"}
            color="gray.800"
            rightIcon={<FaLongArrowAltRight />}
            width="240px"
            display="flex"
            justifyContent="space-between"
            fontWeight="400"
            fontSize="19px"
          >
            Check it out
          </Button>
        </Flex>
        <Flex
          align={["center"]}
          w={["100%", "60%", "50%"]}
          _before={{
            backgroundImage: "/images/bg.webp",
            content: '" "',
            width: "1100px",
            height: "1100px",
            position: "absolute",
            top: "0",
            right: "-100px",
            backgrounSize: "cover",
            zIndex: "-2",
            backgroundRepeat: "no-repeat",
            filter: "blur(20px)",
          }}
        >
          <Image
            alt="intro"
            src="/images/programming4.jpg"
            objectFit="fill"
            width="100%"
            height="100%"
          />
        </Flex>
      </HStack>
    </Container>
  );
}

export default MainHeader;
