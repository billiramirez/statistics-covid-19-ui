import type { NextPage } from "next";

const CountryDetails: NextPage = () => {
  return <div>hello country</div>;
};

export const getServerSideProps = (props: any) => {
  return {
    props: {
      layout: "APP",
    },
  };
};

export default CountryDetails;
