import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBar from '../components/SideBar'
import appointmentservice from '../services/appointmentservice'

function Appointments() {
  const [data, setdata] = useState([])
  const token = sessionStorage.getItem('token')
  const docid = sessionStorage.getItem('id')
  const navigate = useNavigate()
  const loadData = () => {
    console.log('Token ', token)
    appointmentservice.doctorAppointments(docid).then((resp) => {
      setdata(resp.data)
      console.log(data)
    })
  }

  const handleCancel = (id) => {
    appointmentservice
      .updateAppointment({
        appointmentid: id,
        status: 'Cancelled',
        cancelby: 'Doctor',
      })
      .then((resp) => {
        alert(resp.data)
        loadData()
      })
  }

  const handleAccept = (id) => {
    appointmentservice
      .updateAppointment({
        appointmentid: id,
        status: 'Accepted',
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
              Doctor Appointments
            </h4>
            <table className='table table-sm table-light table-striped table-hover' border="1">
              <thead border="1">
                <tr border="1">
                  <th border="1">Id</th>
                  <th border="1">Doctor Name</th>
                  <th border="1">Date & Time</th>
                  <th border="1">Remarks</th>
                  <th border="1">Status</th>
                  <th border="1">Action</th>
                </tr>
              </thead>
              <tbody border="1">
                {data
                  .filter(
                    (x) => x.status != 'Cancelled' && x.status != 'Billed'
                  )
                  .map((x) => (
                    <tr key={x.appointmentid} border="1">
                      <td border="1">{x.appointmentid}</td>
                      <td border="1">{x.doctor.name}</td>
                      <td border="1">
                        {x.date} {x.time}
                      </td>
                      <td border="1">{x.remarks}</td>
                      <td border="1">{x.status}</td>
                      <td border="1">
                        {x.status == 'Booked' ? (
                          <>
                            <button
                              onClick={(e) => handleAccept(x.appointmentid)}
                              className='btn btn-success btn-sm mr-2'
                            >
                              Accept
                            </button>
                            <button
                              onClick={(e) => handleCancel(x.appointmentid)}
                              className='btn btn-outline-danger btn-sm mr-2'
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <button
                            onClick={(e) =>
                              navigate('/treatment/' + x.appointmentid)
                            }
                            className='btn btn-primary btn-sm'
                          >
                            Details
                          </button>
                        )}
                      </td>
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

export default Appointments
