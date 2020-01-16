import React from "react";
import styled from "styled-components";

export const DisplayFlex = styled.div`
  display: flex;
  ${props => props.center && `justify-content:center;align-items:center`}
  ${props => props.right && `justify-content:flex-end;align-items:center`}
  ${props => props.left && `justify-content:flex-start;align-items:center`}
`;

export const Wrapper = styled.div`
  display: flex;
  max-width:100vw;
  justify-content:center;
  align-items:"center;
  ${props => props.color && `background:${props.theme.colors[props.color]}`}
`;

export const Layout = styled.div`
  width: 100%;
  max-width: 1140px;
  height:100vh;
  padding: 20px;
`;

export const CardTitle = styled.div`
  background: ${props => props.theme.colors.grey};
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSize.primary};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
`;

export const TitleTexts = styled.div`
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSize.title};
  ${props => (props.bold ? "font-weight:600;" : "")};
`;

export const RemainingCounter = styled.div`
  font-size: ${props => props.theme.fontSize.title};
`;

export const Remainder = styled.div`
  color: ${props => props.theme.colors.purple};
  font-size: ${props => props.theme.fontSize.subHeading};
`;

export const CardBody = styled.div`
  background: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px 30px;
  flex-wrap: wrap;
  border: 1px solid ${props => props.theme.colors.grey};
  //   align-items: center;
`;

export const Question = styled.div`
  color: ${props => props.theme.colors.purple};
  font-size: ${props => props.theme.fontSize.title};
  margin: 20px 0px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
`;

export const Options = styled.div`
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSize.primary};
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Option = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  // border: 2px solid ${props => props.theme.colors.grey};
  margin: 10px;
  border-radius: 6px;
  ${props =>
    props.color
      ? props.color === "correct"
        ? `background:${props.theme.colors.primary};font-weight:700;`
        : `background:${props.theme.colors.wrong};color:${props.theme.colors.white};font-weight:500;`
      : `background:${props.theme.colors.grey}`};
`;

export const Timer = styled.div`
padding:0px 10px;
  width:30px;
  display: flex;
  color: ${props => props.theme.colors.teal};
  font-size: ${props => props.theme.fontSize.heading};
//   border: 2px solid ${props => props.theme.colors.teal};;
border-radius: 100px;
`;

export const PrimaryButton = styled.div`
  padding: 10px 10px;
  margin: 0px 10px;
  width: 200px;
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSize.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 6px;
  &:hover {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    font-weight:500;
  }
`;
