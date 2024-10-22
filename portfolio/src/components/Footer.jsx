import { Link } from "react-router-dom"

function Footer () {
  return (
    <footer>
      <div className="FootTitle">
        <Link>Mitchel Joy</Link>
      </div>
      <div className="footerLinks">
        <Link to="/">Home</Link>
        <Link to="/projects" id="Alt">Projects</Link>
        <Link to="/contact" >Contact</Link>
      </div>
    </footer>
  )
}

export default Footer