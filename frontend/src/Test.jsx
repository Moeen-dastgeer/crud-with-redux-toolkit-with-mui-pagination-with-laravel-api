import { Delete } from '@mui/icons-material'
import { Edit } from '@mui/icons-material'
import { Button, ButtonGroup, Checkbox, Radio, Select,MenuItem,TextField,Switch, Typography} from '@mui/material'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import React, { useState } from 'react'

export const Test = () => {
const [gender,setGender] = useState("male");
const [course,setCourse] = useState("");
    const check = (e)=>{
        alert(e.target.value);
    }

    const handleGender = (e)=>{
        setGender(e.target.value);
    }

    const handleSelect = (e) =>{
        setCourse(e.target.value);
        alert(e.target.value);
    }
  return (
    <>
    <Button>Click me</Button>
    <Button color="error">Click me</Button>
    <Button color="secondary">Click me</Button><br />
    <Button variant='outlined'>Click me</Button>
    <Button color="error" variant='outlined'>Click me</Button>
    <Button color="secondary" variant='outlined'>Click me</Button><br />
    <Button variant='contained'>Click me</Button>
    <Button color="error" variant='contained'>Click me</Button>
    <Button color="secondary" variant='contained'>Click me</Button><br />
    <Button variant='text'>Click me</Button>
    <Button color="error" variant='text'>Click me</Button>
    <Button color="secondary" variant='text'>Click me</Button><br />
    <Button variant='contained' size='small'>Click me</Button>
    <Button color="error" variant='contained' size='medium'>Click me</Button>
    <Button color="secondary" variant='contained' size='large'>Click me</Button><br />
    <Button variant='outlined' color='error' startIcon={<Delete />}>Delete</Button>
    <Button variant='outlined' color='error' endIcon={<Edit />}>Edit</Button><br />
    <ButtonGroup variant='contained'>
        <Button>Click me</Button>
        <Button>Click me</Button>
        <Button>Click me</Button>
    </ButtonGroup><br />
    <ButtonGroup variant='outlined'>
        <Button>Click me</Button>
        <Button>Click me</Button>
        <Button>Click me</Button>
    </ButtonGroup><br />
    <ButtonGroup variant='text'>
        <Button>Click me</Button>
        <Button>Click me</Button>
        <Button>Click me</Button>
    </ButtonGroup><br />
    <ButtonGroup variant='contained' orientation='vertical'>
        <Button>Click me</Button>
        <Button>Click me</Button>
        <Button>Click me</Button>
    </ButtonGroup><br />
    <Checkbox />
    <Checkbox color='default' />
    <Checkbox color='error' value="Moeen" onChange={(e)=>{check(e)}} />
    <Checkbox color='secondary' icon={<FavoriteBorder />} checkedIcon={<Favorite />}  /><br />
    <span>Male</span> <Radio value="male" onChange={ (e)=>{handleGender(e)} } checked={gender==='male'} />
    <span>Female</span> <Radio value="female" color="error" onChange={ (e)=>{handleGender(e)}} checked={gender==='female'}/><br />
        <Select value={course} displayEmpty onChange={(e)=>{handleSelect(e)}}>
          <MenuItem value="">Select</MenuItem>
          <MenuItem value={"HTML"}>HTML</MenuItem>
          <MenuItem value={"CSS"}>CSS</MenuItem>
          <MenuItem value={"JAVASCRIPT"}>JAVASCRIPT</MenuItem>
        </Select><br />
        <TextField label="Small"  size="small"/><br />
        <TextField label="Medium" /><br />
        <TextField label="Large"  size="large"/><br />
        <TextField label="Small" variant='outlined'  size="small"/><br />
        <TextField label="Medium" variant='filled' /><br />
        <TextField error label="Large" variant='standard'  size="small"  helperText="Incorrect entry." type="text"/><br />
        <TextField error label="Large" variant='standard'  size="medium"  helperText="Incorrect entry."/><br />
        <TextField error label="Large" variant='standard'  size="large"  helperText="Incorrect entry." type="password"/><br />
        <Switch color="error" size='small'/>
        <Switch color="default"/>
        <Switch color="secondary" size='large'/><br />
        <Typography variant='h1'>This is 1 Heading</Typography>
        <Typography variant='h2'>This is 2 Heading</Typography>
        <Typography variant='h3' align='center'>This is 3 Heading</Typography>
        <Typography variant='h4' align='right'>This is 4 Heading</Typography>
        <Typography variant='h5'>This is 5 Heading</Typography>
        <Typography variant='h6'>This is 6 Heading</Typography><bt />
    </>
  )
}
