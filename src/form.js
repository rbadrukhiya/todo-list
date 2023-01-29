// import { useState } from 'react';

// function Todo() {

//     const [sub, setsubmit] = useState('submit')
//     const [name, setname] = useState('')
//     const [user, setuser] = useState('')
//     const [email, setemail] = useState('')
//     const [em, setem] = useState('')
//     const [city, setcity] = useState('')
//     const [cit, setcit] = useState('')
//     function submit() {
//         // alert(name)
//         setuser(name)
//         setem(email)
//         setcit(city)
//         name('')
//         email('')
//         city('')
//     }
//     return (
//         <>
//             <input type="text" placeholder='name' onChange={(e) => { setname(e.target.value) }} />
//             <input type="text" placeholder='email' onChange={(n) => { setemail(n.target.value) }} />
//             <input type="text" placeholder='city' onChange={(n) => { setcity(n.target.value) }} /><br />
//             <input type="button" value='submit' onClick={submit}></input>

//             <table border={1} align='center'>
//         <tr>
//           <td>name</td>
//           <td>email</td>
//           <td>city</td>
//         </tr>
//         <tr>
//           <td>{user}</td>
//           <td>{em}</td>
//           <td>{cit}</td>
//         </tr>



//       </table>

//         </>
//     )

// }
// export default Todo






import React, { useState } from "react";

const Todo = () => {
  const [get, setget] = useState("");
  const [item, setitem] = useState([]);
  const [eget, seteget] = useState("");
  const [eitem, seteitem] = useState([]);
  const [pget, setpget] = useState("");
  const [pitem, setpitem] = useState([]);

  const additem = () => {
    if (!get) {
      alert("name is Empty......!");
    } else {
      setitem([...item, get]);
      setget("");
    }
    // email
    if (!eget) {
      alert("email is Empty......!");
    } else {
      seteitem([...item, eget]);
      seteget("");
    }
    //   pass
    if (!pget) {
      alert("password is Empty......!");
    } else {
      setpitem([...item, pget]);
      setpget("");
    }
  };
  return (
    <>
      <div>
        <h1>To-Do List</h1>
        <table border={2}>
          <tr>
            <td>name:</td>
            <td>
              <input type="text" value={get} onChange={(e) => setget(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>email:</td>
            <td>
              <input type="text" value={eget} onChange={(e) => seteget(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>password:</td>
            <td>
              <input
                type="text"
                value={pget}
                onChange={(e) => setpget(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <input type="submit" onClick={additem} />
            </td>
          </tr>
          <tr>
            <td>name</td>
            <td>email</td>
            <td>password</td>
          </tr>
          <tr>
            <td>
              {item.map((ele, ind) => {
                return <p key={ind}>{ele}</p>;
              })}
            </td>
            {/* email */}
            <td>
              {eitem.map((ele, ind) => {
                return <p key={ind}>{ele}</p>;
              })}
            </td>
            {/* pass */}
            <td>
              {pitem.map((ele, ind) => {
                return <p key={ind}>{ele}</p>;
              })}
            </td>
          </tr>
        </table>
      </div>

    </>
  );
};

export default Todo;
