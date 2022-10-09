import style from './Calculator.module.css'
import {ImMan, ImWoman} from 'react-icons/im'
import { useEffect, useState } from 'react'
import { idealWeight, Iimc, imc } from '../../utils/imc'

interface Props{
    man: boolean,
    woman: boolean,
    setWoman: React.Dispatch<React.SetStateAction<boolean>>,
    setMan: React.Dispatch<React.SetStateAction<boolean>>,
    setImc: React.Dispatch<React.SetStateAction<{imc:number, type:string}|null>>,
    setIdealWeigth: React.Dispatch<React.SetStateAction<number|undefined>>,
    gender: string
}
export const Calculator = ({man, woman, setWoman, setMan, setImc, setIdealWeigth, gender}:Props)=>{
    const[weigth, setWeigth] = useState<number>(0)
    const[height, setHeight] = useState<number>(0)
    function imageClick(){
        setMan(!man)
        setWoman(!woman)
    }
    const genderSelect = '1px 2px 13px #712'
    useEffect(()=>{
        setImc(imc({height,weigth}))
        setIdealWeigth(idealWeight(height, gender))
    }, [height, weigth, gender])
    return (
        <section className={style.calculator}>
            <div className={style.gender}>
                <p>Sexo:</p>
                <div className={style.genderImages}>
                    <ImMan size={70} className={style.icon} onClick={imageClick} style={{boxShadow: man ? genderSelect:''}}/>
                    <ImWoman size={70} className={style.icon} onClick={imageClick} style={{boxShadow: woman ? genderSelect:''}}/>
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