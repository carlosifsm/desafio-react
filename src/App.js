import './App.css';
import ButtonOp from './components/buttonOp';
import ButtonNum from './components/buttonNum';
import ButtonSubmit from './components/buttonSubm';
import React, {useState} from 'react';

function App() {
  let [display, setDisplay]= useState("")
  let [n1, setN1]= useState("")
  let [n2, setN2]= useState("")
  let [operador, setOperador]= useState("")
  let [resp, setResp]= useState("")
  
  // começar lendo os numeros
  function leNumero(num){
    if(resp !== "" && operador === ""){
      apaga()
    }
    // primeiro caso: pessoa clicando o num pela primeira vez
    if(operador === ""){
      setDisplay(display+=num)
      setN1(n1+=num)
    } else if(operador !== "" && n2 === ""){  // segundo caso: pessoa clicando no segundo num
      setDisplay("")
      setDisplay(display+=num)
      setN2(num)
    } 
    else{
      setDisplay(display+=num)
      setN2(n2+=num)
    }
  } 

  function apaga(){
    setN1("")
    setN2("")
    setOperador("")
    setResp("")
    setDisplay("")
  }

  function leOperador(op){
    if(n1 !== ""){
      setOperador(op);
      setDisplay(operador);
    }
  }

  function calcular() {

    if (n1 !== "" && n2!== "" && operador !== "") {
      switch (operador) {
        case "+":
          resp = parseInt(n1) + parseInt(n2);
          break;

        case "-":
          resp = parseInt(n1) - parseInt(n2);
          break;

        case "*":
          resp = parseInt(n1) * parseInt(n2);
          break;

        case "/":
          resp = parseInt(n1) / parseInt(n2);
          break;
        
        case "^":
          resp = parseInt(n1) ** parseInt(n2);
          break;
        
        default:
          break;
      }
      setDisplay(""+resp);

      setN1("" + resp);
      setN2("");
      setOperador("");
    }
  }


  return (
    <div id="calculator">
        <form action="" onsubmit="calcular(event)">
          <span id="display">{display}</span>
            <section id="buttonsGrid">
                <article id="numbersGrid">
                    <ButtonOp text="C" fx={()=>apaga()}></ButtonOp>
                    <ButtonOp></ButtonOp>
                    <ButtonOp text="^" fx={()=>leOperador('^')}></ButtonOp>
                    <ButtonNum text="7" fx={()=>leNumero('7')}></ButtonNum>
                    <ButtonNum text="8" fx={()=>leNumero('8')}></ButtonNum>
                    <ButtonNum text="9" fx={()=>leNumero('9')}></ButtonNum>
                    <ButtonNum text="4" fx={()=>leNumero('4')}></ButtonNum>
                    <ButtonNum text="5" fx={()=>leNumero('5')}></ButtonNum>
                    <ButtonNum text="6" fx={()=>leNumero('6')}></ButtonNum>
                    <ButtonNum text="1" fx={()=>leNumero('1')}></ButtonNum>
                    <ButtonNum text="2" fx={()=>leNumero('2')}></ButtonNum>
                    <ButtonNum text="3" fx={()=>leNumero('3')}></ButtonNum>
                    <ButtonNum></ButtonNum>
                    <ButtonNum text="0" fx={()=>leNumero('0')}></ButtonNum>
                    <ButtonNum></ButtonNum>
                </article>
                
                <article id="operatorsGrid">
                    <ButtonOp text="÷" fx={()=>leOperador('/')}></ButtonOp>
                    <ButtonOp text="x" fx={()=>leOperador('*')}></ButtonOp>
                    <ButtonOp text="-" fx={()=>leOperador('-')}></ButtonOp>
                    <ButtonOp text="+" fx={()=>leOperador('+')}></ButtonOp>
                    <ButtonSubmit text="=" fx={()=>calcular()}></ButtonSubmit>
                </article>
            </section>
        </form>
    </div>
  );
}

export default App;
