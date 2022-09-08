import { useEffect } from 'react'
import { createClient } from "../../prismicio";
import { PostsGrid } from "../../components/PostsGrid";
import { FeaturedPost } from "../../components/FeaturedPost";
import styled from "styled-components";
import { Layout } from "../../components/Layout";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fff;
  padding: 0 24px;
`;
const SectionContainer = styled.div`
  max-width: var(--container-width);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Index = (props) => {
  useEffect(() => {
    if(typeof window !== "undefined") {
     window.scrollTo({top: 0})
    }
   }, [])

  const { doc } = props;
  const posts = doc?.results || [];
  let featuredPost = [];
  const router = useRouter();
  const route = router.asPath;

  posts.map((post) => post?.data.featured_blog_post && featuredPost.push(post));

  return (
    doc ? 
      <PageContainer >
        <SectionContainer>
            <FeaturedPost data={featuredPost[0]} />
            <PostsGrid posts={posts}></PostsGrid>
        </SectionContainer>
      </PageContainer>
   :
    null 
 );
};

export default Index;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const doc = await client.getByType("blog_post");

  return {
    props: {
      doc,
    },
  };
}
