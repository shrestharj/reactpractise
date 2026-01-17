import { useState } from "react";
import './style.css'

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "user",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        // setFormData({...formData,[name]:value})
        setFormData((dscsdasd) => ({ ...dscsdasd, [name]: value, }));
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     fetch("https://enterprise-admin-backend.onrender.com/api/auth/register", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(formData)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.success) {
    //                 setFormData({
    //                     name: "",
    //                     email: "",
    //                     password: "",
    //                     role: "user",
    //                 })
    //             }
    //         }
    //         )
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(
                "https://enterprise-admin-backend.onrender.com/api/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await res.json();

            console.log(res.ok)

            if (!res.ok) {
                throw new Error(data.message || "Registration failed");
            }

            if (data.success) {
                setFormData({
                    name: "",
                    email: "",
                    password: "",
                    role: "user",
                });
            }

            console.log("Response:", data);
        } catch (error) {
            console.error("Error:", error.message);
        }
    };






    return (
        <form onSubmit={handleSubmit} style={{ width: "300px" }}>
            {/* Name */}
            <div>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Email */}
            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Password */}
            <div>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Role */}
            <div>
                <label>Role</label>
                <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                </select>
            </div>

            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
