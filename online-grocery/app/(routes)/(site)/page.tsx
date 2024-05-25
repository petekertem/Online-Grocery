import { getSlider } from "@/actions/getSliders";
import Slider from "@/components/Slider";
import Image from "next/image";

export default async function Home() {
  const SliderList = await getSlider();
  return (
    <div>
      Anasayfa
      <Slider sliderList={SliderList} />
    </div>
  );
}
