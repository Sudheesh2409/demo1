import React, { useState } from 'react';
import axios from "axios";

function App() {
    const [msg, setMsg] = useState("");

    const submit = async (e) => {
        e.preventDefault();
        alert("submitted");

        try {
            const response = await axios.post("http://localhost:4000/api/data/", { msg });
            console.log("sent data", response.data);
        } catch (error) {
            console.error("error", error);
        }

        /*
        // Using fetch instead of axios
        fetch('http://localhost:4000/api/data/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ msg }),
        })
        .then(response => response.json())
        .then(data => console.log("sent data", data))
        .catch(error => console.error("error", error));
        */
    }

    return (
        <div>
            <label>
                <input type="text" onChange={(e) => { setMsg(e.target.value) }} />
            </label>
            <button type="submit" onClick={submit}>Submit</button>
        </div>
    );
}

export default App;
