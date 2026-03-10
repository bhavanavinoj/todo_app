import { useState,useEffect } from "react";
import axios from "axios";



function Dashboard(){
    const[title,setTitle]=useState('Welcome')
    const [name,setName] =useState([])
    const [users, setUsers] = useState([])
    // useEffect(()=>{
    //    async function getNames(req,res){
    //         try{
    //             const result=await fetch("http://localhost:3000/getAllUsers")
    //             const data=await result.json()
    //             setName(data)
    //            }
    //         catch(err){
    //             console.log("failed to get names")
    //         }
    //    }
    //    getNames()
    // },[])


    useEffect(()=>{
        // axios.get("http://localhost:3000/getAllUsers")
        axios.get("http://localhost:3000/getAllUsers")
        .then(result=>{
            console.log("result : ",result);
            setUsers(result.data)
        })
    })

    useEffect(()=>{
        axios.post("http://localhost:3000/insertUser")
        .then(result=>{
            console.log("result : ",result);
            setUsers(result.data)
        })
    })

    function changeTitle(){
        setTitle('ByeBye')
    }
    return(
        <>
        <h2>Dashboard</h2>
        <h4>{title}</h4>
        

        <table border="1" cellPadding="8" style={{ marginTop: '20px', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Mark</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.mark}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>

            </table >
        <ul>
           {name.map((item,index)=>{
            return  <li key={index}>{item}</li>
           })
          }
        </ul>
        <button onClick={changeTitle}>change Title</button>
        </>
    )
}
export default Dashboard;