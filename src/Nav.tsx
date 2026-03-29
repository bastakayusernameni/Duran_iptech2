import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        <nav className="nav-main">
        <ul className="nav-links">
          <li><Link to = '/' className="nav-link">Home</Link></li>
          <li><Link to = '/about' className="nav-link">About</Link></li>
          <li><Link to = '/product' className="nav-link">Product</Link></li>
          <li><Link to = '/contact' className="nav-link">Contact</Link></li>
        </ul>
        </nav>
    )
}

