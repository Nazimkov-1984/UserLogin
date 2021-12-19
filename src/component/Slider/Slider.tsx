import Slider from "react-slick";
import {useCallback} from "react";

const scss = require("./SliderWrapper.module.scss");

interface ISliderItem {
    urlImg: string;
    title: string;
    text: string;
}

const sliderItems: ISliderItem[] = [
    {
        urlImg: "https://user-images.githubusercontent.com/61156194/146675216-f40b01af-c891-4b9c-b5b6-3c2231fe524b.png",
        title: "Tokenplace",
        text: "Multi-exchange Trading Terminal"
    },
    {
        urlImg: "https://user-images.githubusercontent.com/61156194/146671903-cbd21a0b-aef2-4c3b-90f4-bf196167b827.png",
        title: "Fund Platform",
        text: "Hedge funds wealth management"
    },
    {
        urlImg: "https://user-images.githubusercontent.com/61156194/146671904-ac695232-ed12-4703-95f0-154dec03705c.png",
        title: "Merge Data Review",
        text: "It gives data managers the power to efficiently manage quality data to ensure database lock readiness."
    }
]


const SliderWrapper = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "button__bar",
        arrows: false
    };
    const settingsWithModules = {
        ...settings,
        dotsClass: scss.button__bar
    }
    const SliderItem = useCallback((sliderItem: ISliderItem) => {
        return (
            <div className={scss.slideWrapper}>
                <img className={scss.sliderImage} src={sliderItem.urlImg} alt={sliderItem.title}/>
                <h3 className={scss.slideTitle}>{sliderItem.title}</h3>
                <span className={scss.slideText}>{sliderItem.text}</span>
            </div>
        )
    }, []);

    return (
        <div className={scss.wrapper}>
            <Slider {...settingsWithModules}>
                {sliderItems.map(slide => {
                    return (
                        <SliderItem key={`slide - ${slide.title}`} urlImg={slide.urlImg} title={slide.title}
                                    text={slide.text}/>
                    )
                })
                }
            </Slider>
        </div>
    )
}
export default SliderWrapper;