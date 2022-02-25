import { GetStaticProps } from "next";
import Nav from "../../components/Nav/Nav";
import fs from "fs/promises";
import { ParsedUrlQuery } from "querystring";
import showdown from "showdown";
import { Metadata } from "../../utils/previews";
import { Text } from "@chakra-ui/react";
import ReactHtmlParser from "react-html-parser";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

function Projects({ metadata, html }) {
  return (
    <>
      <Nav />
      <article>{ReactHtmlParser(html)}</article>
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
