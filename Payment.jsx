import React from "react";
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import billservice from './services/billservice'
import treatmentservice from './services/treatmentservice'
import SideBar from "./components/SideBar";
const Payment = () => {
  
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
          <div className='col-sm-5'>

                      <div className='card shadow mt-2'>
                        <div className='card-body p-2'>
                          <h4>Payment Information</h4>
                          <br/>
                          <div className='form-group form-row'>
                            <label className='col-sm-4'>Card No</label>
                            <div className='col-sm-5'>
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
                            <div className='col-sm-5'>
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
                            onClick={() => alert('Payment Sucess')}
                            className='btn btn-success btn-sm float-right'
                          >
                            Pay Now
                          </button>
                        </div>
                      </div>
                   </div>
                   </div>
                   </div>
      <br/><br/>
    </>
  )
}

export default Payment
