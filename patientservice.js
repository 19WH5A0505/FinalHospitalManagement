import axios from "axios"
const BASE_URL="http://localhost:9000/api/patients"
const token=sessionStorage.getItem('token')
class PatientService{
    register(data){
        return axios.post(BASE_URL+'/register',data)
    }

    allPatients(){
        return axios.get(BASE_URL,{
            headers: {
              Authorization: 'Bearer ' + token,        
            }
        })
    }

    updateMember(id){
        return axios.put(BASE_URL+'/'+id,null,{
            headers:{
                Authorization: 'Bearer ' + token      
            }
        })
    }

    getPatientDetails(id){
        return axios.get(BASE_URL+'/'+id,{
            headers: {
              Authorization: 'Bearer ' + token,        
            }
        })
    }

    generatePatientId(){
        return axios.get(BASE_URL+'/generateid');
    }
}

export default new PatientService()