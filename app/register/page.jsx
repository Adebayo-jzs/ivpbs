"use client"
import { useState } from "react";
import "../form/style.css"

export default function Register(){
  const[userData,setUserData] = useState({
    name:"",
    email:"",
  });
	const handleChange = (e) => {
		setUserData({...userData,[e.target.name]:e.target.value})
	}
  return(
    <div style={{ maxWidth: 500, margin: "40px auto",backgroundColor:"white" }}>
      <h1>Register</h1>
			<form>
        <label>Full Name</label>
        <input
          name="name"
          value={userData.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
          className="input"
				/>
        <label>Email</label>
				<input
					type="email"
					name="email"
					value={userData.email}
					onChange={handleChange}
					placeholder="user@gmail.com"
					required
					className="input"
				/>
        <label>Password</label>
				<input
					type="password"
					name="password"
					value={userData.password}
					onChange={handleChange}
					required
				/>
				<button type="submit">Sign Up</button>
			</form>
			 
    </div>
	
    );
}