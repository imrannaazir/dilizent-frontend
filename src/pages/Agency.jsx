import React from "react";
import Layout from "../components/ui/Layout";
import Header from "../components/ui/Header";

const Agency = () => {
  const service = [
    {
      serviceName: "",
      location: "Maharashtra,India",
      description: "Larsen & Toubro Ltd, com",
      services: "Internet of things",
      serviceImage: "https://ibb.co/TYYmRhG",
    },
  ];
  return (
    <Layout>
      <Header pageName={"Agency"} />
    </Layout>
  );
};

export default Agency;
