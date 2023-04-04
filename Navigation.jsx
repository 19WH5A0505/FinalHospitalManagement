import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Navigation() {
  const uname = sessionStorage.getItem('uname')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logout = () => {
    dispatch({ type: 'LogOut' })
    sessionStorage.clear()
    navigate('/')
  }
  return (
    <div className="navigation">
      
      <nav style={{backgroundColor:'#005A66'}}
       className="navbar navbar-expand navbar-dark">
        <div className="container">
        <h5 className="navbar-brand">
        <img src="https://i.pinimg.com/originals/85/95/f4/8595f4b711e503bc72fe396e5043e0c2.png" alt="Loading.." 
            width={27} height={27}/> &nbsp;Welcome {uname}! </h5>
      
          <NavLink className="navbar-brand" to="/">
           
             &nbsp; Health Care Medical Care
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink style={{color:'white'}}  className="nav-link" to="/home">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={{color:'white'}} className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink style={{color:'white'}} className="nav-link" to="/login">
                  Login 
                </NavLink>
              </li>
            
              <button
                 style={{backgroundColor:'#005A66',color:'white'}}
                 onClick={() => logout() }
                 className='float-right btn-n btn-sm'
              >
             Logout
            </button>
            </ul>
          </div>
        </div>
      </nav>
      
    </div>
  );
}

export default Navigation;
