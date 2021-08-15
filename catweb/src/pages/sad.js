import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const Sadypage = () => (
    <Layout>
        <StaticImage
      src="../images/ss.jpg"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="sad"
      style={{ marginBottom: `1.45rem` }}
    />
    </Layout>
)

export default Sadypage