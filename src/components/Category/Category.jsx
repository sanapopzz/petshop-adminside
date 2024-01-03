import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const[ca,setCa]=useState('');   
  const[error,setError]=useState(false);
  const navigate=useNavigate()

  const readcategory =(event) =>{
    event.preventDefault();
    console.log(event.target.value);
    setCa(event.target.value);
}
const checkfilldata =(event) =>{
  event.preventDefault();
  if(ca.trim ()==='')
  {
      setError(true);
      return;
  }
  else{
      navigate("/s");
      // props.checkLogin(un,pwd);
  }

}

  return (
    <div>
      <h3>Category</h3>
        <TextField label="Category Name" name="Ctgname" variant="outlined" onChange={readcategory}/><br/><br/>
        <Button variant="contained" onClick={checkfilldata} >Submit</Button>
        {error&&'error occured'}
    </div>
  )
}

export default Category