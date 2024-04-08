import React,{useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';
import './seedevicelocation.css'
import axios from 'axios';


export default function Seedevice() {
  const [locations,setLocations] = useState([])
  const [devices,setDevice] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3001/seelocationdata')
    .then(result => setLocations(result.data))
    .catch(err =>console.log(err))
  },[])

  useEffect(()=>{
    axios.get('http://localhost:3001/seeDevicedata')
    .then(result => setDevice(result.data))
    .catch(err => console.log(err))
  },[])

  const handleLocationDelete = (id)=>{
    axios.delete('http://localhost:3001/deleteLocation/'+id)
    .then(res => {console.log(res)
    window.location.reload()})
    .catch(err => console.log(err))
  }

  const handleDeviceDelete = (id)=>{
    axios.delete('http://localhost:3001/deleteDevice/'+id)
    .then(res => {console.log(res)
    window.location.reload()})
    .catch(err => console.log(err))
  }

  return (
    <>
    <h1>Location Data</h1>
    <div className='locationstable'>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Multiple Associate Device</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          locations.map((location)=>{
            console.log("data",location)
            return <tr>
              <td>{location.Name}</td>
              <td>{location.Address}</td>
              <td>{location.Phone}</td>
              <td>{location.Device}</td>
              <td><button onClick={(e)=> handleLocationDelete(location._id)}>Delete</button></td>
            </tr>
          })
        }
      </tbody>
    </Table>
    </div>
      <br/><br/>
    <h1>Device Data</h1>
    <div className='locationstable'>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Serial Number</th>
          <th>Type</th>
          <th>Image</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          devices.map((device)=>{
            console.log("data",device.image)
            return <tr>
              <td>{device.serialnumber}</td>
              <td>{device.type}</td>
              <td><img src={`../../../server/${device.image}`} alt='Device'/></td>
              <td>{device.status}</td>
              <td><button onClick={(e)=> handleDeviceDelete(device._id)}>Delete</button></td>
            </tr>
          })
        }
      </tbody>
    </Table>
    </div>
    </>
  )
}
