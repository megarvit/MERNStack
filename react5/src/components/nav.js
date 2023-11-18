import { Link } from "react-router-dom";

function Nav()
{
    return(
        <div class="navbar bg-danger px-4">
            <a class="navbar-brand">Flipkart</a>
            <div class="nav ms-auto">
                <Link class="nav-link" to='/'>Home</Link>
                <Link class="nav-link" to='/blog'>Blog</Link>
                <Link class="nav-link" to='/contact'>Contact</Link>
                <Link class="nav-link" to='/project'>Projects</Link>
            </div>
            <button class="btn btn-success">Order Now</button>
        </div>
    )
}
export default Nav;