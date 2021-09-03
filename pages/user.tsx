import { FC } from "react";

const User: FC = () => {
  return <div>here user</div>;
};

export const getServerSideProps = () => {
  return {
    props: {
      layout: "APP",
    },
  };
};

export default User;
