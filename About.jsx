import React from "react";
import { SmoothCorners } from 'react-smooth-corners'

function About() {
  return (
    <div className="about">
      
      <div class="container">
        <div class="row align-items-center my-6">
          <div class="col-lg-15">
          <br/>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://thumbs.dreamstime.com/b/team-group-doctors-nurses-medicine-healthcare-concept-43916218.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-15">
            <br/>
            <h3 style={{ fontWeight: 'bold' }}>Health Care Medical Care</h3>
            <p style={{ fontSize: 20}}>
            HCMC is an appointment booking system for Patients. The patient can book an appointment in an 
            available slot and the doctor can view his bookings after login. Patients can view the scheduled appointment details, 
            or change and update the details.
            <br/>
            </p>
            <SmoothCorners
              corners="55, 60"
              borderRadius="1px"
              style={{ padding: '5px 10px'}}
              as="button" >
                <img src="https://static.vecteezy.com/system/resources/thumbnails/004/639/565/small/target-mission-illustration-on-white-background-creative-icon-vector.jpg"
                alt="Loading" width={75} height={75}/>
                <br/>
                <b style={{ fontSize: 20}}>Our Mission</b>
                <br/>
                <p style={{ fontSize: 18}}>The mission at HCMC is to provide 
            <br/> patients with the best,most comprehensive 
            <br/>care for all ages from birth to seniors.
            .</p>
          </SmoothCorners>
          &emsp;&emsp;
          <SmoothCorners
              corners="55, 60"
              borderRadius="1px"
              style={{ padding: '5px 10px'}}
              as="button" >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS5lmO8Wp827GASyEK4uYqFOG6NxAv_9fpvQ&usqp=CAU"
                alt="Loading" width={75} height={75}/>
                <br/>
                <b style={{ fontSize: 20}}>Our Vision</b>
                <br/>
                <p style={{ fontSize: 18}}>Enable healthcare businesses to provide 
                <br/>superior healthcare delivery and 
                <br/>patient care with technology globally</p>
          </SmoothCorners>
          &emsp;&emsp;

          <SmoothCorners
              corners="55, 60"
              borderRadius="1px"
              style={{ padding: '5px 10px'}}
              as="button" >
                <img src="https://thumbs.dreamstime.com/b/core-values-icon-vector-illustration-isolated-blue-background-core-values-icon-138040532.jpg"
                alt="Loading" width={75} height={75}/>
                <br/>
                <b style={{ fontSize: 20}}>Our Values</b>
                <br/>
                <p style={{ fontSize: 18}}>Our value system defines us,
                <br/> and acts as an anchor when we are
                <br/> faced with challenges.</p>
          </SmoothCorners>
              <br/>
              <br/>
              <br/>
              <br/>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default About;
