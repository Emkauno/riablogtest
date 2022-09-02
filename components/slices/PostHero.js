import { PostHeader, PostSocial, SocialLinks } from "./PostPageStyles"
import { GridItemTag, GridItemTagContainer } from "../PostsGridStyles"
import { PrismicRichText } from "@prismicio/react";
import  Link from 'next/link'
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
  padding-top: 65px;

  img {
    width: 100%;
    max-width: 1090px; 
  }
`


const PostHero = ({slice, tags}) => {
  const { primary } = slice
  const tagSlug = tags.map(tag => tag.split(" ").join("-").toLowerCase())

   return (
    <PageContainer>
      <SectionContainer>
      <PostHeader>
      <PostSocial>
      <GridItemTagContainer heroTag={true}>
        {tags.map((tag, i) => 
        <Link href={`/${tagSlug[i]}`} key={`${tag[i]}-tag`}>
          <GridItemTag heroTag={true} key={`${tag}-tag`}>{tag}</GridItemTag>
          </Link>
          )}
        </GridItemTagContainer>
        <SocialLinks>
           <a href="#"><img src="/twitter.svg"/></a> 
          <a href="#"><img src="/facebook.svg"/></a>
          <a href="#"><img src="/linkedin.svg"/></a> 
        </SocialLinks>
      </PostSocial>
      <PrismicRichText field={primary.title}/>
      <p>june 14, 2022</p>
      <img src={primary.post_hero_image.url}/>
    </PostHeader>
    </SectionContainer>
    </PageContainer>
  )
}

export default PostHero