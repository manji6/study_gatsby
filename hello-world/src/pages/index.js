import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
<div>
  <Header headerText="index"/>
    <h2 style={{ color: 'purple' }}>Konnichiwa!</h2>
    <ul>
      <li><Link to="/about/">About</Link></li>
    </ul>
</div>
)