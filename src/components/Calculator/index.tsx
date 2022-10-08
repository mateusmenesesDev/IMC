import style from './Calculator.module.css'
export const Calculator = ()=>{
    return (
        <section className={style.calculator}>
            <div className={style.gender}>
                <p>Sexo:</p>
                <div className={style.genderImages}>
                    <img src="assets/img/Calculator/man.png" alt=""/>
                    <img src="assets/img/Calculator/woman.png" alt=""/>
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