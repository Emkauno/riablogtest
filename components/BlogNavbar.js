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
  flex-wrap: wrap;
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
const BlogNavbar = (props) => {
  const {doc} = props
  const pages = doc?.results
  const getTags = pages?.map(page=>page.tags)
  const merged = [].concat.apply([], getTags)
  const uniqueTags = [...new Set(merged)]
  const formatTags = uniqueTags.map(tag => tag.split(" ").join("-").toLowerCase())
  const router = useRouter();

  return (
    <NavContainer>
      <Link href={`/blog`} key={`tag-all`}>
        <NavItem className={router.asPath === "/blog" ? "active" : ""}>
          All
        </NavItem>
      </Link>
      {uniqueTags && uniqueTags.map((tag, i)=> 
        (
          <Link href={`/blog/${formatTags[i]}`} key={`tag-${i}`}>
        <NavItem className={router.asPath === `/blog/${formatTags[i]}` ? "active" : ""}>
          {tag}
        </NavItem>
      </Link>
        )
        )}
    </NavContainer>
  )
}

export default BlogNavbar

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const doc = await client.getByType('blog_post');

  return {
    props: {
      doc,
    },
  };
}