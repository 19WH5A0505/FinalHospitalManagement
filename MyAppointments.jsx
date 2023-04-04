import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBar from '../components/SideBar'
import appointmentservice from '../services/appointmentservice'

function MyAppointments() {
  const [data, setdata] = useState([])
  const token = sessionStorage.getItem('token')
  const patid = sessionStorage.getItem('id')
  const navigate = useNavigate()
  const loadData = () => {
    console.log('Token ', token)
    appointmentservice.patientAppointments(patid).then((resp) => {
      setdata(resp.data)
      console.log(data)
    })
  }

  const handleCancel = (id) => {
    appointmentservice
      .updateAppointment({
        appointmentid: id,
        status: 'Cancelled',
        cancelby: 'Patient',
      })
      .then((resp) => {
        alert(resp.data)
        loadData()
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
              Patient Appointments
            </h4>
            <table className='table table-sm table-light table-striped table-hover' border="1">
              <thead border="1">
                <tr border="1">
                  <th border="1">Id</th>
                  <th border="1">Doctor Name</th>
                  <th border="1">Date & Time</th>
                  <th border="1">Remarks</th>
                  <th border="1">Status</th>
                  <th border="1">Details</th>
                </tr>
              </thead>
              <tbody border="1">
                {data.map((x) => (
                  <tr key={x.appointmentid} border="1">
                    <td border="1">{x.appointmentid}</td>
                    <td border="1">{x.doctor.name}</td>
                    <td border="1">
                      {x.date} {x.time}
                    </td>
                    <td border="1">{x.remarks}</td>
                    <td border="1">
                      {x.status}{' '}
                      {x.status == 'Cancelled' ? 'by ' + x.cancelBy : null}
                    </td>
                    <td border="1">
                      {x.status == 'Booked' ? (
                        <button
                          onClick={(e) => handleCancel(x.appointmentid)}
                          className='btn btn-outline-danger btn-sm mr-2'
                        >
                          Cancel
                        </button>
                      ) : null}
                      {x.status === 'Paid' ? (
                        <button
                          onClick={(e) =>
                            navigate('/viewbill/' + x.appointmentid)
                          }
                          className='btn btn-success btn-sm'
                        >
                          View Details
                        </button>
                      ) : null}
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

export default MyAppointments
