import { GetStaticProps } from "next";
import Nav from "../../components/Nav/Nav";
import fs from "fs/promises";
import { ParsedUrlQuery } from "querystring";
import showdown from "showdown";
import { Metadata } from "../../utils/previews";
import { Box, Container, Image, Tag, Text } from "@chakra-ui/react";
import ReactHtmlParser from "react-html-parser";
import { Previews } from "../../utils/previews";
import styled from "@emotion/styled";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const ArticleBox = styled(Box)`
  hr {
    border-color: #cccccc;
    margin: 50px 0px 30px;
    opacity: 0.1;
  }
  ,
  img {
    margin: 50px 0;
  }
  ,
  blockquote {
    border-left: 2px solid #c5e943;
    margin: 30px 2rem;
    p {
      color: #c5e943;
      font-size: 2.5rem;
      font-weight: 300;
      line-height: 1.2;
      padding: 10px 50px 10px;
    }
  }
  ,
  ul,
  ol {
    margin: 30px 40px 30px 50px;
    padding: 0px 30px 0px 30px;
    li {
      margin: 10px 0;
      font-size: 1.6rem;
      color: rgb(128, 128, 128);
      font-weight: 400;
      line-height: 31px;
    }
  }
  ,
  h1 {
    color: #ffffff;
    font-size: 4rem;
    line-height: 54px;
    margin: 30px 2rem;
  }
  ,
  h3 {
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 1.2;
    color: #ffffff;
    margin: 30px 2rem;
  }
  ,
  p {
    font-size: 1.6rem;
    color: rgb(128, 128, 128);
    margin: 30px 2rem;
    font-weight: 400;
    line-height: 31px;
  }
`;

function Projects({ metadata, html }: Previews) {
  return (
    <>
      <Nav />
      <Container maxW="container.xl" mt="150px" py={4}>
        <Box position="relative" h="360px" w="100%">
          <Image alt={metadata.description} src={metadata.featured} objectFit="cover" h="100%" w="100%" />
        </Box>
      </Container>
      <Container maxW="container.lg">
        <Tag m="1rem 2rem" fontSize="xl" backgroundColor="#c5e943" px={8} py={2} borderRadius="20px">
          {metadata.date}
        </Tag>
        <ArticleBox>
          <h1>{metadata.title}</h1>
          <hr></hr>
          {ReactHtmlParser(html)}
        </ArticleBox>
      </Container>
    </>
  );
}

export default Projects;

export const getStaticPaths = async () => {
  const basepath = "./projects";
  const paths = [];
  // const converter = new showdown.Converter({ metadata: true });
  const folderContent = await fs.readdir(basepath);
  for await (const file of folderContent) {
    const slug = file.split(".");
    paths.push({
      params: {
        slug: slug[0],
      },
    });
  }
  return {
    paths: paths,
    fallback: false, // false or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const converter = new showdown.Converter({ metadata: true });
  const { slug } = params as IParams;
  const basepath = "./projects";
  const filepath = basepath + "/" + slug + ".md";
  const file = await fs.readFile(filepath, "utf8");
  const html = converter.makeHtml(file);
  const metadata = converter.getMetadata(false) as unknown as Metadata;
  console.log(metadata);

  return {
    props: {
      html,
      metadata,
    },
  };
};
