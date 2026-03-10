import {useNavigate} from "react-router-dom"

function Home(){
    const Navigate=useNavigate()

    return(
    <>
        <div>
            <h2>welcome to home page</h2>
            <button onClick={()=>Navigate("/about")}>Go to About</button>
        </div>
    </>
    )
}

export default Home;