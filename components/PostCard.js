import { GridItem, GridItemImg, GridItemText, GridItemTag} from "./PostsGridStyles"

export const PostCard = ({category, cardImg, cardTitle, cardText, date}) => {
  return (
      <GridItem>
      <GridItemImg>
        <img src={cardImg}/>
      </GridItemImg>
      <GridItemText>
        <GridItemTag>{category}</GridItemTag>
        <h3>{cardTitle}</h3>
        <p>{cardText}</p>
        <p>{date}</p>
      </GridItemText>
    </GridItem>
  )
}
