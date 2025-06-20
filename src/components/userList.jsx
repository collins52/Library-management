import './userList.css';
import Button from './button'
const UserList = ({users = []}) =>{
    return(
        <div>
            <ul className=''>
                {users.map((user) => (
                    <li key={user.id} className='listItem'>
                        <div className='userInfo'>
                            <span>{user.name}</span>
                            <span>{user.id}</span>
                        </div>

                        <div className='buttons'>
                            <Button label={'Edit'} className={'edit-delete edit'}/>
                            <Button label={'Delete'} className={'edit-delete'}/>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default UserList