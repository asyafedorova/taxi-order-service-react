import React, {useState, useEffect} from 'react'
import styles from './Users.module.css'
import User from "./User";
import {getAllUsers} from "../../../services/AdminService/UserService";

export default function Users(){
    const [users, setUsers] = useState([{
        id: 1,
        name: "Elena",
        email: "email@gmail.com",
        phoneNumber:"12345678"
        },{
        id: 2,
        name: "Anna",
        email: "email@gmail.com",
        phoneNumber:"12345678"
        }]
    );
    useEffect(() => {
        async function fetchData() {
            const res = await getAllUsers();
            setUsers(res);
        }
        fetchData();
    }, []);

    const allUsers = users.map((user, key) => {
        return (
            <User key={key}
                  id={user.id}
                  name={user.name}
                  email={user.email}
                  phoneNumber={user.phoneNumber}
                  path={`/users/${user.id}`}
            />
        );
    })
    return (
        <div className={styles.Users}>
            <h1>Users page</h1>
            <div>{allUsers}</div>
        </div>);
}