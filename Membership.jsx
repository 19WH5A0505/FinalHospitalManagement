import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import patientservice from '../services/patientservice'

function Membership() {
  const navigate=useNavigate()
  const becomeMember=()=>{
    console.log('id',sessionStorage.getItem('id'))
    patientservice.updateMember(sessionStorage.getItem('id'))
    .then(resp=>{
      alert(resp.data.data)
      navigate('/uhome')
    })
    .catch(error=>alert(error.error))
  }

  useEffect(()=>{
    patientservice.getPatientDetails(sessionStorage.getItem('id'))
    .then(resp=>{
      console.log(resp)
      if(resp.data?.data?.member){
        navigate('/uhome')
      }
    })
  },[])

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-6 mx-auto p-3'>
            <div className='card shadow'>
              <div className='card-header'>
              <img src="https://brevoortpark.ca/wp-content/uploads/2022/07/Membership_no_bkgrd.png"
                alt="Loading" width={630} height={300}/>
              <h3 align="center" style={{ fontWeight: 'bold'}}>Get 30% Discount</h3>
              <h5 align="center">On every appointment you make</h5>
              
              </div>
              <div className='card-body' align="center">
                <div className='row' align="center">
                  <div className='col-sm-7'>
                    <button className='btn btn-success btn-lg' onClick={e=>becomeMember()}>Become Member</button>
                  </div>
                  <div className='col-sm-4'>
                <Link to='/uhome' className='btn btn-danger btn-lg'>Skip for Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
    </>
  )
}

export default Membership
