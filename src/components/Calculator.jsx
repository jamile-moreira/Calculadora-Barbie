import React, { useState } from "react";
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from "@mui/material";

export default function Calculator() {
    const [number, setNumber] = useState(0);
    const [oldNumber, setOldNumber] = useState(0);
    const [acion, setAcion] = useState();


    function inputNumber(e){
        let input= e.target.value;

        if(number===0){
            setNumber(input);
        }else{
            setNumber(number + input);
        }
       
        setNumber(number + input);
    }

    function clear(){
        setNumber(0)
    }

    function porcentage(){
        setNumber(number/100)
    }

    function operator(){
        if(number>0){
            setNumber(-number)
        }else{
            setNumber(Math.abs(number));
        }
    }

    function selectAcion(e){
        let operatorSelect = e.target.value;
        setAcion(operatorSelect)
        setOldNumber(number)
        setNumber(0);
    }

    function calculate() {
        if (acion === "/"){
            setNumber(oldNumber / number);
        } else if (acion === 'X') {
            setNumber(parseFloat(oldNumber) * parseFloat(number));
        } else if (acion === '-') {
            setNumber(parseFloat(oldNumber) - parseFloat(number));
        } else if (acion === '+') {
            setNumber(parseFloat(oldNumber) + parseFloat(number));
        }
    }
        
    return (
        <div className="divContainer">
        <Box m={5}/>
        <Container maxWidth='xs'>
        <div>
        <div className="borderCalculator"></div>
         <div className="wrapper">
            <Box m={12} />
            <h1 className="result">{number}</h1>
            <button onClick={clear}>AC</button>
            <button onClick={operator}>+-</button>
            <button onClick={porcentage}>%</button>
            <button className="side" onClick={selectAcion} value='/'>/</button>
            <button className="sideLeft" onClick={inputNumber} value={7}>7</button>
            <button className="sideLeft" onClick={inputNumber} value={8}>8</button>
            <button className="sideLeft" onClick={inputNumber} value={9}>9</button>
            <button className="side" onClick={selectAcion} value='X'>X</button>
            <button className="sideLeft" onClick={inputNumber} value={4}>4</button>
            <button className="sideLeft" onClick={inputNumber} value={5}>5</button>
            <button className="sideLeft" onClick={inputNumber} value={6}>6</button>
            <button className="side" onClick={selectAcion} value='-'>-</button>
            <button className="sideLeft" onClick={inputNumber} value={1}>1</button>
            <button className="sideLeft" onClick={inputNumber} value={2}>2</button>
            <button className="sideLeft" onClick={inputNumber} value={3}>3</button>
            <button className="side" onClick={selectAcion} value='+'>+</button>
            <button className="sideLeft" onClick={inputNumber} value={0}>0</button>
            <button className="sideLeft" onClick={inputNumber} value={'.'}>,</button>
            <button className="sideLeft" style={{ visibility:"hidden" }}>,</button>
            <button className="side" onClick={calculate}>=</button>
          
         </div>
         </div>
         </Container>
         </div>
        );
}