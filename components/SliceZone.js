import React from "react";
import {
 PostHero,
 PostContent,
 RelatedPosts
} from "./slices";

const SliceZone = ({ slices, tags, relatedPosts }) => {
  const sliceComponents = {
    post_hero: PostHero,
    post_content: PostContent,
    related_posts: RelatedPosts
  };

  return slices.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type];
    if (SliceComponent) {
      return <SliceComponent slice={slice} key={`slice-${index}`} tags={tags} relatedPosts={relatedPosts}/>;
    }
    return null;
  });
};

export default SliceZone;
