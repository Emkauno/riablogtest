import '../styles/globals.css'
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../prismicio'
import { Wrapper } from "../components/LayoutStyles"

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
         <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
    )
}

export default App