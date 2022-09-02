import * as prismicH from "@prismicio/helpers";
import { createClient, linkResolver } from "../../prismicio";
import { PostsGrid } from '../../components/PostsGrid'
import { FeaturedPost} from '../../components/FeaturedPost'
import styled from 'styled-components'

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
`
const Category = props => {
  if (props?.error || !props || !props?.doc?.lang) {
    return <>{console.error(props, "[uid]")}</>;
  }

  const { doc, posts } = props;
  const { type, url } = doc;
  const activeDoc = {
    type,
    url,
  };


  let filteredPosts = []
  let featuredPost = []
  const categoryPosts = posts.results.map(post => post.tags.map(tag => tag.split(" ").join("-").toLowerCase()))
  const categoryFilter = categoryPosts.map(post => post.includes(doc.uid) && post)
  const postsFilter = posts.results.map((post,i)=> categoryFilter[i] !== false && filteredPosts.push(post))
  const featuredFilter = (filteredPosts.map((post,i)=> post.data.featured_category_post && featuredPost.push(post)))
  return (
    <PageContainer>
    <SectionContainer>
    <FeaturedPost data={featuredPost[0]}/>
    <PostsGrid posts={filteredPosts}>
     </PostsGrid>
     <h1>hola</h1>
    </SectionContainer>
    </PageContainer>
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
      doc = await client.getByUID("category", uid)
    } catch (error) {
      doc = await client.getByUID("category", uid)
    }

const posts = await client.getBySomeTags(['Ria Stories', 'Remittance', 'Immigration', 'Life Abroad', 'Tech', 'Using Ria'])

    return {
      props: {
        doc,
        uid,
        posts
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
  let categoryPages;
  categoryPages = await client.getAllByType("category")
  return {
    paths: categoryPages.map(doc => prismicH.asLink(doc, linkResolver)),
    fallback: true,
  };
}

export default Category;
