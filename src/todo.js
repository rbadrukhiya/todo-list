import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Todolist() {

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [contact, setcontact] = useState('')
  const [add, setadd] = useState([])
  const [update, setupdate] = useState('')
  const formsubmit = () => {
    if(name =="" && email =="" && contact =="")
    {
      alert("Please Submit The Data...")
    }
    else if(update)
    {
      setadd(
        add.map((elem)=>{
          if(elem === update)
          {
            return{...elem,name:name , email:email , contact:contact}
          }
          return elem
        })
      )

    }
    else
    {
      
      var info = {
        name: name,
        email: email,
        contact: contact
      }
      setadd([...add, info])
    }
     }
     function addItems() {
      setname('')
      setemail('')
      setcontact('')
     }
  const deleteitems = (i) => {
    // alert()
    var n = add.filter((ele, ine) => { 
      return ine != i 
    }) 
    setadd(n)
    console.log(n)
  }
  const edititems = (i) => {
    // console.log(i)
    var c = add.find((ele,index) => {
      return index == i
    }) 
    console.log(c)
    
      setname(c.name)
      setemail(c.email)
      setcontact(c.contact)
      setupdate(c)
  }
  
  return (
    <>
      <div className="box mt-5">
        <div className="first-box d-flex justify-content-between align-items-center ">
          <span>Name : </span>
          <input type="text" placeholder='Add Data...' value={name} onChange={(w) => setname(w.target.value)} />
        </div>
        <div className="second-box mt-4 d-flex justify-content-between align-items-center">
          <span>Email : </span>
          <input type="text" placeholder='Add Data...' value={email} onChange={(w) => setemail(w.target.value)} />
        </div>
        <div className="third-box mt-4 mb-5 d-flex justify-content-between align-items-center ">
          <span>Contact : </span>
          <input type="text" placeholder='Add Data...' value={contact} onChange={(w) => setcontact(w.target.value)} />
        </div>
        <div className="submit ">
          <input type="button" className='me-4' value="Submit" onClick={formsubmit} />
          <input type="button" value="Add Data" onClick={addItems} />
        </div>
      </div>

      <table className='mt-5 ms-5'>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th colSpan={2}>Edit / Delete</th>
        </tr>

        {
          add.map((items, index) => {
            return (
              <tr key={index}>
                <td> {items.name} </td>
                <td> {items.email} </td>
                <td> {items.contact} </td>
                <td><input type="button" className='edit' value="Edit Data" onClick={() => edititems(index)} /></td>
                <td><input type="button" className='delete' value="Delete Data" onClick={() => deleteitems(index)} /></td>
              </tr>
            )
          })
        }

      </table>

      

    </>
  );
}

export default Todolist;
