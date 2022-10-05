import { useState } from "react";
import styles from "./App.module.css";
import PoweredImg from "./assets/img/powered.png";
import ArrowImg from './assets/img/leftarrow.png';
import { GridItem } from "./components/GridItem/GridItem";
import { levels, calcIMC, Level } from "./helpers/imc";

const App = () => {

  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleClick = () => {
    if (heightField && weightField) { 
      setToShow(calcIMC(heightField, weightField));
    } else {
      alert("Preencha todos os campos");
    }
  }

  const handleBackClick = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={PoweredImg} alt="#" width={'150px'} />
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.ladoEsquerdo}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Índice de massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso de cada pessoa.</p>

          <input 
          type="number"
          placeholder="Digite a sua Altura em metros Ex: 1.5"
          value={heightField > 0 ? heightField : '' }
          onChange={ e => setHeightField(parseFloat(e.target.value))}
          disabled={toShow ? true : false}
          />
          <input 
          type="number"
          placeholder="Digite a seu Peso em Kg. Ex: 73.8"
          value={weightField > 0 ? weightField : '' }
          onChange={ e => setWeightField(parseFloat(e.target.value))}
          disabled={toShow ? true : false}
          />

          <button onClick={handleClick} disabled={toShow ? true : false}
            >Calcular</button>
        </div>
        <div className={styles.ladoDireito}>
          {!toShow &&
          <div className={styles.grid}>
            {levels.map((item, key) => (
              <GridItem key={key} item={item} />
            ))}
          </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackClick}>
                <img src={ArrowImg} alt="" width={25} />
              </div>
              <GridItem item={toShow} />
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;