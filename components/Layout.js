import {motion, AnimatePresence} from 'framer-motion'
import { useRouter } from "next/router";

export const Layout = props => {
  const { children } = props;
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
        <main>{children}</main>
    </AnimatePresence>
  );
};
