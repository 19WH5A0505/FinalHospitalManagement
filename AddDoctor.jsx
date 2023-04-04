import { useState } from 'react'
import doctorservice from '../services/doctorservice'
import { useNavigate } from 'react-router-dom'
import doctorvalidation from '../validation/doctorvalidation'
import { useEffect } from 'react'
import Select from 'react-select'

function AddDoctor() {
  const [user, setUser] = useState(null)
  const [errors, setErrors] = useState({})
  const [doctorid, setdoctorid] = useState()
  const [days,setDays]=useState()
  const navigate = useNavigate()
  const options= [
    {value: 'Mon', label: 'Monday'},
    {value: 'Tue', label: 'Tuesday'},
    {value: 'Wed', label: 'Wednesday'},
    {value: 'Thu', label: 'Thursday'},
    {value: 'Fri', label: 'Friday'},
    {value: 'Sat', label: 'Saturday'},
    {value: 'Sun', label: 'Sunday'},
  ]

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('selected',selectedOption.map(x=>x.value).toString())
    if(selectedOption){
      setDays(selectedOption.map(x=>x.value).toString())
    }else{
      errors.days="Days must be selected"
    }
    setErrors(doctorvalidation(user))

    if (Object.keys(errors).length === 0) {
      console.log(user)
      user.userid = doctorid
      user.availableDays=selectedOption.map(x=>x.value).toString()
      doctorservice
        .addDoctor(user)
        .then((resp) => {
          console.log(resp)
          alert('Doctor registered successfully')
          navigate('/doctors')
        })
        .catch((error) => console.log('Error', error))
    }
  }

  useEffect(() => {
    doctorservice.generateDoctorId().then((resp) => setdoctorid(resp.data.data))
  }, [])

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='card shadow mx-auto mt-3'>
              <div className='card-body'>
                <h4 className='text-center p-2'>Add Doctor</h4>
                <form onSubmit={handleSubmit}>
                  <div className='row'>
                    <div className='col-sm-6 mx-auto'>
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
                        <label className='col-sm-4 form-control-label'>
                          Qualification
                        </label>
                        <div className='col-sm-8'>
                          <input
                            type='text'
                            name='qualification'
                            value={user?.qualification}
                            onChange={handleInput}
                            className='form-control form-control-sm'
                          />
                          {errors?.qualification && (
                            <small className='text-danger float-right'>
                              {errors?.qualification}
                            </small>
                          )}
                        </div>
                      </div>
                      <div className='form-group form-row'>
                        <label className='col-sm-4 form-control-label'>
                          Speciality
                        </label>
                        <div className='col-sm-8'>
                          <input
                            type='text'
                            maxLength='10'
                            name='speciality'
                            value={user?.speciality}
                            onChange={handleInput}
                            className='form-control form-control-sm'
                          />
                          {errors?.speciality && (
                            <small className='text-danger float-right'>
                              {errors?.speciality}
                            </small>
                          )}
                        </div>
                      </div>

                      <div className='form-group form-row'>
                        <label className='col-sm-4 form-control-label'>
                          Phone
                        </label>
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
                          From Time
                        </label>
                        <div className='col-sm-8'>
                          <input
                            type='time'
                            name='fromTime'
                            value={user?.fromTime}
                            onChange={handleInput}
                            className='form-control form-control-sm'
                          />
                          {errors?.fromTime && (
                            <small className='text-danger float-right'>
                              {errors?.fromTime}
                            </small>
                          )}
                        </div>
                      </div>
                      <div className='form-group form-row'>
                        <label className='col-sm-4 form-control-label'>
                          To Time
                        </label>
                        <div className='col-sm-8'>
                          <input
                            type='time'
                            name='toTime'
                            value={user?.toTime}
                            onChange={handleInput}
                            className='form-control form-control-sm'
                          />
                          {errors?.toTime && (
                            <small className='text-danger float-right'>
                              {errors?.toTime}
                            </small>
                          )}
                        </div>
                      </div>
                      <div className='form-group form-row'>
                        <label className='col-sm-4 form-control-label'>
                          Available Days
                        </label>
                        <div className='col-sm-8'>
                          <Select
                            name='days'
                            isMulti
                            closeMenuOnSelect={false}
                            className="basic-multi-select"
                            options={options}
                            onChange={setSelectedOption}
                          >
                          </Select>
                          {errors?.days && (
                            <small className='text-danger float-right'>
                              {errors?.days}
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
                            value={doctorid}
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
        </div>
        <br/>
        <br/>
        <br/>
      </div>
    </>
  )
}

export default AddDoctor
