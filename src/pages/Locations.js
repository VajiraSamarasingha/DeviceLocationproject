import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './devicestyle.css'
import axios from 'axios'

export default function Locations() {
  const [name,setName] = useState()
  const [address,setAddress] = useState()
  const [phone,setPhone] = useState()
  const [device,setDevice] = useState()

  const Submit = (e)=>{
    e.preventDefault();

    console.log('Name :',name)
    console.log('Address :',address)
    console.log('Phone :',phone)
    console.log('Device :',device)

    const lk = axios.post('http://localhost:3001/createLocation',{name,address,phone,device})
    console.log(lk)

    
  }
  const handleDeviceChange = (e) => {
    setDevice(e.target.value);
    console.log("Selected Device:", e.target.value)
  }

  return (
    <div className='formBox'>
      <Form onSubmit={Submit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" 
        onChange={(e)=>setName(e.target.value)}/>  
      </Form.Group> 
      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Address" 
        onChange={(e)=>setAddress(e.target.value)}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Phone Number" 
        onChange={(e)=>setPhone(e.target.value)}/>      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicType">
        <Form.Label>Multiple Associate Device</Form.Label>
        <Form.Select aria-label="Default select example" onChange={handleDeviceChange}>
          <option value="pos">Tab</option>
          <option value="kisok">Laptop</option>
          <option value="signage">Smart Phone</option>
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
