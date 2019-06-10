/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

// // This is for ES Modules that expect window to be defined
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-scroll-into-view-if-needed/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

// We're adding extra values to the "node"  (in this case slug)
// so we can query it later on for all blogs and get their slugs
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      // Individual MDX node
      node,
      // Name of the field we are reading
      name: "slug",
      // Generated value based on filepath with "blog"
      value: `/blog${value}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    query {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            fields {
              slug
            }
            frontmatter {
              title
              author
              date
              tags
            }
          }
        }
      }
    }
  `).then((results, errors) => {
    if (errors) return Promise.reject(errors)
    const posts = results.data.allMdx.edges

    const totalPosts = posts.length

    // This little algo takes the array of posts and groups
    // them based on this `size`:

    let size = 10
    let start = 0

    const numberOfGroups = Math.ceil(String(totalPosts / size))

    // Premake the grouped array to the correct length. new Array
    // wasn't working with map so don't @ me :)

    let groupedPosts = Array.from(Array(numberOfGroups))

    groupedPosts = groupedPosts.map((item, index) => {
      const group = posts.slice(start, start + size)
      start += size
      return group
    })

    // Here's the basic idea of what the grouping is doing if the
    // size variable was 2:
    // posts: [post1, post2, post3]
    // groupedPosts: [[post1, post2], [post3]]

    groupedPosts.forEach((group, index) => {
      const page = index + 1
      createPage({
        path: `/blog/${page}`,
        component: path.resolve("./src/components/browse-blog-posts.js"),
        context: { groupedPosts, group, page },
      })
    })
  })
}
