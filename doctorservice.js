import axios from "axios";
const BASE_URL="http://localhost:9000/api/doctors"
const token=sessionStorage.getItem('token')
class DoctorService {
    getDoctors(){
        return axios.get(BASE_URL,{
            headers: {
              Authorization: 'Bearer ' + token,        
            }
        })
    }

    addDoctor(data){
        return axios.post(BASE_URL,data,{
            headers: {
              Authorization: 'Bearer ' + token,        
            }
        })
    }

    updateDoctor(id,data){
        return axios.put(BASE_URL+'/'+id,data,{
            headers: {
              Authorization: 'Bearer ' + token,        
            }
        })
    }

    deleteDoctor(id){
        return axios.delete(BASE_URL+'/'+id,{
            headers: {
              Authorization: 'Bearer ' + token,        
            }
        })
    }

    getDoctorDetails(id){
        return axios.get(BASE_URL+'/'+id,{
            headers: {
              Authorization: 'Bearer ' + token,        
            }
        })
    }

    generateDoctorId(){
        return axios.get(BASE_URL+'/generateid',{
           headers: {
              Authorization: 'Bearer ' + token,        
            } 
        });
    }
}

export default new DoctorService()