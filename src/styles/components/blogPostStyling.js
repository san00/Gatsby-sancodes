import styled from "styled-components"
import { spacingScale, typeScale, mediaQuery, Neutral, Red } from "../utils"

export const Postwrapper = styled.section`
  display: flex;
  justify-content: center;
  @media (min-width: ${mediaQuery.breakpoint1}) {
    margin-left: ${spacingScale.spacing_xl};
    margin-right: ${spacingScale.spacing_xl};
  }
`
export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: ${spacingScale.spacing_xl};
  margin-right: ${spacingScale.spacing_xl};
`

export const PostText = styled.p`
  font-size: ${props => {
    if (props.helper) return typeScale.helperText
    else if (props.title) return "1.5em"
    else if (props.subHead) return "3.998rem"
    else if (props.helper) return "0.8em"
    return typeScale.paragraph
  }};
  line-height: ${props => {
    if (props.headerHeight) return "1.3"
    return "1.414rem"
  }};
  font-weight: ${props => {
    if (props.bold) return "700"
    return "500"
  }};
  color: ${props => {
    if (props.noCol) return "none"
    return Neutral[500]
  }};
  text-align: ${props => {
    if (props.textCentre) return "center"
    else if (props.textLeft) return "left"
    else if (props.textRight) return "right"
  }};
  margin-bottom: 0;
  max-width: ${props => {
    if (props.lineLengthM) return "60ch"
    else if (props.lineLengthS) return "25ch"
  }};
  font-family: ${props => {
    if (props.chunkyFont) return "Quicksand"
    return "krub, sans-serif"
  }};
  text-decoration: ${props => {
    if (props.underline) return "underline"
    return "none"
  }};
  text-decoration-color: ${Red[200]};
`
