import React, { useState } from "react"
import UserList from "./userList"
const UsersPage = () => {
    const [users, setUsers] = useState([
        { name: "Jane Doe", id: "123456", image: "./assets/selfie1.png" },
        { name: "John Smith", id: "147258", image: "./assets/selfie2.png" }
    ])
    return(
        <div>
            <UserList users={users} />
        </div>
    )
}

export default UsersPage