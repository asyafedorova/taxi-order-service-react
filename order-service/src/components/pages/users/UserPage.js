import {useHistory, useParams} from "react-router-dom";
import styles from "./UserPage.module.css";
import {useEffect, useState} from "react";
import {deleteUser, getUserById} from "../../../services/AdminService/UserService";

export default function UserPage() {
    const [user, setUser] = useState(0);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {(
        async () => {
            const res = await getUserById(id);
            setUser(res);
        })()
    });

    const deleteUserByAdmin = () => {
        (async () => {
            const res = await deleteUser(id)
            console.log(res)
            if(res) {
                history.push("/users");
            }
        })()
    }

    return(
        <div className={styles.UserPage}>
            <h1>Page of user №{user.id} with name {user.name} </h1>
            <button className="btn btn-lg btn-primary" onClick={() => deleteUserByAdmin()}>Delete user</button>
        </div>
    );
}