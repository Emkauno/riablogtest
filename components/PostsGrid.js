import { GridContainer } from "./PostsGridStyles"
import { PostCard } from "./PostCard"

export const PostsGrid = (posts) => {
  return (
    <GridContainer>
       {posts.posts.map((post, i)=>(
        <PostCard 
        uid={posts.posts[i].uid}
        key={`post-${i}`}
        category={posts.posts[i].tags}
        cardImg={posts.posts[i].data.slices[0].primary.grid_image.url}
        cardTitle={posts.posts[i].data.slices[0].primary.title}
        cardText={posts.posts[i].data.slices[0].primary.featured_text}
        date={[posts.posts[i].last_publication_date]}/>
       ))}
    </GridContainer>
  )
}
