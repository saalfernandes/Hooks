import Tenis from "../../assets/Enigmadomedo.jpg"
import React, {useState} from "react"
import "./App.css"

 function Card() {
  const [count, setCount] = useState(0)

  function oisom() {

    setCount(count + 1)
  }
  function issoECalypso() {
    if(count<=0){
      alert("Valor inválido")
    } else{
      setCount(count-1)
    }
  }
  return (
    <>
      <section>
        <div className="card">
            <div>
              <img src={Tenis} alt="" />
            </div>
            <div>
              <h4>Tenis Maneiro</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="contagem">
              <button onClick={issoECalypso}>-</button>
              <p>{count}</p>
              <button onClick={oisom}>+</button>
            </div>
        </div>
      </section>
    </>
  )
}

export default Card