import { type } from 'os'
import { useEffect } from 'react'
import { Iimc} from '../../utils/imc'
import style from './Result.module.css'

interface Props{
    gender:string,
    imc:{imc:number, type:string}|null,
    idealWeigth: number|undefined
}
export const Result = ({gender, imc, idealWeigth}:Props)=>{
    return (
        <section className={style.result}>
            <div>
                <h1>{imc?.type}</h1>
            </div>
            <div className={style.gender}>
                {gender === 'woman' ? 
                    <img src="assets/img/Result/mulher.png" alt=""/> : 
                    <img src="assets/img/Result/homem.png" alt=""/>}
            </div>
            <div>
                <p>Seu indice de massa corporal é de:</p>
                <h3>{imc?.imc}kg/m2</h3>
            </div>
            <div>
                <p>Peso recomendado:</p>
                <h3>{idealWeigth}kg</h3>
            </div>
        </section>
    )
}