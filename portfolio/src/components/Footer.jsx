import { Link } from "react-router-dom"

function Footer () {
  return (
    <footer>
      <div className="FootTitle">
        <Link>Mitchel Joy</Link>
      </div>
      <div className="footerLinks">
        <Link>Home</Link>
        <Link id="Alt">Projects</Link>
        <Link>Contact</Link>
      </div>
    </footer>
  )
}

export default Footer