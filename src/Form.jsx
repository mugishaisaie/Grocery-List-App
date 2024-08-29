import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

     
      function Form({addItems}) {

    const [newItem, setNewItem] = useState('');

    const handleSubmit = (e)=>{
         e.preventDefault();
        if(!newItem){
            toast.error('Please enter an item!');
            return;
 
        }
        addItems(newItem);
        setNewItem('');
    }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Glocery List</h4>
      <div className="form-control">
        <input type="text" className='form-input' value={newItem} onChange={(e)=>setNewItem(e.target.value)} />
        <button type="submit" className='btn'>Add Item</button>
      </div>
    </form>
  )
}

export default Form
