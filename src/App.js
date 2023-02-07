import { useState } from "react";


function App() {

  const [userRegistration, setUserRegistration] = useState({
    email:"",
    password:""
  });

  const [records, setRecords] = useState([])
  
  const handleInput = (e) => {
    const name= e.target.name;
    const value=e.target.value;
    console.log(name, value);

    setUserRegistration({...userRegistration, [name] : value})
  }
  
 const handleSubmit = (e) => {
   e.preventDefault();
   const newRecord = {...userRegistration, id: new Date().getTime().toString()}
   setRecords([...records, newRecord]);
   console.log(records);

   setUserRegistration({email:"", password:""});
 }




  return (
    <div className="App">
       <div className='form1'>
        <form className='form2' onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" autoComplete='off' name="email" value={userRegistration.email} onChange={handleInput} className="form-control" id="exampleInputEmail1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" minLength="8" autoComplete='off' name="password" value={userRegistration.password} onChange={handleInput} className="form-control" id="exampleInputPassword1"/>
          </div>
          <button type="submit" className="btn btn-sm btn-primary">Submit</button>
        </form>
      </div>

      <div>
        {
          records.map((curEle)=>{
            return(
              <div className='records'>
                <p>{curEle.email}</p>
                <p>{curEle.password}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
