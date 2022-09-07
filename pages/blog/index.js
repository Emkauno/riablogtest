import { createClient } from "../../prismicio";
import { PostsGrid } from "../../components/PostsGrid";
import { FeaturedPost } from "../../components/FeaturedPost";
import styled from "styled-components";
import { Layout } from "../../components/Layout";
import {motion} from "framer-motion"

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

const index = (props) => {
  const {doc} = props
  const posts = doc?.results || []
  let featuredPost = [];

  posts.map(
    (post) => post?.data.featured_blog_post && featuredPost.push(post)
  );

  return (
      <Layout>
         <motion.div   
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1}}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5 }}>
      <PageContainer>
        <SectionContainer>
          <FeaturedPost data={featuredPost[0]} /> 
          <PostsGrid posts={posts}></PostsGrid> 
        </SectionContainer>
      </PageContainer>
      </motion.div>
      </Layout>
  );
};

export default index;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const doc = await client.getByType('blog_post');

  return {
    props: {
      doc,
    },
  };
}
