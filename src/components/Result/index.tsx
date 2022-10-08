import style from './Result.module.css'

interface Props{
    gender:string,
    imc:number
}
export const Result = ({gender, imc}:Props)=>{
    const genderSelect = '1px 2px 13px #712'
    return (
        <section className={style.result}>
            <div>
                <h1>SOBREPESO</h1>
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
                <h3>68.55kg</h3>
            </div>
        </section>
    )
}