import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SideBar from '../components/SideBar'
import doctorservice from '../services/doctorservice'

function EditDoctor() {
  const [user, setUser] = useState(null)
  const { docid } = useParams('docid')
  const navigate = useNavigate()
  useEffect(() => {
    doctorservice
      .getDoctorDetails(docid)
      .then((resp) => {
        console.log('Employee Info', resp.data.data)
        setUser(resp.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    doctorservice
      .updateDoctor(docid, user)
      .then((resp) => {
        alert(resp.data)
        navigate('/doctors')
      })
      .catch((error) => console.log('Error', error))
  }

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
                <h4 className='text-center p-2'>View/Edit Doctor</h4>
                <form onSubmit={handleSubmit}>
                  <div className='row'>
                    <div className='col-sm-6 mx-auto'>
                      <div className='form-group form-row'>
                        <label className='col-sm-4 form-control-label'>
                          Doctor Name
                        </label>
                        <div className='col-sm-8'>
                          <input
                            type='text'
                            name='name'
                            value={user?.name}
                            className='form-control form-control-sm'
                          />
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
                        </div>
                      </div>
                      <div className='form-group form-row'>
                        <label className='col-sm-4 form-control-label'>
                          Speciality
                        </label>
                        <div className='col-sm-8'>
                          <input
                            type='text'
                            name='speciality'
                            value={user?.speciality}
                            onChange={handleInput}
                            className='form-control form-control-sm'
                          />
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
      </div>
    </>
  )
}

export default EditDoctor
