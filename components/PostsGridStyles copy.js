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
  width: 100%;
  border-radius: 22px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  img {
    width: 100%;
    transform: scale(1);
  transition: all  .3s ease;

  }
  ${GridItem}:hover && img{
      transform: scale(1.05)
    }
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
  margin-bottom: 8px;
`
export const GridItemText = styled.div`
  width: 100%;
  h3 {
    font-weight: 700;
    font-size: 22px;
    line-height: 135%;
    color: #333333;
    margin: 0;
    margin-bottom: 12px;
    width: 97%;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: rgba(0, 17, 51, 0.6);
    margin: 0;
    margin-bottom: 16px;
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