import SliderWrapper from "../Slider/Slider";

const scss = require("./SectionSlider.module.scss");

const SectionSlider = () => {
    return (
        <div className={scss.sectionSliderContainer}>
            <SliderWrapper/>

        </div>
    )
}
export default SectionSlider;