import * as prismicH from "@prismicio/helpers";
import { createClient, linkResolver } from "../../../prismicio";
import { PostsGrid } from "../../../components/PostsGrid";
import SliceZone from "../../../components/SliceZone";
import { FeaturedPost } from "../../../components/FeaturedPost";
import styled from "styled-components";
import { Layout } from "../../../components/Layout";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

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

const PostPages = (props) => {
  const router = useRouter();
  const route = router.asPath.split("/")[2];
  const { doc, postData } = props;
  let docsArray = [];
  const filterDocs = doc?.results.map((doc) =>
    doc?.tags.map(
      (tag) =>
        tag.split(" ").join("-").toLowerCase().includes(route) &&
        docsArray.push(doc)
    )
  );
  let featuredPost = [];
  docsArray.map(
    (post) => post?.data.featured_category_post && featuredPost.push(post)
  );

  let post = [];
  doc?.results.map((doc) => doc.uid === route && post.push(doc));
  return (
      <PageContainer>
        <SectionContainer>
          <AnimatePresence mode="wait" initial={false}>
            {postData === null ? (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                key={route}
              >
                {featuredPost[0] && <FeaturedPost data={featuredPost[0]} />}
                <PostsGrid posts={docsArray}></PostsGrid>
              </motion.div>
            ) : (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                key={route}
              >
                {postData ? <SliceZone
                  slices={postData?.data?.slices}
                  relatedPosts={doc?.results}
                  post={postData}
                  tags={postData?.tags}
                /> : null
                }
                
              </motion.div>
            )}
          </AnimatePresence>
        </SectionContainer>
      </PageContainer>
  );
};

export default PostPages;

export async function getStaticProps({ previewData, params: { uid } }) {
  const client = createClient({ previewData });
  let doc;
  try {
    doc = await client.getByType("blog_post");
  } catch (error) {
    doc = await client.getByType("blog_post");
  }
  let postData;
  try {
    postData = await client.getByUID("blog_post", uid);
  } catch (error) {
    postData = null;
  }

  return {
    props: {
      doc,
      postData,
    },
  };
}

export async function getStaticPaths(context) {
  const client = createClient({ context });

  let pages;
  let mergeTags;
  let tags = [];
  pages = await client.getAllByType("blog_post");
  const getTags = pages.map((page) => page.tags);
  const tagsArray = getTags?.map((tag) => tag);
  const merged = [].concat.apply([], tagsArray);
  mergeTags = [...new Set(merged)];
  const formatTag = mergeTags.map((tag) =>
    tag.split(" ").join("-").toLowerCase()
  );
  const pageTags = formatTag.map((tag) =>
    tags.push({ type: "category", uid: tag })
  );

  const allPages = [...pages, ...tags];
  return {
    paths: allPages.map((doc) => prismicH.asLink(doc, linkResolver)),
    fallback: true,
  };
}
