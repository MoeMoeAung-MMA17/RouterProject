import {api} from "./baseUrl";

export const GetBookData = async (arg) =>{
        try{
                const {data} = await api.get(arg);
                console.log(data);
                return data;
                // console.log(data);
        }catch(e){
                throw new Error(e.message);
        }
}