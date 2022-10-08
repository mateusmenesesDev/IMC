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
                <label>Peso:</label><br/>
                <input type='number' min='0' max='200'></input>
            </div>
            <div>
                <label>Estatura</label><br/>
                <input type='number' min='0' max='200'></input>
            </div>
        </section>
    )
}