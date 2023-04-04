import axios from "axios";
const BASE_URL="http://localhost:9000/api/users/"
const token=sessionStorage.getItem('token')
class UserService {
    validate(data){
        return axios.post(BASE_URL+'validate',data)
    }
}

export default new UserService()