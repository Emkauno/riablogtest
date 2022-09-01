import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 100%;
  display: flex; 
  flex-direction: column;
  align-items: flex-start; 
  justify-content: flex-start;
  margin-bottom: 100px;
  background: lime;
`
  
export const PostHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h1{
    font-weight: 800;
    margin: 0;
    margin-bottom: 8px;
    font-size: 40px;
    line-height: 54px;
    letter-spacing: 0.15px;
    color: rgba(0, 17, 51, 0.8);
    max-width: 540px;
  }
  p {
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      color: rgba(0, 17, 51, 0.3);
      letter-spacing: 0.25px;
      margin: 0;
      margin-bottom: 64px;

  }

  img{
    width: 100%;
    margin-bottom: 48px;

  }
`
export const PostSocial = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  img {
    margin: 0;
  }
`
export const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
  a {
    img {
      transform: scale(1);
      transition: all .3s ease;
      width: 22px;
      &:hover {
        transform:scale(1.1);
      }
    }
  }

`

export const PostBody = styled.div` 
  width: 100%;
  max-width: 670px;
  margin: 0 auto;
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
    color: red;
  }
`
export const RelatedPosts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 44px;
  h2 {
    font-weight: 800;
    font-size: 40px;
    line-height: 54px;
    letter-spacing: 0.15px;
    color: rgba(0, 17, 51, 0.8);
    margin: 0 0 40px 30px;
  }
`