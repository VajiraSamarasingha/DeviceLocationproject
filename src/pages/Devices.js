import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './devicestyle.css'
import axios from 'axios';

export default function Devices() {

  const [serialNumber,setSerialnumber] = useState()
  const [type,setType] = useState()
  const [image,setImage] = useState()
  const [status,setStatus] = useState()

  const Submit = (e)=>{
    e.preventDefault();
    const formData = new FormData()
    formData.append('file',image)
    axios.post('http://localhost:3001/imagepost',formData)
    .then(res => {})
    .catch(err => console.log(err))
    const devices = axios.post('http://localhost:3001/createDevice',{serialNumber,type,status})
    
    console.log(devices)
    
  }
    
  return (
    <div className='formBox'>
      <Form onSubmit={Submit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Serial Number</Form.Label>
        <Form.Control type="text" placeholder="Serial Number" 
        onChange={(e)=>setSerialnumber(e.target.value)}/>  
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicType">
        <Form.Label>Type</Form.Label>
        <Form.Select aria-label="Default select example" onChange={(e)=>setType(e.target.value)}>
          <option>Open this select menu</option>
          <option value="pos">pos</option>
          <option value="kisok">kisok</option>
          <option value="signage">signage</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicImage">
        <Form.Label>Image</Form.Label>
        <Form.Group controlId="formFile" className="mb-3">
        <Form.Control type="file" onChange={(e)=>setImage(e.target.files[0])}/>
      </Form.Group>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicType">
        <Form.Label>Status</Form.Label>
        <Form.Select aria-label="Default select example" onChange={(e)=>setStatus(e.target.value)}>
          <option value="choseStatus">Chose Status</option>
          <option value="active">Active</option>
          <option value="inactive">InActive</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}
