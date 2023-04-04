import axios from "axios"
const BASE_URL="http://localhost:9000/api/billing"
const token=sessionStorage.getItem('token')
class BillService {
    getBillDetails(aptid){
        return axios.get(BASE_URL+'/'+aptid,{
            headers: {
              Authorization: 'Bearer ' + token,        
            }
        })
    }

    createBill(data){
        return axios.post(BASE_URL,data,{
            headers: {
              Authorization: 'Bearer ' + token,        
            }
        })
    }
}
export default new BillService()