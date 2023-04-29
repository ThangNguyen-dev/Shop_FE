import { Link } from "react-router-dom";

function Header() {
    return (
        <>
        <h1>Header Of page</h1>
            <ul>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </>
    )
}

export default Header;