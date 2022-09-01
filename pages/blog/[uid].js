import * as prismicH from "@prismicio/helpers";
import  SliceZone  from "../../components/SliceZone";
import { createClient, linkResolver } from "../../prismicio";
import { Layout } from "../../components/Layout";
const Post = props => {
  if (props?.error || !props || !props?.doc?.lang) {
    return <>{console.error(props, "[uid]")}</>;
  }

  const { doc } = props;
  const { type, url } = doc;
  const activeDoc = {
    type,
    url,
  };

  return (
    <Layout page={doc} activeDocMeta={activeDoc}>
      <SliceZone slices={doc?.data?.slices || []} tags={doc.tags} />
    </Layout>
  );

};

export async function getStaticProps({
  previewData,
  params: { uid },
}) {
  try {
    const client = createClient({ previewData });
    let doc;
    try {
      doc = await client.getByUID("blog_post", uid)
    } catch (error) {
      doc = await client.getByUID("blog_post", uid)
    }
    return {
      props: {
        doc,
        uid,
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
  let categoryPages;
    blogPages = await client.getAllByType("blog_post", {lang:"*"})
  return {
    paths: blogPages.map(doc => prismicH.asLink(doc, linkResolver)),
    fallback: true,
  };
}

export default Post;
