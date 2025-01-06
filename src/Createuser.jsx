import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Createuser = () => {
    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [address, setAddress] = useState("");

    const submit = (e) => {
        e.preventDefault();
        axios.post('https://backendexpres.onrender.com/api/user/create',{name,email,address})
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    return (
        <form onSubmit={submit}>
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ textAlign: 'center', color: '#333' }}>Create User</h2>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor='name' style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Name</label>
                <input type='text'onChange={(e)=>setName(e.target.value)} id='name' style={{ width: '100%', padding: '10px', fontSize: '14px', borderRadius: '5px', border: '1px solid #ccc' }} />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor='email' style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Email</label>
                <input type='email'onChange={(e)=>setEmail(e.target.value)} id='email' style={{ width: '100%', padding: '10px', fontSize: '14px', borderRadius: '5px', border: '1px solid #ccc' }} />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor='address' style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Address</label>
                <input type='text' onChange={(e)=>setAddress(e.target.value)} id='address' style={{ width: '100%', padding: '10px', fontSize: '14px', borderRadius: '5px', border: '1px solid #ccc' }} />
            </div>
            <button style={{ width: '100%', padding: '10px', fontSize: '16px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>
                Submit
            </button>
        </div>
        </form>
    );
};

export default Createuser;
