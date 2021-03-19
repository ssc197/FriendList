import  { useState } from "react";
import loader from "../../resources/images/loader.gif";
import "./style.scss";
const Loader = () => {
    const [loading, setLoading] = useState(false);

    return [
        loading ?  <div className="loader-container">
            <img src={loader} className="fp-loader" alt="loading" />
        </div> : null,
        () => setLoading(true), //Show loader
        () => setLoading(false) //Hide Loader
    ];
};

export default Loader;