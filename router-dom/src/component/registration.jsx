import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./registration.css"


function Registration() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        age: '',
        course: '',
        mark: '',
        remark: '',
        place: ''
    })

    return (
        <>
            <div className="container">
                <div className="login">
                    <h2>Registration</h2>
                    <input onChange={(e) => setUser({ ...user, name: e.target.value })} type="text" placeholder="Username" className="input"/>
                    <input onChange={(e) => setUser({ ...user, age: e.target.value })} type="text" placeholder="Age" className="input"/>
                    <input onChange={(e) => setUser({ ...user, mark: e.target.value })} type="text" placeholder="Mark" className="input"/>
                    <input onChange={(e) => setUser({ ...user, place: e.target.value })} type="email" placeholder="Email" className="input" />
                    <button className="btn">Register</button>
                </div>
            </div>
        </>
    )
}

export default Registration