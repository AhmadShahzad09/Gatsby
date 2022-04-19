import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { node } from "prop-types"
import { Card, Container , Image , Button, Row, Col} from "react-bootstrap"

const Index = ({data}) => {
 const courses = data.allCoursesJson.edges // array
console.log(courses)
  return( 
  //<pre>{JSON.stringify(data, null, 4)}</pre>
  <Layout>
            <div className="index">
                <h1 className="index-title">{node}</h1>
                {courses.length > 0 ? courses.map((node, i) => {
                  console.log(node)
                    return (
                        <Card className="mt-1">
                        <Row>
                        <Col xs={4} className={"m-2 me-2"}>
                           <div>
                             <Image
                               style={{ width: "100%", height: "100%" }}
                               src={node.node.img}
                               alt="Image could not load"
                             ></Image>
                           </div>
                         </Col>
                         <Col xs={6} className={"m-1 mt-2 limitTextHeight"}  >
                           <div>
                             <a href={node.node.url}>{node.node.title}</a>
                           </div>
                           <div>{node.node.author}</div>
                           <div className="mt-2 " >{node.node.overview}</div>
                           <div className={"mt-3 "}>{node.node.free ? "Free" : "Paid"}</div>
                           <Button 
                             variant="primary"
                             className={"mt-1 limitTextHeight"}
                             onClick={() => {
                               window.open('https://www.educative.io/', '_blank');
                             }}
                           >
                             Visit Website
                           </Button>
                         </Col>
                       </Row>
                       </Card>
                    
                    )
                }): "Loading"}
            </div>
            </Layout>
            )
}

export default Index

export const data = graphql`
    {
      allCoursesJson {
        edges {
          node {
            title
            author
            free
            overview
            url
            img
          }
        }
      }
    }
  `