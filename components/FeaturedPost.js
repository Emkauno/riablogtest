import { FeaturedBox, FeaturedHalf, FeaturedText, FeaturedImg } from './FeaturedPostStyles'
import {  GridItemTagContainer} from "./PostsGridStyles"
import Link from 'next/link'
export const FeaturedPost = ({ data }) => {
  const {tags, uid} = data
  const date = data.last_publication_date
 
  const postDate = new Date(date)
  const stringDate = postDate.toString()
  const publicationDate = `${stringDate.slice(4,10)}, ${stringDate.slice(11,15)}`

  return (
    <Link href={`/blog/${uid}`}>
    <FeaturedBox>
      <FeaturedHalf>
        <FeaturedText>
        <GridItemTagContainer>{tags.map((pill, i) => <h3 key={`category-${i}`}>{pill}</h3>)}</GridItemTagContainer>
          <h1>{data.data.slices[0].primary.title[0].text}</h1>
          <p>{data.data.slices[0].primary.featured_text[0].text}</p>
          <p>{publicationDate}</p>
        </FeaturedText>
      </FeaturedHalf>
      <FeaturedHalf>
        <FeaturedImg bgImg={data.data.slices[0].primary.grid_image.url}/>
      </FeaturedHalf>
    </FeaturedBox>
    </Link>
  )
}