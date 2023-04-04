import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBar from '../components/SideBar'
import appointmentservice from '../services/appointmentservice'
import doctorservice from '../services/doctorservice'

function BookAppointment() {
  const navigate = useNavigate()
  const [doctors, setdoctors] = useState([])
  const [docid, setdocid] = useState()
  const [date, setdate] = useState()
  const [time, settime] = useState()
  const [remarks, setremarks] = useState()
  const handleSubmit = (e) => {
    e.preventDefault()
    appointmentservice
      .saveAppointment({
        doctorid: docid,
        patientid: sessionStorage.getItem('id'),
        date,
        time,
        remarks,
      })
      .then((resp) => {
        if(resp.data.status==="error"){
          alert(resp.data.error)
        }else{
        alert(resp.data.data)
        navigate('/myappointments')
        }
      })
      .catch((err) => alert(err.error))
  }
  useEffect(() => {
    doctorservice.getDoctors().then((resp) => setdoctors(resp.data.data))
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
          <div className='col-sm-9'>
            <div className='card shadow mx-auto mt-3'>
              <div className='card-body'>
                <h4 className='text-center p-2'>Book Appointment</h4>
                <form onSubmit={handleSubmit}>
                  <div className='row'>
                    <div className='col-sm-6 mx-auto'>
                      <div className='form-group form-row'>
                        <label className='col-sm-4 col-form-label'>
                          Doctor
                        </label>
                        <div className='col-sm-8'>
                          <select
                            name='docid'
                            required
                            value={docid}
                            onChange={(e) => setdocid(e.target.value)}
                            className='form-control'
                          >
                            <option value> -- Select Doctor -- </option>
                            {doctors?.map((x) => (
                              <option value={x.id}>{x.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className='form-group form-row'>
                        <label className='col-sm-4 col-form-label'>Date</label>
                        <div className='col-sm-8'>
                          <input
                            type='date'
                            name='date'
                            value={date}
                            onChange={(e) => setdate(e.target.value)}
                            required
                            className='form-control'
                          />
                        </div>
                      </div>
                      <div className='form-group form-row'>
                        <label className='col-sm-4 col-form-label'>Time</label>
                        <div className='col-sm-8'>
                          <input
                            type='time'
                            name='time'
                            required
                            value={time}
                            onChange={(e) => settime(e.target.value)}
                            className='form-control'
                          />
                        </div>
                      </div>
                      <div className='form-group form-row'>
                        <label className='col-sm-4 col-form-label'>
                          Remarks
                        </label>
                        <div className='col-sm-8'>
                          <input
                            type='text'
                            name='remarks'
                            required
                            value={remarks}
                            onChange={(e) => setremarks(e.target.value)}
                            className='form-control'
                          />
                        </div>
                      </div>
                      <button className='btn btn-primary float-right'>
                        Book Now
                      </button>
                    </div>
                  </div>
                </form>
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
export default BookAppointment
