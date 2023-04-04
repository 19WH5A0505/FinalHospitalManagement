import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SideBar from '../components/SideBar'
import billservice from '../services/billservice'
import treatmentservice from '../services/treatmentservice'

const CreateBill = () => {
  const { aptid } = useParams('aptid')
  const [treatment, settreatment] = useState({})
  const [bill, setbill] = useState({})
  const [total, settotal] = useState()
  const [net,setNet]=useState()
  const [discount,setDiscount]=useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    bill.appointmentid = aptid
    billservice
      .createBill(bill)
      .then((resp) => {
        alert(resp.data)
        navigate('/bills')
      })
      .catch((err) => alert(err.error))
  }

  const handleInput = (e) => {
    setbill({ ...bill, [e.target.name]: e.target.value })
  }

  const loadData = () => {
    treatmentservice
      .getTreatmentDetails(aptid)
      .then((resp) => settreatment(resp.data))
  }

  useEffect(() => {
    loadData()
  }, [])
  useEffect(() => {
    const ttotal=parseInt(bill.doctorcharges || 0) +
    parseInt(bill.prescriptioncharges || 0) +
    parseInt(bill.roomcharges || 0)
    const disc=treatment?.appointment?.patient?.member ? ttotal*.10:0
    setDiscount(treatment?.appointment?.patient?.member ? ttotal*.10:0)
    settotal(
      ttotal      
    )
    setNet(ttotal-disc)
  }, [bill])
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
                <h5 className='text-center p-2'>Create Patient Bill</h5>
                <div className='form-row'>
                  <div className='col-sm-6'>
                    <div className='card shadow'>
                      <div className='card-body p-2'>
                        <h6>Patient Details</h6>
                        <table className='table table-sm' border="1">
                          <tbody border="1">
                            <tr border="1">
                              <th border="1">Name</th>
                              <th border="1">{treatment?.appointment?.patient?.name}</th>
                              <th border="1">Address</th>
                              <th border="1">
                                {treatment?.appointment?.patient?.address}
                              </th>
                            </tr>
                            <tr border="1">
                              <th border="1">Gender</th>
                              <th border="1">{treatment?.appointment?.patient?.gender}</th>
                              <th border="1">Age</th>
                              <th border="1">
                                {treatment?.appointment?.patient?.age} years
                              </th>
                            </tr>
                            <tr border="1">
                              <th border="1">Phone No</th>
                              <th border="1">{treatment?.appointment?.patient?.phone}</th>
                              <th border="1">Is Member</th>
                              <th border="1">{treatment?.appointment?.patient?.member ? 'Yes':'No'}</th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className='card shadow'>
                      <div className='card-body p-2'>
                        <h6>Treatment Details</h6>
                        <table className='table table-sm' border="1">
                          <tbody border="1">
                            <tr border="1">
                              <th border="1">Doctor</th>
                              <th border="1">{treatment?.appointment?.doctor?.name}</th>
                            </tr>
                            <tr border="1">
                              <th border="1">Appointment Date</th>
                              <th border="1">{treatment?.appointment?.date}</th>
                            </tr>
                            <tr border="1">
                              <th border="1">Symptoms</th>
                              <th border="1">{treatment?.symptoms}</th>
                            </tr>
                            <tr border="1">
                              <th border="1">Diagnosis</th>
                              <th border="1">{treatment?.diagnosis}</th>
                            </tr>
                            <tr border="1">
                              <th border="1">Symptoms</th>
                              <th border="1">{treatment?.symptoms}</th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className='card shadow'>
                      <div className='card-body p-2'>
                        <h6>Prescription Details</h6>
                        {treatment?.prescriptions?.length > 0 ? (
                          <table className='table table-sm table-bordered' border="1">
                            <thead border="1">
                              <tr border="1">
                                <th border="1">Medicine</th>
                                <th border="1">Dosage</th>
                              </tr>
                            </thead>
                            <tbody border="1">
                              {treatment?.prescriptions.map((x) => (
                                <tr key={x.id} border="1">
                                  <td border="1">{x.medicine}</td>
                                  <td border="1">{x.dosage}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        ) : (
                          <h6 className='text-danger p-2'>
                            No Prescription Defined
                          </h6>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='card shadow'>
                      <div className='card-body p-2'>
                        <h6>Billing Details</h6>
                        <div className='form-group form-row'>
                          <label className='col-sm-4'>Doctor Charges</label>
                          <div className='col-sm-8'>
                            <input
                              type='text'
                              name='doctorcharges'
                              value={bill?.doctorcharges || ''}
                              placeholder='Doctor Charges'
                              onChange={handleInput}
                              className='form-control form-control-sm'
                            />
                          </div>
                        </div>
                        <div className='form-group form-row'>
                          <label className='col-sm-4'>Room Charges</label>
                          <div className='col-sm-8'>
                            <input
                              type='text'
                              name='roomcharges'
                              value={bill?.roomcharges || ''}
                              placeholder='Room Charges'
                              onChange={handleInput}
                              className='form-control form-control-sm'
                            />
                          </div>
                        </div>
                        <div className='form-group form-row'>
                          <label className='col-sm-4'>
                            Prescription Charges
                          </label>
                          <div className='col-sm-8'>
                            <input
                              type='text'
                              name='prescriptioncharges'
                              value={bill?.prescriptioncharges || ''}
                              placeholder='Prescription Charges'
                              onChange={handleInput}
                              className='form-control form-control-sm'
                            />
                          </div>
                        </div>
                        <div className='form-group form-row'>
                          <label className='col-sm-4'>Total Charges</label>
                          <div className='col-sm-8'>
                            <input
                              type='text'
                              value={total || ''}
                              disabled
                              className='form-control form-control-sm'
                            />
                          </div>
                        </div>
                        {treatment?.appointment?.patient?.member ? (
                          <>
                        <div className='form-group form-row'>
                          <label className='col-sm-4'>Membership Discount</label>
                          <div className='col-sm-8'>
                            <input
                              type='text'
                              value={discount}
                              disabled
                              className='form-control form-control-sm'
                            />
                          </div>
                        </div>
                        
                        <div className='form-group form-row'>
                          <label className='col-sm-4'>Net Charges</label>
                          <div className='col-sm-8'>
                            <input
                              type='text'
                              value={net || ''}
                              disabled
                              className='form-control form-control-sm'
                            />
                          </div>
                        </div>
                        </>
                        ):null}
                      </div>
                    </div>
             {/*       {net > 0 ? (
                      <div className='card shadow mt-2'>
                        <div className='card-body p-2'>
                          <h6>Payment Information</h6>
                          <div className='form-group form-row'>
                            <label className='col-sm-4'>Card No</label>
                            <div className='col-sm-8'>
                              <input
                                type='text'
                                name='cardno'
                                maxLength={16}
                                value={bill?.cardno || ''}
                                placeholder='Card No'
                                onChange={handleInput}
                                className='form-control form-control-sm'
                              />
                            </div>
                          </div>
                          <div className='form-group form-row'>
                            <label className='col-sm-4'>Name on Card</label>
                            <div className='col-sm-8'>
                              <input
                                type='text'
                                name='nameoncard'
                                value={bill?.nameoncard || ''}
                                placeholder='Name on Card'
                                onChange={handleInput}
                                className='form-control form-control-sm'
                              />
                            </div>
                          </div>

                          <button
                            onClick={handleSubmit}
                            className='btn btn-success btn-sm float-right'
                          >
                            Pay Now
                          </button>
                        </div>
                      </div>
                    ) : null}
             */}
             <br/>
                        <button
                            onClick={handleSubmit}
                            className='btn btn-success btn-sm float-right'
                          >
                            Generate
                          </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/><br/>
    </>
  )
}

export default CreateBill
