import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import MainHeader from "../components/MainHeader/MainHeader";
import Nav from "../components/Nav/Nav";
import ProjectListing from "../components/ProjectListing/ProjectListing";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Nav />
      <MainHeader />
      <ProjectListing/>
    </>
  );
};

export default Home;
