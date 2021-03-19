import styled from 'styled-components';

export const TableContainer = styled.div`
  overflow-x: auto;
  width: 100vw;
  padding: 1vw 3vw;
`

export const Table = styled.table`
  border: 1px solid #fff;
  border-radius: 10px;
  height: 80%;
  width: 100%;
  border-spacing: .5vw 0;
`;

export const TH = styled.th`
  color: #fff;
  font-size: 1.2rem;
  padding: 1.2rem;
  text-align: center;
`

type BGColor = {
  color?: string; ///Passing Optional Props
  type?: string;
};

export const TD = styled.td<BGColor>`
  box-sizing: border-box;
  color: #252525;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  padding: .7rem;
  margin: 1rem;
  background: ${({color}) => color};

  ${props => props.type === 'first'
    &&`
        // border-radius: 10px 10px 0 0;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
  `};

  ${props => props.type === 'last'
    &&`
        border-radius: 0 0 10px 10px;
  `};


`

export const TDTime = styled.td<BGColor>`
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  border: none;
  padding: .7rem;
`

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

