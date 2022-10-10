import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'

const baseURL = 'https://users-crud1.herokuapp.com'

function App() {
  
  const [users, setUsers] = useState()

  //Vamos a enviar data desde UserCard hacia FormUsers
  const [updateInfo, setUpdateInfo] = useState()
  
  const [formIsClose, setFormIsClose] = useState(true)

  

  // Obtenemos la info de todos los users
  const getAllUsers = () => {
    
    const URL = `${baseURL}/users/`
    axios.get(URL)
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
  }
  
  useEffect(() => {
    getAllUsers()
  },[])
  
  //Creamos un nuevo usuario 
  const createNewUser = data => {
    const URL = `${baseURL}/users/`
    axios.post(URL, data)
    .then(res =>{
      console.log(res.data)
      getAllUsers()
    } )
    .catch(err => console.log(err))
  }
  

  //Funcionalidad eliminar un usuario especifico

  const deleteUserById = id => {
    const URL = `${baseURL}/users/${id}/`
    axios.delete(URL)
    .then(res => {
      console.log(res.data)
      getAllUsers()
      })
    .catch(err => console.log(err))
  }

  //Funcionalidad editar un usuario especifico

  const updateUserById = (id,data) => {
    const URL = `${baseURL}/users/${id}/`
    axios.patch(URL,data)
    .then(res => {
      console.log(res.data)
      getAllUsers()
    })
    .catch(err => console.log(err))
  }
  
  const handleOpenForm = () => {
    setFormIsClose(false)
    setUpdateInfo()
  }
  

  return (
    <div className="App">
      <div className='App__container-title'>
         <h1 className='App__title'>CRUD usuarios</h1>
        <button onClick={handleOpenForm} className='App__btn'>Create a new user</button>  
      </div>
    
     <div className={`form-container ${formIsClose && 'disable__form'}`}>
      <FormUsers
     createNewUser = {createNewUser}
     updateInfo = {updateInfo}
     updateUserById={updateUserById}
     setUpdateInfo = {setUpdateInfo}
     setFormIsClose = {setFormIsClose}
     />
     </div>
     
     <div className='users-container'>
     {
      users?.map(user => (
        <UserCard
          key = {user.id}
          user = {user}
          deleteUserById = {deleteUserById}
          setUpdateInfo = {setUpdateInfo}
          setFormIsClose = {setFormIsClose}

          />
      ))
      } 
     </div>
     
    </div>
  )
}

export default App
