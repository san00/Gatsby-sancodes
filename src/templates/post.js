import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Container from "../styles/global/container"

import {
  PostText,
  Postwrapper,
  InnerWrapper,
} from "../styles/components/blogPostStyling"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      timeToRead
      frontmatter {
        title
        author
        subHeader
      }
      body
    }
  }
`

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <Container>
      <Postwrapper>
        <InnerWrapper>
          <PostText title noCol headerHeight>
            {post.frontmatter.title}
          </PostText>
          <PostText
            subHead
            bold
            noCol
            headerHeight
            textCentre
            lineLengthS
            underline
          >
            {post.frontmatter.subHeader}
          </PostText>
          <PostText helper> {post.timeToRead} min read</PostText>
          <PostText lineLengthM>
            <MDXRenderer>{post.body}</MDXRenderer>
          </PostText>
          <Link to="/blog">back to all posts</Link>
        </InnerWrapper>
      </Postwrapper>
    </Container>
  </Layout>
)

export default PostTemplate
