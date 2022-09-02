import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { Wrapper, Container} from "./LayoutStyles"
import BlogNavbar from "./BlogNavbar";

export const Layout = props => {
  const { children, header, footer, page, activeDocMeta } = props;

  return (
    <>
        <main>{children}</main>
    </>
  );
};
