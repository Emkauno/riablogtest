import { PostBody } from "./PostPageStyles"
import { PrismicRichText } from "@prismicio/react"
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
  max-width: 670px;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  img {
    width: 100%; 
  }

  span {
    display: block;
    text-align: center;
  }
  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    font-style: normal;
    letter-spacing: 0.15px;
    color: rgba(0, 17, 51, 0.6);
    margin: 0;
    &:first-child{
      margin-bottom: 80px;
    }
  }

  span.image-alt{
    color: rgba(0, 17, 51, 0.6);
    font-size: 16px;
    font-style: italic;
    margin-top: 8px;
    margin-bottom: 80px;
  }
`
const PostContent = ({slice}) => {
  
  const { items } = slice
  
  return (
    <PageContainer>
      <SectionContainer>
      {items.map((item, i) => 
        <div key={i}>
          <PrismicRichText field={item.content_block}/>
          {item.content_image.url && <img src={item.content_image.url} alt={item.content_image.alt}/>}
          {item.content_image.alt && <span className="image-alt">{item.content_image.alt}</span>}
        </div>  
         )}      
      </SectionContainer>
    </PageContainer>
  )
}

export default PostContent