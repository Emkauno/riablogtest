import { FeaturedBox, FeaturedHalf, FeaturedText, FeaturedImg } from './FeaturedPostStyles'

export const FeaturedPost = ({ bgImg }) => {
  return (
    <FeaturedBox>
      <FeaturedHalf>
        <FeaturedText>
          <h3>Life Abroad</h3>
          <h1>How does culture impact the way we live and work?</h1>
          <p>We may not give it much thought, but our culture — the customs, traditions, and social conventions of the country or region where...</p>
          <p>june 14, 2022</p>
        </FeaturedText>
      </FeaturedHalf>
      <FeaturedHalf>
        <FeaturedImg bgImg={bgImg}/>
      </FeaturedHalf>
    </FeaturedBox>
  )
}