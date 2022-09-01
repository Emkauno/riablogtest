import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { Wrapper, Container} from "./LayoutStyles"

export const Layout = props => {
  const { children, header, footer, page, activeDocMeta } = props;

  return (
    <>
      <Navbar
        siteTitle={""}
        topMenu={header}
        header={header}
        pagename={page ? (page?.uid ? page?.uid : page?.slugs[0]) : "Home"}
        // activeDocMeta={activeDocMeta}
        activeDocMeta={activeDocMeta}
      />
        <main>{children}</main>
       <Footer footerData={footer} />
    </>
  );
};
