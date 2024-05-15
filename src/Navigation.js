import { Outlet, Link } from "react-router-dom";
import MuiLink from '@mui/material/Link';
import Button from '@mui/material/Button';



const Navigation = () => {
    return (
        <>
            <nav>
                <Link style={{ margin: 5 }} to='/'><Button style={{ backgroundColor: oblibenaBarva, color: "black" }} variant="contained">Home</Button></Link>

                <Link style={{ margin: 5 }} to="/Api"><Button style={{ backgroundColor: oblibenaBarva, color: "black" }} variant="contained">Seriály</Button></Link>

            </nav>
            <Outlet />
        </>
    )
}

export default Navigation;