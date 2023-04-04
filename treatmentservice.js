import axios from "axios"
const BASE_URL="http://localhost:9000/api/treatments"
const token=sessionStorage.getItem('token')
class TreatmentService {
    getTreatmentDetails(aptid){
        return axios.get(BASE_URL+'/'+aptid,{
            headers: {
              Authorization: 'Bearer ' + token,        
            }
        })
    }

    updateTreatment(aptid,data){
        return axios.put(BASE_URL+'/'+aptid,data,{
            headers: {
              Authorization: 'Bearer ' + token,        
            }
        })
    }

    addPrescription(data){
        return axios.post(BASE_URL+'/prescriptions',data,{
            headers: {
              Authorization: 'Bearer ' + token,        
            }
        })
    }

    deletePrescription(id){
        return axios.delete(BASE_URL+'/prescriptions/'+id,{
            headers: {
              Authorization: 'Bearer ' + token,        
            }
        })
    }
}

export default new TreatmentService()