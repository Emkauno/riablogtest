import { PostHeader, PostSocial, SocialLinks } from "./PostPageStyles"
import { GridItemTag, GridItemTagContainer } from "../PostsGridStyles"
import { PrismicRichText } from "@prismicio/react";
import  Link from 'next/link'
import styled from 'styled-components'
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
  padding-top: 65px;

  img {
    width: 100%;
    max-width: 1090px; 
  }
`


const PostHero = ({slice, tags, post}) => {
   const { primary } = slice
   const tagSlug = tags.map(tag => tag.split(" ").join("-").toLowerCase())

   const postDate = new Date(post.last_publication_date)
   const stringDate = postDate.toString()
   const publicationDate = `${stringDate.slice(4,10)}, ${stringDate.slice(11,15)}`

   return (
    <PageContainer>
      <SectionContainer>
      <PostHeader>
      <PostSocial>
      <GridItemTagContainer heroTag={true}>
         {tags.map((tag, i) => 
        <Link href={`/blog/${tagSlug[i]}`} key={`${tag[i]}-tag`}>
          <GridItemTag heroTag={true}>{tag}</GridItemTag>
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
      <p>{publicationDate}</p>
      <motion.div  
        initial={{ opacity: 0 }}
        animate={{opacity: 1}}
        transition={{ duration: 0.5,  delay:0 }}
        key={`heroImg-test`}>
        <img src={primary.post_hero_image.url} alt=''/>
      </motion.div>
    </PostHeader>
    </SectionContainer>
    </PageContainer>
  )
}

export default PostHero