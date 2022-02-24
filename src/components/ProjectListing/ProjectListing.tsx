import { Box, Container, Heading } from "@chakra-ui/react";
import ProjectItem from "../ProjectItem/ProjectItem";

function ProjectListing() {
  return (
    <Container maxW="container.xl" color="white">
      <Box py={8}>
        <Heading as="h1" size="2xl" py={8} fontWeight="300" fontStyle="italic" textAlign="right">
          Projects
        </Heading>
        <ProjectItem />
      </Box>
    </Container>
  );
}

export default ProjectListing;
