import { type } from 'os'
import { useEffect } from 'react'
import { imcType } from '../../utils/imc'
import style from './Result.module.css'

interface Props{
    gender:string,
    imc:number,
    typeImc: string|null,
    setTypeImc: React.Dispatch<React.SetStateAction<string|null>>,
    idealWeigth: number|undefined
}
export const Result = ({gender, imc, typeImc, setTypeImc, idealWeigth}:Props)=>{
    const genderSelect = '1px 2px 13px #712'
    useEffect(()=>{
        setTypeImc(imcType(imc))
    }, [imc])
    return (
        <section className={style.result}>
            <div>
                <h1>{typeImc}</h1>
            </div>
            <div className={style.gender}>
                {gender === 'woman' ? 
                    <img src="assets/img/Result/mulher.png" alt=""/> : 
                    <img src="assets/img/Result/homem.png" alt=""/>}
            </div>
            <div>
                <p>Seu indice de massa corporal é de:</p>
                <h3>{imc!==Infinity && imc.toString()!== 'NaN' ? imc : '0'}kg/m2</h3>
            </div>
            <div>
                <p>Peso recomendado:</p>
                <h3>{idealWeigth}kg</h3>
            </div>
        </section>
    )
}