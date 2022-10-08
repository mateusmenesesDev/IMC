import style from './Calculator.module.css'
import {ImMan, ImWoman} from 'react-icons/im'
export const Calculator = ()=>{
    return (
        <section className={style.calculator}>
            <div className={style.gender}>
                <p>Sexo:</p>
                <div className={style.genderImages}>
                    <ImMan size={90} className={style.icon}/>
                    <ImWoman size={90} className={style.icon}/>
                </div>
                
            </div>

            <div>
                <div className={style['input-title--details']}>
                    <label>Peso:</label>
                    <p>teste</p>
                </div>
                <input type='range' min='0' max='200'></input>
                <div className={style['input-details']}>   
                    <p>0 kg</p>
                    <p>200kg</p>
                </div>
                
            </div>
            <div>
                <div className={style['input-title--details']}>
                    <label>Peso:</label>
                    <p>teste</p>
                </div>
                <input type='range' min='0' max='200'></input>
                <div className={style['input-details']}>   
                    <p>0 kg</p>
                    <p>200kg</p>
                </div>
            </div>
        </section>
    )
}