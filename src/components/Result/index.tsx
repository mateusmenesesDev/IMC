import style from './Result.module.css'

interface Props{
    gender:string
}
export const Result = ({gender}:Props)=>{
    const genderSelect = '1px 2px 13px #712'
    return (
        <section className={style.result}>
            <div>
                <h1>SOBREPESO</h1>
            </div>
            <hr></hr>
            <div className={style.gender}>
                {gender === 'woman' ? 
                    <img src="assets/img/Result/mulher.png" alt=""/> : 
                    <img src="assets/img/Result/homem.png" alt=""/>}
                
            </div>
            <div>
                <p>Seu indice de massa corporal é de:</p>
                <h3>27.70kg/m2</h3>
            </div>
            <div>
                <p>Peso recomendado:</p>
                <h3>68.55kg</h3>
            </div>
        </section>
    )
}