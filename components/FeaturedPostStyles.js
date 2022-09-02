import styled from 'styled-components';

export const FeaturedBox= styled.div`
  background: #fff7f2;
  border-radius: 25px;
  padding: 48px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:center;
  gap: 36px;
  cursor: pointer;
  margin-bottom: 40px;

  @media(max-width: 768px){
    flex-direction: column;
    gap: 14px;
  }

`
export const FeaturedHalf = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:center;
  @media(max-width: 768px){
    width: 100%;
    max-width: 450px;
}
  @media(max-width: 450px){
    width: 100%;
    max-width: 390px;
}
`
export const FeaturedText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  h3 {
    margin: 0;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.15px;
    color: #FF6100;
    display: inline-block;
    margin-right: 24px;
    @media(max-width: 450px){
    font-size: 16px;
}
  }
  h1 {
    margin: 0;
    font-weight: 800;
    font-size: 38px;
    line-height: 135%;
    color: rgba(0, 17, 51, 0.8);
    margin-top: 16px;
    margin-bottom: 24px;
    @media(max-width: 450px){
    font-size: 32px;
}
  }
  p {
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 28px;
    color: rgba(0, 17, 51, 0.6);
    @media(max-width: 768px){
      margin: 0;
  }
  @media(max-width: 450px){
    font-size: 14px;
}
    &:last-child{
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      color: rgba(0, 17, 51, 0.3);
      letter-spacing: 0.25px;
      margin-bottom: 0;
      @media(max-width: 768px){
        display:none;
     }
    }
  }
`
export const FeaturedImg = styled.div`
  width: 100%;  
  max-width: 450px;
  min-height: 400px;
  background-image: ${props => props.bgImg ? `url(${props.bgImg})` : ""};
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top center;
  background-origin: center;
  background-color: #fbeae0;
  border-radius: 23px;
  transition: all .3s  ease-in-out;
  transform: translate3d(0px, 0px, 0px);
  @media(max-width: 500px){
    min-height: 290px;
  }

  ${FeaturedBox}:hover && {
    background-size: 105%;
  }
  `