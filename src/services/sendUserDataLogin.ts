import axios from "axios";
export interface IUserDataPayload {
    userEmail:string;
    userPassword:string;
}

export const sendUserLoginData = (payload:IUserDataPayload) => {
    return axios.post(`/api/userLogin/`, payload);
};