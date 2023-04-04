import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBar from '../components/SideBar'
import appointmentservice from '../services/appointmentservice'

function BilledAppointments() {
  const [data, setdata] = useState([])
  const token = sessionStorage.getItem('token')
  const navigate = useNavigate()
  const loadData = () => {
    console.log('Token ', token)
    appointmentservice.allAppointments().then((resp) => {
      setdata(resp.data)
      console.log(data)
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
              Billed Appointments
            </h4>
            <table className='table table-sm table-light table-striped table-hover' border="1">
              <thead border="1">
                <tr border="1">
                  <th border="1">Id</th>
                  <th border="1">Patient Name</th>
                  <th border="1">Doctor Name</th>
                  <th border="1">Date & Time</th>
                  <th border="1">Remarks</th>
                  <th border="1">Status</th>
                  <th border="1">Action</th>
                </tr>
              </thead>
              <tbody border="1">
                {data
                  .filter((x) => x.status == 'Billed' || x.status == 'Paid')
                  .map((x) => (
                    <tr key={x.appointmentid} border="1">
                      <td border="1">{x.appointmentid}</td>
                      <td border="1">{x.patient.name}</td>
                      <td border="1">{x.doctor.name}</td>
                      <td border="1">
                        {x.date} {x.time}
                      </td>
                      <td border="1">{x.remarks}</td>
                      <td border="1">{x.status}</td>
                      <td border="1">
                        {x.status === 'Billed' ? (
                          <button
                            onClick={(e) =>
                              navigate('/createbill/' + x.appointmentid)
                            }
                            className='btn btn-primary btn-sm'
                          >
                            Create Bill
                          </button>
                        ) : (
                          <button
                            onClick={(e) =>
                              navigate('/viewbill/' + x.appointmentid)
                            }
                            className='btn btn-success btn-sm'
                          >
                            View Bill
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

export default BilledAppointments
