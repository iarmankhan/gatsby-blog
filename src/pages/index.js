import React from 'react';
import {
    Layout
} from '../components/Layout';
import {
    graphql
} from 'gatsby';

const App = ({data}) => {

    return ( 
        <>
        <Layout>
        {
            data.allMdx.nodes.map(({ excerpt, frontmatter }) => (
                <>
                    <h1>{frontmatter.title}</h1>
                    <p>{frontmatter.date}</p>
                    <p>{excerpt}</p>
                </>
            ))
        }
        </Layout>
        </>
    );
};

export default App;

export const query = graphql `
    query SITE_INDEX_QUERY {
        allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { published: { eq: true } } }
        ){
            nodes {
              id
              excerpt(pruneLength: 250)
              frontmatter {
                title
                date
              }
            }
        }      
    }
`;
