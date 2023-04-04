import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SideBar from '../components/SideBar'
import billservice from '../services/billservice'
import treatmentservice from '../services/treatmentservice'

const ViewBill = () => {
  const { aptid } = useParams('aptid')
  const [treatment, settreatment] = useState({})
  const [bill, setbill] = useState({})
  const [total, settotal] = useState()
  
  const loadData = () => {
    treatmentservice
      .getTreatmentDetails(aptid)
      .then((resp) => settreatment(resp.data))
    billservice.getBillDetails(aptid).then((resp) =>{
     setbill(resp.data)
     settotal(parseInt(resp.data?.doctorcharges || 0) +
            parseInt(resp.data?.prescriptioncharges || 0) +
            parseInt(resp.data?.roomcharges || 0))
    }  
     )
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
            <div className='card shadow mx-auto mt-3'>
              <div className='card-body'>
                <h5 className='text-center p-2'>Patient Bill</h5>
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
                    <div className='card shadow mt-2'>
                      <div className='card-body p-2'>
                        <h6>Treatment Details</h6>
                        <table className='table table-sm' border="1">
                          <tbody border="1">
                            <tr border="1">
                              <th border="1">Doctor</th>
                              <th border="1">{treatment?.appointment?.doctor?.name}</th>
                            </tr>
                            <tr border="1">
                              <th border="1">Appointment date</th>
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
                  </div>
                  <div className='col-sm-6'>
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
                            <tbody border="1" >
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
                    <div className='card shadow mt-2'>
                      <div className='card-body p-2'>
                        <h6>Billing Details</h6>
                        <table className='table table-sm' border="1">
                          <tbody border="1" >
                            <tr border="1">
                              <th border="1">Doctor Charges</th>
                              <th border="1">{bill?.doctorcharges}</th>
                            </tr>
                            <tr border="1">
                              <th border="1">Room Charges</th>
                              <th border="1">{bill?.roomcharges}</th>
                            </tr>
                            <tr border="1">
                              <th border="1">Prescription Charges</th>
                              <th border="1">{bill?.prescriptioncharges}</th>
                            </tr>
                          </tbody>
                          <tfoot border="1">
                            <tr border="1">
                              <th border="1">Total</th>
                              <th border="1">
                                {parseInt(bill.doctorcharges || 0) +
                                  parseInt(bill.prescriptioncharges || 0) +
                                  parseInt(bill.roomcharges || 0)}
                              </th>
                            </tr>
                            {treatment?.appointment?.patient?.member ? (
                              <>
                              <tr border="1">
                              <th border="1">Membership Discount</th>
                              <th border="1">
                                {total*.10}
                              </th>
                            </tr>
                            <tr border="1">
                              <th border="1">Net Bill</th>
                              <th border="1">
                                {total-(total*.10)}
                              </th>
                            </tr>
                              </>
                            ):null}
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
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

export default ViewBill
