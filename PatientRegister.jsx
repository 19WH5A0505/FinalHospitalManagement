import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import patientservice from '../services/patientservice'
import patientvalidation from '../validation/patientvalidation'

function PatientRegister() {
  const [user, setUser] = useState(null)
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()
  const [patientid, setpatientid] = useState()

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(patientvalidation(user))

    if (Object.keys(errors).length === 0) {
      console.log(user)
      user.userid = patientid
      patientservice
        .register(user)
        .then((resp) => {
          console.log(resp)
          alert('Patient registered successfully')
          navigate('/login')
        })
        .catch((error) => console.log('Error', error))
    }
  }

  useEffect(() => {
    patientservice
      .generatePatientId()
      .then((resp) => setpatientid(resp.data.data))
  }, [])
  return (
    <>

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-6 mx-auto'>
            <form onSubmit={handleSubmit}>
              <div className='card shadow mx-auto mt-3'>
                <div className='card-body'>
                  <h4 className='text-center p-2'>Patient Registration</h4>
                  <div className='form-group form-row'>
                    <label className='col-sm-4 form-control-label'>
                      Full Name
                    </label>
                    <div className='col-sm-8'>
                      <input
                        type='text'
                        name='name'
                        value={user?.name}
                        onChange={handleInput}
                        className='form-control form-control-sm'
                      />
                      {errors?.name && (
                        <small className='text-danger float-right'>
                          {errors?.name}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className='form-group form-row'>
                    <label className='col-sm-4 form-control-label'>
                      Gender
                    </label>
                    <div className='col-sm-8'>
                      <select
                        name='gender'
                        value={user?.gender}
                        onChange={handleInput}
                        className='form-control form-control-sm'
                      >
                        <option value=''>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                      {errors?.lname && (
                        <small className='text-danger float-right'>
                          {errors?.lname}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className='form-group form-row'>
                    <label className='col-sm-4 form-control-label'>
                      Address
                    </label>
                    <div className='col-sm-8'>
                      <input
                        type='text'
                        name='address'
                        value={user?.address}
                        onChange={handleInput}
                        className='form-control form-control-sm'
                      />
                      {errors?.address && (
                        <small className='text-danger float-right'>
                          {errors?.address}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className='form-group form-row'>
                    <label className='col-sm-4 form-control-label'>
                      Age (in years)
                    </label>
                    <div className='col-sm-8'>
                      <input
                        type='number'
                        name='age'
                        value={user?.age}
                        onChange={handleInput}
                        className='form-control form-control-sm'
                      />
                      {errors?.age && (
                        <small className='text-danger float-right'>
                          {errors?.age}
                        </small>
                      )}
                    </div>
                  </div>

                  <div className='form-group form-row'>
                    <label className='col-sm-4 form-control-label'>Phone</label>
                    <div className='col-sm-8'>
                      <input
                        type='text'
                        maxLength='10'
                        name='phone'
                        value={user?.phone}
                        onChange={handleInput}
                        className='form-control form-control-sm'
                      />
                      {errors?.phone && (
                        <small className='text-danger float-right'>
                          {errors?.phone}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className='form-group form-row'>
                    <label className='col-sm-4 form-control-label'>
                      User Id
                    </label>
                    <div className='col-sm-8'>
                      <input
                        type='text'
                        disabled
                        value={patientid}
                        className='form-control form-control-sm'
                      />
                    </div>
                  </div>
                  <div className='form-group form-row'>
                    <label className='col-sm-4 form-control-label'>
                      Password
                    </label>
                    <div className='col-sm-8'>
                      <input
                        type='password'
                        name='pwd'
                        value={user?.pwd}
                        onChange={handleInput}
                        className='form-control form-control-sm'
                      />
                      {errors?.pwd && (
                        <small className='text-danger float-right'>
                          {errors?.pwd}
                        </small>
                      )}
                    </div>
                  </div>
                  <button className='btn btn-primary btn-sm float-right'>
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br/>
        <br/>
        <br/>
    </>
  )
}

export default PatientRegister
