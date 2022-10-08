import style from './Result.module.css'
export const Result = ()=>{
    return (
        <section className={style.result}>
            <div>
                <h1>SOBREPESO</h1>
            </div>
            <hr></hr>
            <div className={style.gender}>
                <img src="assets/img/Result/mulher.png" alt=""/>
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