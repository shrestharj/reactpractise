import React, { useState } from 'react'

const Practice1 = () => {

    const [formData, setFormData] = useState({
        name: "",
        address: "",
        email: "",
        phone: ""
    })


    const [error, setError] = useState(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (value.trim() !== "") {
            setError((prev) => setError({ ...prev, [name]: '' }))
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {}

        if (formData.name.trim() == "") {
            data.name = "Name is required!";
        }
        if (formData.email.trim() == "") {
            data.email = "Eamil is required!";
        }
        if (formData.address.trim() == "") {
            data.address = "address is required!";
        }
        if (formData.phone.trim() == "") {
            data.phone = "phone is required!";
        }

        setError(data);
        console.log(data);

        if (Object.keys(data).length > 0) {
            return;
        }


        try {
            const response = await fetch("https://google.com/api/user", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                    token: ""
                },
                body: JSON.stringify(formData)
            })

            await response.json();

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleChange} />
                <p style={{ color: "red" }}>{error?.name}</p>
                <br />

                <input type="text" name="address" onChange={handleChange} />
                <p style={{ color: "red" }}>{error?.address}</p>
                <br />

                <input type="email" name="email" onChange={handleChange} />
                <p style={{ color: "red" }}>{error?.email}</p>
                <br />

                <input type="text" name="phone" onChange={handleChange} />
                <p style={{ color: "red" }}>{error?.phone}</p>
                <br />

                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default Practice1
