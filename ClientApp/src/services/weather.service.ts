import { networkRequestError, weather } from '@/types'
import axios, { AxiosResponse } from 'axios'

export async function getWeather(): Promise<weather[] | networkRequestError> {
    //const url = import.meta.env.BASE_URL + "/weatherforecast"
    const url = "https://localhost:7033/weatherforecast"
    try {
        const response = await axios.get<weather[]>(url)
        return response.data
    } catch (error) {
        return new networkRequestError(error)
    }
    
}