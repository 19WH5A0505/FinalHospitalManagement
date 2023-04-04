import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import doctorservice from '../services/doctorservice'

function Doctors() {
  const [Doctors, setDoctors] = useState([])
  const token = sessionStorage.getItem('token')

  const loadData = () => {
    console.log('Token ', token)
    doctorservice.getDoctors().then((resp) => {
      setDoctors(resp.data.data)
      console.log(Doctors)
    })
  }
  const handleDelete = (id) => {
    let result = window.confirm('Are you sure to delete this record ?')
    if (result) {
      doctorservice
        .deleteDoctor(id)
        .then((resp) => {
          alert(resp.data.data)
          console.log(resp.data)
          loadData()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
  useEffect(() => {
    loadData()
  }, [])
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12'>
            <Link
              to='/adddoctor'
              className='float-right btn btn-sm btn-primary m-2'
            >
              Add New
            </Link>
            <h4 className='text-left p-2 border-bottom border-success'>
              List of Doctors
            </h4>
            <table className='table table-sm table-light table-striped table-hover' border="1">
              <thead border="1">
                <tr border="1">
                  <th border="1">Id</th>
                  <th border="1">Doctor Name</th>
                  <th border="1">Address</th>
                  <th border="1">Qualification</th>
                  <th border="1">Phone</th>
                  <th border="1">Speciality</th>
                  <th border="1">Gender</th>
                  <th border="1">Availablity Days</th>
                  <th border="1">Availablity Time</th>
                  <th border="1">Action</th>
                </tr>
              </thead>
              <tbody border="1">
                {Doctors.map((x) => (
                  <tr key={x.id} border="1">
                    <td border="1">{x.id}</td>
                    <td border="1">{x.name}</td>
                    <td border="1">{x.address}</td>
                    <td border="1">{x.qualification}</td>
                    <td border="1">{x.phone}</td>
                    <td border="1">{x.speciality}</td>
                    <td border="1">{x.gender}</td>
                    <td border="1">{x.availableDays}</td>
                    <td border="1">{x.fromTime} - {x.toTime}</td>
                    <td border="1">
                      <button
                        onClick={(e) =>
                          (window.location.href = '/doctors/' + x.id)
                        }
                        className='btn btn-primary mr-2 btn-sm'
                      >
                        Edit
                      </button>
                      <button
                        onClick={(e) => handleDelete(x.id)}
                        className='btn btn-danger btn-sm'
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Doctors
