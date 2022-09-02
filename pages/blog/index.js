import { createClient } from "../../prismicio";
import { PostsGrid } from "../../components/PostsGrid";
import { FeaturedPost } from "../../components/FeaturedPost";
import styled from "styled-components";
import { Layout } from "../../components/Layout";

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

const index = (posts) => {
  const results = posts.posts.results;
  let featuredPost = [];

  results.map(
    (post) => post.data.featured_blog_post && featuredPost.push(post)
  );

  return (
    <Layout>
    <PageContainer>
      <SectionContainer>
        <FeaturedPost data={featuredPost[0]} />
        <PostsGrid posts={results}></PostsGrid>
      </SectionContainer>
    </PageContainer>
    </Layout>
  );
};

export default index;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const posts = await client.getBySomeTags([
    "Ria Stories",
    "Remittance",
    "Immigration",
    "Life Abroad",
    "Tech",
    "Using Ria",
  ]);

  return {
    props: {
      posts,
    },
  };
}
