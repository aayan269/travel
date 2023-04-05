import {  GET, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT, SIGNUP_SUCCESS } from "./auth.types"


let token=localStorage.getItem("token")
const initial={
    isAuth:!!token,
    token:token,
    error:false,
    message:"",
    data:{}
}
 export const authReducer=(state=initial,{type,payload})=>{
    switch(type){
        case LOGIN_SUCCESS:{
            localStorage.setItem("token",payload.token)
            // console.log(payload.user)
            return{
                ...state,isAuth:true,error:false,token:payload.token,data:payload.user,message:""
            }
        }
        case LOGIN_ERROR:{
            return{
                ...state,isAuth:false,token:"",error:true,message:payload
            }
        }
        case SIGNUP_SUCCESS:{
            // console.log("reducer",payload)
            return{
                ...state,message:payload
            }
        }
        case LOGOUT:{
            localStorage.removeItem("token")
            return{
                ...state,isAuth:false,token:"",error:false
            }

        }
        case GET:{

            return{
                ...state,data:payload
            }
        }
        default :return state

    }
 }