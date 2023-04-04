import { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import doctorservice from '../services/doctorservice'
import patientservice from '../services/patientservice'

function UserHome() {
  const cid = sessionStorage.getItem('id')
  const [empInfo, setempInfo] = useState()
  const role = sessionStorage.getItem('role')
  useEffect(() => {
    if (role === 'Doctor') {
      doctorservice
        .getDoctorDetails(cid)
        .then((resp) => {
          console.log('Info', resp.data)
          setempInfo(resp.data.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    if (role === 'Patient') {
      patientservice
        .getPatientDetails(cid)
        .then((resp) => {
          console.log('Info', resp.data.data)
          setempInfo(resp.data.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
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
          <div className='col-sm-6 p-3'>
            <div className='card shadow'>
              <div className='card-header'>
                <h5>View Details</h5>
              </div>
              <div className='card-body'>
                <table className='table table-borderless' border="1">
                  <tbody border="1">
                    <tr border="1">
                      <th border="1">Name</th>
                      <th border="1">{empInfo?.name}</th>
                    </tr>
                    <tr border="1">
                      <th border="1">Address</th>
                      <th border="1">{empInfo?.address}</th>
                    </tr>
                    <tr border="1">
                      <th border="1">Age</th>
                      <th border="1">{empInfo?.age} years</th>
                    </tr>
                    <tr border="1">
                      <th border="1">Phone</th>
                      <th border="1">{empInfo?.phone}</th>
                    </tr>
                    <tr border="1">
                      <th border="1">Membership</th>
                      <th border="1">{empInfo?.member ? 'Active':'Inactive'}</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
        <br/>
        <br/>
    </>
  )
}

export default UserHome
