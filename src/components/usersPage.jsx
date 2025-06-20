import React, { useState } from "react"
import UserList from "./userList"
const UsersPage = () => {
    const [users, setUsers] = useState([
        { name: "Jane Doe", id: "123456" },
        { name: "John Smith", id: "147258" }
    ])
    return(
        <div>
            <UserList users={users} />
        </div>
    )
}

export default UsersPage