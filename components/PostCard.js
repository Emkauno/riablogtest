import { GridItem, GridItemImg, GridItemText, GridItemTag, GridItemTagContainer} from "./PostsGridStyles"
import { PrismicRichText } from "@prismicio/react"
import Link from 'next/link';

export const PostCard = ({category, cardImg, cardTitle, cardText, date, uid}) => {
  const postDate = new Date(date)
  const stringDate = postDate.toString()
  const publicationDate = `${stringDate.slice(4,10)}, ${stringDate.slice(11,15)}`
  return (
    <Link href={`/blog/${uid}`}>
      <GridItem>
      <GridItemImg>
        <img src={cardImg}/>
      </GridItemImg>
      <GridItemText>
        <GridItemTagContainer>{category.map((pill, i) => <GridItemTag key={`category-${i}`}>{pill}</GridItemTag>)}</GridItemTagContainer>
        
        <PrismicRichText field={cardTitle}/>
        <PrismicRichText field={cardText}/>
        <p>{publicationDate}</p>
      </GridItemText>
    </GridItem>
    </Link>
  )
}
