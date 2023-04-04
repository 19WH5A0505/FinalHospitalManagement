import { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import patientservice from '../services/patientservice'

function Patients() {
  const [Patients, setPatients] = useState([])
  const token = sessionStorage.getItem('token')

  const loadData = () => {
    console.log('Token ', token)
    patientservice.allPatients().then((resp) => {
      setPatients(resp.data.data)
      console.log(Patients)
    })
  }

  useEffect(() => {
    loadData()
  }, [])
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div
            className='col-sm-2 bg-transparent p-0 border-right border-primary'
            style={{ height: 'calc(100vh - 80px)' }}
          >
            <SideBar />
          </div>
          <div className='col-sm-10'>
            <h4 className='text-left p-2 border-bottom border-success'>
              List of Patients
            </h4>
            <table className='table table-sm table-light table-striped table-hover' border="1">
              <thead border="1">
                <tr border="1">
                  <th border="1">Id</th>
                  <th border="1">Patient Name</th>
                  <th border="1">Address</th>
                  <th border="1">Phone</th>
                  <th border="1">Gender</th>
                </tr>
              </thead>
              <tbody border="1">
                {Patients.map((x) => (
                  <tr key={x.id} border="1">
                    <td border="1">{x.id}</td>
                    <td border="1">{x.name}</td>
                    <td border="1">{x.address}</td>
                    <td border="1">{x.phone}</td>
                    <td border="1">{x.gender}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <br/>
        <br/>
        <br/>
    </>
  )
}

export default Patients
