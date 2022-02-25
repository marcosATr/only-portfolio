import { Container, Divider } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import MainHeader from "../components/MainHeader/MainHeader";
import Nav from "../components/Nav/Nav";
import ProjectListing from "../components/ProjectListing/ProjectListing";
import styles from "../styles/Home.module.css";
import { Previews, previews } from "../utils/previews";

export interface DataProps {
  data: Previews[];
}

const Home = ({ data }: DataProps) => {
  return (
    <>
      <Nav />
      <MainHeader />
      <ProjectListing data={data} />
      <Footer />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await previews();

  return {
    props: {
      data: data,
    },
  };
};
