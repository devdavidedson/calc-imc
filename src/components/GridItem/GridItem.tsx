import { Level } from "../../helpers/imc";
import styles from './GridItem.module.css';
import upImage from '../../assets/img/up.png';
import downImage from '../../assets/img/down.png';

type props = {
    item: Level;
};

export const GridItem = ({item}: props) => {

    return (
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridImg}>
                <img src={item.icon === 'up' ? upImage : downImage} alt="" width={30} />
            </div>
            <div className={styles.gridTitle}>{item.title}</div>

            {item.yourIMC &&
                <div className={styles.yourIMC}>
                    Seu IMC é de {item.yourIMC} kg/m²
                </div>
            }

            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    );
}