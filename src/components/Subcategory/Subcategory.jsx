import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'

const Subcategory = () => {
  return (
    <div>
      <h2>Subcategory</h2>
    <TextField label="Subcategory Name" name="Subctgname" variant="filled" />
    <InputLabel id="demo-simple-select-label"></InputLabel><br/><br/>
    <FormControl sx={{ m: 1, minWidth: 120 }}>
  <InputLabel id="demo-simple-select-label">Category</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"

    label="Category"
    
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl><br/><br/>
    <Button variant="contained" >Submit</Button>
    </div>
  )
}

export default Subcategory