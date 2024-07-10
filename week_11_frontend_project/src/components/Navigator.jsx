import {Link, Outlet} from 'react-router-dom'

const Navigator = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to = "/create-booking">Create Booking</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}

export default Navigator