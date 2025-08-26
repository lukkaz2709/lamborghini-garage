import { fetchGetCarData } from "../../API/getCars"
import { carModel } from "./props"

export const loadCarData = async (
    id: number, 
    setCarData: React.Dispatch<React.SetStateAction<carModel | null>>
) => {
    const response = await fetchGetCarData(id)
    try{
        if(response){
            setCarData(response)
        }
    }catch(error){
        console.log("Erro ao buscar da API", error)
        setCarData(null);
    }
    
}

export const handlePreviousItem = async(
    carData: carModel | null, 
    setCarData: React.Dispatch<React.SetStateAction<carModel | null>>
) => {
    let response = null;
    try{
        if(carData && carData?.id > 1) {
            response = await fetchGetCarData(carData.id - 1)
        }

        if (response){
            setCarData(response)
        }
    }catch(error){
        console.log("erro ao chaamr a API", error)
        setCarData(null)
    }
}

export const handleNextItem = async(
    carData: carModel | null, 
    setCarData: React.Dispatch<React.SetStateAction<carModel | null>>
) => {
    let response = null;
    try{
        if(carData && carData?.id < 10) {
            response = await fetchGetCarData(carData.id + 1)
        }

        if (response){
            setCarData(response)
        }
    }catch(error){
        console.log("erro ao chaamr a API", error)
        setCarData(null)
    }
}