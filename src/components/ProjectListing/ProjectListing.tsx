import { Box, Container, Heading } from "@chakra-ui/react";
import ProjectItem from "../ProjectItem/ProjectItem";

function ProjectListing() {
  return (
    <Container maxW="container.xl" color="white">
      <Box py={8} _before={{ backgroundImage: "/images/bg2.webp", content: '" "', width: "110%", height: "100%", position: "absolute", top: "700px", left: "0", backgrounSize: "cover", backgroundPosition: "-50% 0%", zIndex:'-2',backgroundRepeat: "no-repeat",filter: 'blur(20px)' }}>
        <Heading as="h1" size="2xl" py={8} fontWeight="300" fontStyle="italic" textAlign="right">
          Projects
        </Heading>
        <ProjectItem />
      </Box>
    </Container>
  );
}

export default ProjectListing;
