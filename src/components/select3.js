
import { Form } from "react-bootstrap";
import {useState, useEffect} from 'react';
import getData from './data_source';

const ThreeSelect = ({callback}) => {
    const [data, setData] = useState(null);
    const [dataCompany, setDataCompany] = useState(null);
    const [dataCrypto, setDataCrypto] = useState([<option>Cryptocurrency</option>]);
    const [dataOperation, setDataOperation] = useState([<option>Operation</option>]);

    const companySelect = document.getElementById('companySelect');
    const cryptoSelect = document.getElementById('cryptoSelect');
    const operationSelect = document.getElementById('operationSelect');

    //Le pido los datos al DataSource una vez e inicio el componente selector de company.
    useEffect(() => {
        let dataSource = getData();   
        setData(dataSource);
        let options = [];
        Object.keys(dataSource).forEach((element, index) => {
            options.push(<option value={element} key={element}>{element}</option>);
        });    
        setDataCompany(options);
        reportChange();
    }, []); 
  

    function changeCompany(){
        reportChange();
        if (data == null) return;
        let options = [];
        Object.keys(data[companySelect.value]).forEach((element, index) => {
            options.push(<option value={element} key={element}>{element}</option>);
        });    
        setDataCrypto(options);
    }


    function changeCrypto(){
        reportChange();
        if (data == null) return;
        let options = [];
        Object.keys(data[companySelect.value][cryptoSelect.value]).forEach((element, index) => {
            options.push(<option value={element} key={element}>{element}</option>);
        });    
        setDataOperation(options);
    }


    function changeOperation(){
        //if (data == null) return;
        reportChange();
    }


    function reportChange(){
        try {
            const companySelected = companySelect.value;
            const cryptoSelected = cryptoSelect.value;
            const operationSelected = operationSelect.value;
            if ((companySelected != null) && (cryptoSelected != null) && (operationSelected != null)){
                try {
                    let prices = data[companySelected][cryptoSelected][operationSelected]
                    if (prices)
                        callback(prices);    
                } catch (error) {
                    return;
                }
            }                
        } catch (error) {
            return
        }
    }


    return (
        <div style={{display:"inline-flex",width:"100%",padding:"5px",backgroundColor:"#9db7e9",borderRadius:"8px"}}>
            <Form.Select id="companySelect" aria-label="Company" style={{marginLeft:'10px',width:'auto'}} onChange={changeCompany} >
                {dataCompany}
            </Form.Select>            
            <Form.Select id="cryptoSelect" aria-label="Cryptomoneda" style={{marginLeft:'10px',width:'auto'}} onChange={changeCrypto}  >
                {dataCrypto}
            </Form.Select>            
            <Form.Select id="operationSelect" aria-label="Operación" style={{marginLeft:'10px',width:'auto'}} onChange={changeOperation}  >
                {dataOperation}
            </Form.Select>            
        </div>
    );
}

export default ThreeSelect;