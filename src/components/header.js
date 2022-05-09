import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({siteTitle}) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45 rem`,
    }}
  >
       <div
      style={{

        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
       <a href="https://gatsbyjs.com">  
       <StaticImage src = "../images/gatsby-icon.png" style= {{float: "left", margin: '0 auto',maxWidth:50, 
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
