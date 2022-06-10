import { Link } from "react-router-dom"

export default function Nav() {
    return <nav>
        <div>
            e-Tutor
        </div>
        <ul>
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>Tutorials</li>
            <li>Contact us</li>
            <li>
                <button>
                    
                    <Link to="/login">
                    login 
                    </Link>
                    
                </button>
            </li>
        </ul>
    </nav>
}