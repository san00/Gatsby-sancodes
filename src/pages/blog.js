import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { InnerWrap } from "../styles/components/columnLayout"
import Container from "../styles/global/container"
import {
  GridWrapper,
  LinkToPost,
  Title,
  Cards,
  Excerpt,
  ReadMore,
  PageHeader,
  FlexWrap,
  Tags,
} from "../styles/components/blogPageStyling"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            title
            slug
            tags
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Seo title="blog" />
      <Container>
        <FlexWrap>
          <PageHeader>Writing</PageHeader>
        </FlexWrap>
        <GridWrapper>
          {data.allMdx.nodes.map(({ id, frontmatter, excerpt }) => (
            <Cards key={id}>
              <LinkToPost to={frontmatter.slug}>
                <Title>{frontmatter.title}</Title>
                <Excerpt>{excerpt}</Excerpt>
                <ReadMore>Read more</ReadMore>
                <Tags>{frontmatter.tags}</Tags>
              </LinkToPost>
            </Cards>
          ))}
        </GridWrapper>
        <InnerWrap>
          <Link to="/">Go back to the homepage</Link>
        </InnerWrap>
      </Container>
    </Layout>
  )
}

export default Blog
