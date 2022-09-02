import styled from 'styled-components'

export const GridContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px; 
`
export const GridItem  = styled.div`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;
`

export const GridItemImg = styled.div`
  min-height: 280px;
  max-height: 280px;
  border-radius: 22px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  background-color: #fbeae0;

  ${GridItem}:nth-child(9n+1) && {
    height: 460px;
    min-height: 460px;
    max-height: 460px;
     background-color: #fbeae0;

  }
  ${GridItem}:nth-child(9n+9) && {
    height: 460px;
    min-height: 460px;
    max-height: 460px;

     background-color: #fbeae0;

  }
  ${GridItem}:nth-child(9n+5) && {
    height: 460px;
    min-height: 460px;
    max-height: 460px;
     background-color: #fbeae0;

  }

  ${GridItem}:nth-child(9n+3) && {
    height:370px;
    min-height: 370px;
    max-height: 370px;
      background-color: #fbeae0;

  }
  ${GridItem}:nth-child(9n+6) && {
    height: 370px;
    min-height: 370px;
    max-height: 370px;
      background-color: #fbeae0;

  }
  ${GridItem}:nth-child(9n+7) && {
    height: 370px;
    min-height: 370px;
    max-height: 370px;
      background-color: #fbeae0;

  }

  img {
    height: 100%;
    width: 100%;
    transform: scale(1);
    transition: all  .3s ease;
    object-fit: cover;
    transform-origin: bottom;
  }
  ${GridItem}:hover && img{
      transform: scale(1.05)
    }
`
export const GridItemTagContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
margin: 0;  flex-wrap: wrap;
`
export const GridItemTag = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #FF6100;
  padding: 4px 11px;
  background: #fff7f2;
  display: inline-block;
  border-radius: 100px;
  max-width: 30%;
`
export const GridItemText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap:16px;
  h3 {
    font-weight: 700;
    font-size: 22px;
    line-height: 135%;
    color: #333333;
    margin: 0;
    width: 97%;
  }
  p {
    margin: 0;
    &:last-child {
      font-weight: 700;
      font-size: 12.8275px;
      line-height: 18px;
      letter-spacing: 0.229062px;
      color: rgba(0, 17, 51, 0.3);
      margin: 0;
    }
  }
`