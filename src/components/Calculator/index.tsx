import style from './Calculator.module.css'
import {ImMan, ImWoman} from 'react-icons/im'
import { useState } from 'react'
export const Calculator = ()=>{
    const[weigth, setWeigth] = useState<number>(0)
    const[height, setHeight] = useState<number>(0)
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
                    <p>{weigth}</p>
                </div>
                <input type='range' min='0' max='200' value={weigth} onChange={event=>setWeigth(event.target.valueAsNumber)}></input>
                <div className={style['input-details']}>   
                    <p>0 kg</p>
                    <p>200kg</p>
                </div>
                
            </div>
            <div>
                <div className={style['input-title--details']}>
                    <label>Estatura:</label>
                    <p>{height}</p>
                </div>
                <input type='range' min='0' max='200' value={height} onChange={event=>setHeight(event.target.valueAsNumber)}></input>
                <div className={style['input-details']}>   
                    <p>0 kg</p>
                    <p>200kg</p>
                </div>
            </div>
        </section>
    )
}