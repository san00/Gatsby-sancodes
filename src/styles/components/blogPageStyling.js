import styled from "styled-components"
import { spacingScale, Neutral, Red, typeScale } from "../utils"

import { Link } from "gatsby"

export const GridWrapper = styled.section`
  --min: 45ch;
  --gap: 1rem;
  display: grid;
  grid-gap: var(--gap);

  /* min() with 100% prevents overflow
  in extra narrow spaces */
  grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
  margin: ${spacingScale.spacing_m};
`

export const FlexWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: ${spacingScale.spacing_m};
  margin-right: ${spacingScale.spacing_m};
  padding-left: ${spacingScale.spacing_m};
`

export const PageHeader = styled.p`
  font-size: 2.827rem;
  font-weight: 700;
  font-family: "Quicksand", sans-serif;
  text-decoration: underline;
  text-decoration-thickness: 0.4rem;
`

export const Cards = styled.article`
  display: flex;
  flex-direction: column;
  padding: ${spacingScale.spacing_m};
`

export const Title = styled.p`
  line-height: 1.28em;
  font-size: 1.6em;
  font-weight: 700;
  font-family: "Quicksand", sans-serif;
  color: ${Neutral[600]};
`

export const Excerpt = styled.p`
  line-height: 1.58em;
  font-weight: 300;
  color: ${Neutral[500]};
  font-family: "Quicksand", sans-serif;
  font-size: 1.1em;
`
export const ReadMore = styled.p`
  line-height: 1.58em;
  word-break: normal;
  font-weight: 500;
  padding-top: ${spacingScale.spacing_m};
  color: ${Neutral[500]};
  text-decoration: underline;
  color: ${Red[100]};
  font-size: 1.1em;
  font-family: "krub", sans-serif;
`

export const Tags = styled.p`
  line-height: 1.58em;
  font-weight: 500;
  color: ${Neutral[500]};
  text-align: left;
  font-family: "krub", sans-serif;
  padding-top: ${spacingScale.spacing_m};
  font-size: ${typeScale.helperText};
`

export const LinkToPost = styled(Link)`
  text-decoration: none;
`
