exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const data = await graphql(`
    {
      allCoursesJson {
        edges {
          node 
          {
            title
          }
        }
      }
    }
  `)

  if (data.errors) {
    console.log("Error retrieving data", data.errors)
    return
  }
  createPage({
    path: "/courseTemp",
    component: require.resolve("./src/templates/courseTemp.js"),
    context: {},
    defer: true,
  })
}
