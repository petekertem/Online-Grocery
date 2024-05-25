import { Slider } from "@/types";
import axios from "axios";

export const getSlider = async():Promise<Slider[]>=>{
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/sliders?populate=*`);
        const data = res.data.data;
        return data;
    } catch (error) {
        console.error("Sliderları alırken hata oluştu:", error);
        throw error;
    }
   
}