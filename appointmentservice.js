import axios from "axios"
const BASE_URL="http://localhost:9000/api/appointments"
const token=sessionStorage.getItem('token')
class AppointmentService {
    saveAppointment(data){
        return axios.post(BASE_URL,data,{
            headers: {
              Authorization: 'Bearer ' + token,        
            }
        });
    }

    allAppointments(){
        return axios.get(BASE_URL,{
            headers: {
              Authorization: 'Bearer ' + token,        
            }
        })
    }

    patientAppointments(patid){
        return axios.get(BASE_URL+'/patients/'+patid,{
            headers: {
              Authorization: 'Bearer ' + token,        
            }
        })
    }

    doctorAppointments(docid){
        return axios.get(BASE_URL+'/doctors/'+docid,{
            headers: {
              Authorization: 'Bearer ' + token,        
            }
        })
    }

    getAppointmentDetails(id){
        return axios.get(BASE_URL+'/'+id,{
            headers: {
              Authorization: 'Bearer ' + token,        
            }
        })
    }

    updateAppointment(data){
        return axios.post(BASE_URL+'/updatestatus',data,{
            headers: {
              Authorization: 'Bearer ' + token,        
            }
        })
    }
}

export default new AppointmentService()