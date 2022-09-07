import * as prismicH from "@prismicio/helpers";
import { createClient, linkResolver } from "../../../prismicio";
import { PostsGrid } from "../../../components/PostsGrid";
import SliceZone from "../../../components/SliceZone";
import { FeaturedPost } from "../../../components/FeaturedPost";
import styled from "styled-components";
import { Layout } from "../../../components/Layout";
import { useRouter } from "next/router";
import {motion} from 'framer-motion'

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

  const router = useRouter();
  const route = router.asPath.split("/")[2]
  const { doc } = props
  let docsArray = []
  const filterDocs = doc?.results.map(doc => doc?.tags.map(tag=>tag.split(" ").join("-").toLowerCase().includes(route) && docsArray.push(doc)))
  let featuredPost = [];

   docsArray.map(
     (post) => post?.data.featured_category_post && featuredPost.push(post)
   );
   let post = [];
   doc?.results.map(doc => doc.uid === route && post.push(doc))

   let relatedPosts = []
   const filterRelatedPosts = doc?.results.map(doc => doc.tags.includes(post[0]?.tags) && relatedPosts.push(doc))
  
  return (
    <Layout>
      <motion.div   
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1}}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5 }}>
      <PageContainer>
      <SectionContainer>
        {post[0]?.uid === undefined ?
        <>{featuredPost[0] && <FeaturedPost data={featuredPost[0]} /> }
         <PostsGrid posts={docsArray}></PostsGrid> 
        </> 
        :
        <>
        <SliceZone
        slices={post[0]?.data?.slices}
        relatedPosts={doc?.results}
        post={post[0]}
        tags={post[0]?.tags}
        />
    </>
      }
      </SectionContainer>
    </PageContainer>
     </motion.div>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const doc = await client.getByType('blog_post');

  return {
    props: {
      doc,
    },
  };
}

export async function getStaticPaths(context) {
  const client = createClient({ context });

  let pages;
  let mergeTags;
  let tags = [];
  pages =  await client.getAllByType('blog_post');
  const getTags = pages.map(page=>page.tags)
  const tagsArray = getTags?.map(tag => tag)
  const merged = [].concat.apply([], tagsArray)
  mergeTags = [...new Set(merged)];
  const formatTag =  mergeTags.map(tag=> tag.split(" ").join("-").toLowerCase())
  const pageTags = formatTag.map((tag) => tags.push({type:'category', uid: tag}))

  const allPages = [...pages, ...tags]
  return {
    paths: 
      allPages.map(doc => prismicH.asLink(doc, linkResolver)),
    fallback: true,
  };
}