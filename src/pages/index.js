import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { node } from "prop-types"
import { Link } from "gatsby"
import { Card , Image , Button, Row, Col} from "react-bootstrap"


const Index = ({data}) => {
 const courses = data.allCoursesJson.edges // array

console.log(courses)
  return( 
  //<pre>{JSON.stringify(data, null, 4)}</pre>
  <Layout className="theme-my-light">
      {/* <div style={{align:"centre", marginLeft:"35%"} }>
      <h1>
                    E Library
                  </h1>
      
      </div> */}
      <div style={{float:'right', marginTop: "0"}}>
                    <button style={{marginBottom:"15%"}} className="btn-primary">
                  <Link to="/index-dark">Switch Theme</Link>
                </button>
    </div>
    <br>
    </br>
            <div className="index">
                <h1 className="index-title">{node}</h1>
                {courses.length > 0 ? courses.map((node, i) => {
                  console.log(node)
                  return (
                    <Card className="mt-1 theme-my-light" >
                        <Row>
                        <Col xs={2} className={"m-2 me-2"}>
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
                           <div className={"mt-3 "}>{node.node.genre}</div>
                           <Button 
                             variant="primary"
                             className={"mt-1 limitTextHeight"}
                             onClick={() => {
                               window.open('https://openlibrary.org/', '_blank');
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
            genre
            overview
            url
            img
          }
        }
      }
    }
  `