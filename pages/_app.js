import "../styles/globals.css";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../prismicio";
import BlogNavbar from "../components/BlogNavbar";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Transition from "../components/Transition";

const internalLinkComponent = ({ href, children, ...props }) => (
  <Link href={href}>
    <a {...props}>{children}</a>
  </Link>
);

function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={internalLinkComponent}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <BlogNavbar {...pageProps} />
        <AnimatePresence mode="wait">
          <Transition key={router.route}>
            <Component {...pageProps}/>
          </Transition>
        </AnimatePresence>
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default App;
