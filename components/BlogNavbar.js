import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from "next/router";

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 30px;
  margin-bottom: 45px;
  padding: 0 45px;
  gap: 8px;
`
const NavItem = styled.div`
  padding: 12px 24px;
  border-radius: 100px;
  color: var(--Text-secondary);
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  cursor: pointer;
  transition: background .3s ease;
  
  &:hover {
    background: #fff7f2;
  }
  &.active {
  background: var(--Ria-orange);
  color: white;
  &:hover {
    background: var(--Ria-orange);
  }
  }
`
const BlogNavbar = () => {
  const router = useRouter();

  return (
    <NavContainer>
      <Link href="/blog">
        <NavItem className={router.asPath == "/blog" ? "active" : ""}>
          All
        </NavItem>
      </Link>
      <Link href="/ria-stories">
        <NavItem className={router.asPath === "/ria-stories" ? "active" : ""}>
          Ria Stories
        </NavItem>
      </Link>
      <Link href="/remittance">
        <NavItem className={router.asPath == "/remittance" ? "active" : ""}>
          Remittance
        </NavItem>
      </Link>
      <Link href="/immigration">
        <NavItem className={router.asPath == "/immigration" ? "active" : ""}>
          Immigration
        </NavItem>
      </Link>
      <Link href="/tech">
        <NavItem className={router.asPath == "/tech" ? "active" : ""}>
          Tech
        </NavItem>
      </Link>
      <Link href="/life-abroad">
        <NavItem className={router.asPath == "/life-abroad" ? "active" : ""}>
          Life Abroad
        </NavItem>
      </Link>
      <Link href="/using-ria">
        <NavItem className={router.asPath == "/using-ria" ? "active" : ""}>
          Using Ria
        </NavItem>
      </Link>
    </NavContainer>
  )
}

export default BlogNavbar