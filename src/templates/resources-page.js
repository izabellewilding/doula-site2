import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import SEO from "../components/seo";

export const ResourcesPageTemplate = ({
  title,
  content,
  contentComponent,
  image
}) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      <div>
        <div className="page-top-padding"></div>

        <div
          className="full-width-image margin-top-0 is-relative centered"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,

            height: "218px",
            backgroundPosition: "center"
          }}
        >
          <div className="hover-over-darken absolute"></div>
          <div className="centered margin-bottom">
            <h2
              className="title is-size-1-tablet is-size-2-mobile is-bold-light is-uppercase"
              style={{ color: "#f9f6f6", zIndex: 1 }}
            >
              {title}
            </h2>
          </div>{" "}
        </div>
        <div className="section">
          <div className="container ">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ResourcesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

const ResourcesPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SEO
        title="Useful Doula Resources"
        description="Reading material relating to birth, pregnancy, and general wellbeing "
      />
      <ResourcesPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={post.frontmatter.image}
      />
    </Layout>
  );
};

ResourcesPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ResourcesPage;

export const resourcesPageQuery = graphql`
  query ResourcesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
