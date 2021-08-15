import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const Happypage = () => (
    <Layout>
        <StaticImage
      src="../images/happy.jpg"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="happy"
      style={{ marginBottom: `1.45rem` }}
    />
    </Layout>
)

export default Happypage