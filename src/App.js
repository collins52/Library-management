import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Button from './components/button';
import Input from './components/input';
import Userspage from './components/usersPage';
function App() {
  return (
    <>
    <Header/>
    {/* <Button
    label='Manage Users'
    icon={<img src='./assets/edit.svg'/>} className = 'manageUserBtn'
    /> */}
    <Input placeholder='Name'/>
    <div id='listTitle'>
      <p>Readers Name</p>
      <p>Readers ID</p>
    </div>
    <Userspage />
    </>
  );
}

export default App;
