import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Click the picture you want!</h1>
    <p>you can fine the story in the picture</p>
    <br />

    <StaticImage
      src="../images/happy.jpg"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="sad"
      style={{ marginBottom: `1.45rem` }}
    />
    <h3><Link to="/happy/">Happy cat</Link></h3><br /><br />
    
    
    <StaticImage
      src="../images/ss.jpg"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="sad"
      style={{ marginBottom: `1.45rem` }}
    />
    <h3><Link to="/sad/">Sad cat</Link></h3><br /><br />
    
    

    <StaticImage
      src="../images/anno.jpg"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="sad"
      style={{ marginBottom: `1.45rem` }}
    />
    <h3><Link to="/annoy/">Annoyed cat</Link></h3><br /><br />

    

<StaticImage
      src="../images/sleepy.jpg"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="sad"
      style={{ marginBottom: `1.45rem` }}
    />
    <h3><Link to="/sleepy/">Sleepy cat</Link></h3>
   
  </Layout>
)

export default IndexPage
