import { GridItem, GridItemImg, GridItemText, GridItemTag, GridItemTagContainer} from "./PostsGridStyles"
import { PrismicRichText } from "@prismicio/react"
import Link from 'next/link';

export const PostCard = ({category, cardImg, cardTitle, cardText, date, uid}) => {
  const postDate = new Date(date)
  const stringDate = postDate.toString()
  const publicationDate = `${stringDate.slice(4,10)}, ${stringDate.slice(11,15)}`
  const categorySlug = category.map(item => item.split(" ").join("-").toLowerCase())
  const item = {
    hidden: { opacity: 0, y: -40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <Link href={`/blog/${uid}`}>
      <GridItem  variants={item}>
      <GridItemImg>
        <img src={cardImg}/>
      </GridItemImg>
      <GridItemText>
        <GridItemTagContainer>{category.map((pill, i) => <Link href={`/blog/${categorySlug[i]}`} key={`category-${i}`}><GridItemTag>{pill}</GridItemTag></Link>)}</GridItemTagContainer>
        
        <PrismicRichText field={cardTitle}/>
        <PrismicRichText field={cardText}/>
        <p>{publicationDate}</p>
      </GridItemText>
    </GridItem>
    </Link>
  )
}
