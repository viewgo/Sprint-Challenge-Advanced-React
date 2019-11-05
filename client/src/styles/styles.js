import styled from "styled-components";

export const AppDiv = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  text-align: center;

  @media (max-width: 1200px){
    flex-flow: row wrap;
    }

   

`;

export const PlayerListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const PlayerCardContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  width: 300px;
  
  margin: 30px;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.75);

  h2{
      margin-bottom: 0;
  }
  h3{
      margin-top: 0;
      font-style: italic;
  }
`;

export const PlayerChartContainer = styled.div`
@media (max-width: 1200px){
    display: none;
}
`;
