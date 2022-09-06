import {motion} from 'framer-motion'
import { useRouter } from "next/router";

export const Layout = props => {
  const { children, header, footer, page, activeDocMeta } = props;
  const router = useRouter()
  return (
    <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{y: 10, opacity: 0}}
        transition={{ duration: 0.3}}
        >
        <main>{children}</main>
    </motion.div>
  );
};
