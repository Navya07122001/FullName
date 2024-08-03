import React from 'react';
import { useState } from 'react';
function FullName() {
    const [fname,setFname]=useState('');
    const [lname,setLname]=useState('');
    const [flag,setFlag]=useState(false);
    const displayFullName=(e)=>{
        if(fname==="" || lname==="")
        {
            setFlag(false)
        }
        else{
            setFlag(true)
            e.preventDefault();
        }
       
        console.log(fname+" "+lname)
    }
    const handleFname=(e)=>{
        setFlag(false)
        setFname(e.target.value)
    }
    const handleLname=(e)=>{
       setFlag(false)
        setLname(e.target.value)
    }
    return (
        <div style={{marginLeft:"auto",marginRight:"auto"}}>
            <h1 style={{fontFamily:"serif",fontSize:"35px"}}>Full Name Display</h1>
            <form onSubmit={displayFullName}>
                <div style={{fontSize:"20px",fontFamily:"serif"}}>
                    <span >FirstName:</span>
                <input type='text' required onChange={handleFname} style={{fontSize:"20px",fontFamily:"serif"}}/>
                </div>
                <div>
                <span style={{fontSize:"20px",fontFamily:"serif"}}>Last Name:</span>
                <input type='text' required onChange={handleLname} style={{fontSize:"20px",fontFamily:"serif"}}/>
                </div>
                <button style={{fontSize:"18px"}} type="submit">Submit</button>
            </form>
            {flag && <div style={{fontSize:"20px",fontFamily:"serif",marginTop:"30px"}}>FullName: {fname} {lname}</div>}
            
        </div>
    );
}

export default FullName;