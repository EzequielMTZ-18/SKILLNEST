import { BrowserRouter as Router, Routes, Route, Link, NavLink, Navigate } from 'react-router-dom'
import DataV from '../data/dataV.js';


const HomePage = () => {



    return (
        <>
            <header>
                <h1>WW2 Vehicles Gallery</h1>
            </header>
            <main>

                <ol className="lista">
                    {/* {Data.map((vehicle, index) => <li><NavLink to="/Card" className={({ isActive }) => (isActive ? 'active' : '')} key={index}>{vehicle.name}</NavLink></li>)} */}

                    {DataV.map((vehicle) => (
                        <li key={vehicle.id}>
                            <Link
                                to={`/vehicle/${vehicle.id}/${encodeURIComponent(vehicle.name)}`}
                                state={{ name: vehicle.name, imageUrl: vehicle.url }}
                                style={{ textDecoration: "none", color: "darkcyan", fontSize: "1.4rem", backgroundColor: "black" }}
                            >
                                {vehicle.name}
                            </Link>

                        </li>
                    ))}
                </ol>
            </main >
        </>
    )

}


export default HomePage;