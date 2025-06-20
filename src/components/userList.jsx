import './userList.css';
import Button from './button'
const UserList = ({users = []}) =>{
    return(
        <div>
            <ul className=''>
                {users.map((user) => (
                    <li key={user.id} className='listItem'>
                        <div className='userInfo'>
                            <div>
                                <img src={} alt="userImage" />
                                <span>{user.name}</span>
                            </div>
                            <span>{user.id}</span>
                        </div>

                        <div className='buttons'>
                            <div className='emptyDiv'>

                            </div>
                            <div className='buttonDiv'>
                                <Button label={'Edit'} className={'edit-delete edit'}/>
                                <Button label={'Delete'} className={'edit-delete'}/>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default UserList