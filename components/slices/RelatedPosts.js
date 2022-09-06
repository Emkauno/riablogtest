import styled from 'styled-components'
import { PrismicRichText } from "@prismicio/react"
import { PostsGrid } from '../../components/PostsGrid'
import { useRouter } from "next/router";



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
  max-width: 1090px;
  width: 100%;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  h1 {
    width: 100%;
    font-weight: 800;
    font-size: 40px;
    line-height: 54px;
    letter-spacing: 0.15px;
    color: rgba(0, 17, 51, 0.8);
    text-align: left;
    margin: 0;
    margin-bottom: 40px;
  }
  `

const RelatedPosts = ({slice, relatedPosts, tags}) => {
  const router = useRouter();
  const route = router.asPath.split("/")[2]
  
  let maxPosts = []
  let related = []
  const getRelated = relatedPosts?.map(post => post.tags.map(tag => tag.includes(tags[0])).some(item => item === true) && related.push(post))
  const truncatePosts = related.map(post=> maxPosts.length < 3 & post.uid !== route  && maxPosts.push(post)) 
  return (
    <PageContainer>
      <SectionContainer>
        <PrismicRichText field={slice.primary.title}/>
         <PostsGrid posts={maxPosts}>
        </PostsGrid>  
      </SectionContainer>
    </PageContainer>
  )
}

export default RelatedPosts