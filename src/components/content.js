
import ChartInvesting from "./chart";
import ThreeSelect from "./select3";
import {useState, useEffect} from 'react';


const Content = () => {
    const [data, setData] = useState(null);

    const callbackShowDataOnChart = (prices) => {
        setData(prices);
        console.log(prices);
    }

    return (
        <div className='box-content'>
            <div style={{width:"100%", display:'table-row'}}>
                <ThreeSelect callback={callbackShowDataOnChart} />
                <p></p>
            </div>
            <section style={{width:"100%", display:'table-row',paddingTop:'10px'}}>
                <ChartInvesting data={data} />
            </section>
        </div>
    );
}

export default Content;

