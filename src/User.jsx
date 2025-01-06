import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './User.css'; 
import { useState } from 'react';
import axios from 'axios';

const User = () => {
    const [users, setUsers] = React.useState([])
    useEffect(() => {
        axios.get('https://backendexpres.onrender.com/api/user/fetch')
        .then((res) => {
            console.log(res.data);
            setUsers(res.data.users1)
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);
    const deleteUser = (id) => {
        axios.delete(`https://backendexpres.onrender.com/api/user/delete/${id}`)
        .then((res) => {
            console.log("User deleted successfully");
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className="container">
            <h1 className="header">USER</h1>
            <Link to="/create" className="link">Create User</Link>
            <br />
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((users1, index) => (
                        <tr key={index}>
                            <td>{users1.name}</td>
                            <td>{users1.email}</td>
                            <td>{users1.address}</td>
                            <td>
                                <Link to="/update" className="action-link">Update</Link>
                                <button onClick={(e) => deleteUser(users1._id)} className="button">delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default User;
