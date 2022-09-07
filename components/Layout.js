import {motion} from 'framer-motion'
import { useRouter } from "next/router";

export const Layout = props => {
  const { children } = props;
  return (
    <>
        <main>{children}</main>
    </>
  );
};
