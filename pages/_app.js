import "../styles/globals.css";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../prismicio";
import BlogNavbar from "../components/BlogNavbar";
import { AnimatePresence } from 'framer-motion'
const internalLinkComponent = ({ href, children, ...props }) => (
  <Link href={href}>
    <a {...props}>{children}</a>
  </Link>
);

function App({ Component, pageProps, router }) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={internalLinkComponent}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <BlogNavbar {...pageProps}/>
        <AnimatePresence  mode='wait'  initial={false}>
            <Component {...pageProps} key={router.asPath.split("/")[2]}/>
        </AnimatePresence>
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default App;
