import * as prismicH from "@prismicio/helpers";
import SliceZone from "../../components/SliceZone";
import { createClient, linkResolver } from "../../prismicio";
import { Layout } from "../../components/Layout";
const Post = (props) => {
  if (props?.error || !props || !props?.doc?.lang) {
    return <>{console.error(props, "[uid]")}</>;
  }

  const { doc } = props;
  const { postsArray } = props;
  const { type, url } = doc;
  const activeDoc = {
    type,
    url,
  };

  const postTags = postsArray.map((post) => post.tags);
  const docTag = doc.tags
  let relatedTags = []
  let relatedPosts= []
  const getRelatedPosts = postTags.map(post => post.includes(docTag[0]) !== false && relatedTags.push(post))
  const postsFilter = postsArray.map((post,i)=> getRelatedPosts[i] !== false & post.uid !== doc.uid & relatedPosts.length < 3 && relatedPosts.push(post))
  return (
    <Layout page={doc} activeDocMeta={activeDoc} >
      <SliceZone slices={doc?.data?.slices || []} tags={doc.tags} relatedPosts={relatedPosts}/>
    </Layout>
  );
};

export async function getStaticProps({ previewData, params: { uid } }) {
  try {
    const client = createClient({ previewData });
    let doc;
    try {
      doc = await client.getByUID("blog_post", uid);
    } catch (error) {
      doc = await client.getByUID("blog_post", uid);
    }
    let postsArray;
    try {
      postsArray = await client.getAllByType("blog_post");
    } catch (error) {
      postsArray = await client.getByUID("blog_post", uid);
    }
    return {
      props: {
        doc,
        uid,
        postsArray,
      },
    };
  } catch (error) {
    return {
      props: {
        error: JSON.stringify({ ...error, uid }),
        uid,
      },
    };
  }
}

export async function getStaticPaths(context) {
  const client = createClient({ context });
  let blogPages;
  blogPages = await client.getAllByType("blog_post", { lang: "*" });
  return {
    paths: blogPages.map((doc) => prismicH.asLink(doc, linkResolver)),
    fallback: true,
  };
}

export default Post;
