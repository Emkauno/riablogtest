import { GridContainer } from "./PostsGridStyles";
import { PostCard } from "./PostCard";
import { motion } from "framer-motion";
import { useRouter } from 'next/router'

export const PostsGrid = (posts) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.4,
        staggerChildren: 0.25,
      },
    },
  };
  const router = useRouter()
  return (

    <GridContainer variants={container} initial="hidden" animate="show">
      {posts.posts.map((post, i) => (
          <PostCard key={router.route}
            uid={posts.posts[i].uid}
            category={posts.posts[i].tags}
            cardImg={posts.posts[i].data.slices[0].primary.grid_image.url}
            cardTitle={posts.posts[i].data.slices[0].primary.title}
            cardText={posts.posts[i].data.slices[0].primary.featured_text}
            date={[posts.posts[i].last_publication_date]}
          />
      ))}
    </GridContainer>
  );
};
