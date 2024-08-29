import React, { useState } from 'react'

const SingleItem = ({item,removeItem, editItem}) => {
//    const [isChecked, setIsChecked] = useState(item.completed);
console.log(item.isCompleted);
  return (
    <div className='single-item'>
        <input type="checkbox" checked={item.isCompleted} onChange={()=>editItem(item.id)} />
        <p style={{textTransform: 'capitalize', textDecoration : item.isCompleted &&'line-through'}}>{item.name}</p>
        <button type='button' className='btn remove-btn' onClick={()=>removeItem(item.id)}>delete</button>
      
    </div>
  )
}

export default SingleItem
