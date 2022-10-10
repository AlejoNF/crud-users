import React from 'react'
import '../assets/styles/userCard.css'

const UserCard = ({user, deleteUserById, setUpdateInfo, setFormIsClose}) => {

  const handleEdit = () => {
      setUpdateInfo(user)
      setFormIsClose(false)

  }

  const handleDelete = () => {
    deleteUserById(user.id)
  }
    
  return (
   <article className='user'>
    <h2 className='user__name'>{`${user.first_name} ${user.last_name}`}</h2>
    <ul className='user__list'>
    <li className='user__item'><span className='user__span'>Email:</span> {user.email}</li>
    <li className='user__item'><span className='user__span'>Birthday:</span>
    <div className='user__item--container'><i className="fa-sharp fa-solid fa-gift"> &nbsp;</i>{user.birthday}</div>
    </li>
    </ul>
    <footer className='user__footer' >
      <button onClick={handleDelete} className='user__btn'>
        <i   className="user__trash fa-solid fa-trash"></i>
      </button>
      <button onClick={handleEdit} className='user__btn'>
        <i  className="user__edit fa-solid fa-pencil"></i>
      </button>
        
    </footer>
   </article>
  )
}

export default UserCard