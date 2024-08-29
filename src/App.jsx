import { useState } from 'react'
import './App.css'
import Form from './Form'
import { nanoid } from 'nanoid'
import Items from './Items'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// const getLocalStorage = () =>{
//   let list = localStorage.getItem('items');
//   if(list){
//     list = JSON.parse(localStorage.getItem('items'));
//   }else{
//     list = [];
//   }
//   return list;
  
// }
const defaultList = JSON.parse(localStorage.getItem('items')) || [];

const setLocalStorage = (items)=>{
  localStorage.setItem('items', JSON.stringify(items));
  // console.log(items)

}
function App() {
  const [items, setItems] = useState(defaultList);

  const addItems =(itemName) =>{
    const newItems = {
      name: itemName,
      isCompleted: false,
      id: nanoid(),
    }

    const newItem= [...items, newItems];
    setItems(newItem)
    setLocalStorage(newItem);
    toast.success('Items added successfully to The List');

  }

  const removeItem = (itemId) => {
    const newItems = items.filter((item)=>item.id !== itemId)
    // console.log(itemId)
    setItems(newItems)
    setLocalStorage(newItems);
    toast.error('Items Removed successfully to The List');
    

  }

  const editItem = (itemId)=>{
    const newItems = items.map((item)=>{
      if(item.id === itemId){
        const newItem = {...item, isCompleted:!item.isCompleted }
        return newItem;
      }
      return item;
    })
    setItems(newItems)
  setLocalStorage(newItems);
  }
  return (
    <section className='section-center'>
      <ToastContainer position='top-right'/>  {/* toast notifications */}
      <Form  addItems={addItems}/>
      <Items items={items} removeItem={removeItem} editItem={editItem}/>
   
    </section>
  )
}

export default App
