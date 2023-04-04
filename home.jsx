import React from "react";

function HomePage() {
  return (
    <div class="container">
      <br/>
      <p>
      <marquee scrollamount="10" color='#000000'>WELCOME TO HEALTH CARE MEDICAL CARE</marquee>
      </p>
      
        <div class="row align-items-center my-1">
          <div class="col-lg-7">
          <h1 class="font-weight-light"><span style={{ fontWeight: 'bold' }}>Making Health<br/>
            Care Better Together</span></h1>
            <div class="col-lg-9">
            <div class="row align-items-center my-1">
            <p style={{ fontSize: 20}}>
            &nbsp;The future of health care that you and your loved &nbsp;ones can rely on. HCMC is dedicated to giving only &nbsp;the best care for all ages. Now do your part to make &nbsp;healthcare safer.
            </p>  
            </div>
            </div>
            <br/>
            <br/>
            <br/>
          </div>
          
          <div class="col-lg-5">
          <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://img.freepik.com/free-photo/doctor-white-background_1368-5902.jpg"
              alt=""
            />
            
          </div>
          <br/>
          <br/>
          
        </div>
        <br/>
        <div class="container">
		    <div class="row">

			
				
					<div class="col-sm-3">
                <h5><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmMxb7IZ9Jq6i0XjVFSrF_EV2DQfj_SUqWOyfaTZjRfg&s"
            alt="Loading" width={30} height={30}/>Location</h5>
							  <p>102,1st Floor,Kul Scapes,Magarpatta Road,Kharadi Pune,Maharashtra,India.</p>
              	<br/>
          </div>

				
					<div class="col-sm-3">
          <h5><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBbiT5g9Ns_KghiUsVbHqbMYrDpY8DDW9-1A&usqp=CAU"
            alt="Loading" width={20} height={20}/>&nbsp;
							Hours						
            </h5>
							<p>Monday-Friday<br />
              8:00 AM - 5:00 PM</p>
        </div>

					<div class="col-sm-3">
            
            <h5><img src="https://i.pinimg.com/736x/fc/27/fb/fc27fb81e77cc56ba4ed981d7801ceb9.jpg"
              alt="Loading" width={25} height={25}/>&nbsp;Contact
            </h5>
            <p>Main: 9177428195<br />
            Landline: 4958765431
            <br/>
            E -mail: Hcmc@gmail.com</p>
					</div>

				
					<div class="col-sm-3">
          <h5><img src="https://cdn-icons-png.flaticon.com/512/6165/6165449.png"
              alt="Loading" width={25} height={25}/>&nbsp;Follow Us
          </h5>
          <a  href="https://www.facebook.com">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
              alt="Loading" width={25} height={25}/>&nbsp;Facebook</a>
          <br/>
          <a  href="https://www.instagram.com">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
              alt="Loading" width={25} height={25}/>&nbsp;Instagram</a>
          </div></div></div>
        <br/>
        <br/>
  
	  </div>
  );
}

export default HomePage;
