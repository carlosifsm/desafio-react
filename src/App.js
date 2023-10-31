import './App.css';
import ButtonOp from './components/buttonOp';
import ButtonNum from './components/buttonNum';
import ButtonSubmit from './components/buttonSubm';
import React, {useState} from 'react';

function App() {
  let [display, setDisplay]= useState(0)

  let n1 = ""
  let n2 = ""
  let operador = ""
  let resp = ""

  // começar lendo os numeros
  function leNumero(num){
    if(resp !== "" && operador === ""){
      apaga()
    }
    // primeiro caso: pessoa clicando o num pela primeira vez
    if(operador === ""){
      setDisplay(display+=num)
      n1+= num //n1 = n1 + num
    } else if(operador !== "" && n2 === ""){  // segundo caso: pessoa clicando no segundo num
      setDisplay("")
      setDisplay(display+=num)
      n2 = num
    } 
    else{
      setDisplay(display+=num)
      n2+= num //n1 = n1 + num
    }
  } 

  function apaga(){
    n1 = ""
    n2 = ""
    operador = ""
    resp = ""
    setDisplay("")
  }

  function leOperador(op){
    if(n1 !== ""){
      operador = op
      setDisplay(display+=op)
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

      n1 = "" + resp;
      n2 = "";
      operador = "";
    }
  }


  return (
    <div id="calculator">
        <form action="" onsubmit="calcular()">
            <span id="display">{display}</span>
            <section id="buttonsGrid">
                <article id="numbersGrid">
                    <ButtonOp text="C" fx={()=>apaga()} class="operatorButton"></ButtonOp>
                    <ButtonOp></ButtonOp>
                    <ButtonOp text="^" fx={()=>leOperador("^")}></ButtonOp>
                    <ButtonNum text="7" fx={()=>leNumero("7")}></ButtonNum>
                    <ButtonNum text="8" fx={()=>leNumero("8")}></ButtonNum>
                    <ButtonNum text="9" fx={()=>leNumero("9")}></ButtonNum>
                    <ButtonNum text="4" fx={()=>leNumero("4")}></ButtonNum>
                    <ButtonNum text="5" fx={()=>leNumero("5")}></ButtonNum>
                    <ButtonNum text="6" fx={()=>leNumero("6")}></ButtonNum>
                    <ButtonNum text="1" fx={()=>leNumero("1")}></ButtonNum>
                    <ButtonNum text="2" fx={()=>leNumero("2")}></ButtonNum>
                    <ButtonNum text="3" fx={()=>leNumero("3")}></ButtonNum>
                    <ButtonNum></ButtonNum>
                    <ButtonNum text="0" fx={()=>leNumero("0")}></ButtonNum>
                    <ButtonNum></ButtonNum>
                </article>
                
                <article id="operatorsGrid">
                    <ButtonOp text="÷" fx={()=>leOperador("/")}></ButtonOp>
                    <ButtonOp text="x" fx={()=>leOperador("*")}></ButtonOp>
                    <ButtonOp text="-" fx={()=>leOperador("-")}></ButtonOp>
                    <ButtonOp text="+" fx={()=>leOperador("+")}></ButtonOp>
                    <ButtonSubmit text="=" fx={()=>calcular()}></ButtonSubmit>
                </article>
            </section>
        </form>
    </div>
  );
}

export default App;
