const doctorvalidation=(values)=>{
    let errors={}
    if(!values?.name){
        errors.name="Name is required"
    }
    if(!values?.gender){
        errors.gender="Gender is required"
    }
    if(!values?.fromtime){
        errors.fromtime="From Time is required"
    }
    if(!values?.totime){
        errors.totime="To Time is required"
    }
    if(!values?.address){
        errors.address="Address is required"
    }
    if(!values?.qualification){
        errors.qualification="Qualification is required"
    }
    if(!values?.speciality){
        errors.speciality="Speciality is required"
    }
    if(!values?.age){
        errors.age="Age is required"
    }
    if(!values?.phone){
        errors.phone="Phone no is required"
    }
    if(!values?.pwd){
        errors.pwd="Password is required"
    }

    return errors;
}

export default doctorvalidation;