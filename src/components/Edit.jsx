import React,  {useState} from 'react'
import { Dialog } from 'primereact/dialog';


function Edit({selectedItem2, showDialog,title, setTitle,setStartValue,
    setReminder,setNote,  setTarget, data,setData,deleteBtn,setDelete, hideDialog2, list, setList, SetCount, Count, selectedItem, handleClick, setCountCheck,countCheck,setEditEnable}  ) {

    const [displayDialog, setDisplayDialog] = useState(false);

    // const [data, setData] = useState([]);
    // const [selectedItem, setSelectedItem] = useState(null);


// console.log(Count)   
    
   const EditItems = ()=> {
    setTitle(selectedItem2.title);
    setStartValue(selectedItem2.StartValue);
    setTarget(selectedItem2.Target);
    setReminder(selectedItem2.Reminder);
    setNote(selectedItem2.Note);
    showDialog()
    // setCountCheck(false)
    // handleClick()
    setEditEnable(true)
   }   
        
        const handleDelete = ()=>{
         setData(data.filter((items)=>
        {
          if(items===selectedItem2 && Count !==selectedItem.StartValue ){
            return false
          }else 
          return true
        }
        ))
        hideDialog2()
        }
        const handleContinue =  () => {
          setList(false)
          hideDialog2()
          SetCount(selectedItem2.StartValue)
          if(selectedItem2.StartValue===Count){
            setCountCheck(true)
          }else{
            setCountCheck(false)
          }
        }

  return (
    <div>
           <div > 
           <button onClick={EditItems} className='block'>Edit</button>
           <button onClick={handleDelete} className='block'>Delete</button>
           <button onClick={handleContinue}> Continue</button>
           </div>
          
            
        
    </div>
  )
}

export default Edit