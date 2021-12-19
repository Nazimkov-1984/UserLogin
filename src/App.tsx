import React from 'react';
import SectionSlider from "./component/SectionSlider/SectionSlider";
import SectionLogin from "./component/SectionLogin/SectionLogin";

const scss = require('./App.module.scss');


const App: React.FunctionComponent = () => {

    return (
        <div className={scss.wrapper}>
            <SectionSlider/>
            <SectionLogin/>
        </div>
    )
}

export default App;
