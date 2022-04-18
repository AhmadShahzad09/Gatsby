import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({siteTitle}) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
       <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
       <a href="https://educative.io">  
       <StaticImage src = "../images/Educative.png" style= {{margin: '0 auto',maxWidth:200, 
        background:`white`}}>
       </StaticImage>
  </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
