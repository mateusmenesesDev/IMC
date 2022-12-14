import { Calculator } from "./components/Calculator";
import { Result } from "./components/Result";
import style from './App.module.css'
import { useEffect, useState } from "react";
import { Iimc } from "./utils/imc";

function App() {
  const[woman, setWoman] = useState(true)
  const[man, setMan] = useState(false)
  const[gender, setGender] = useState('')
  const[imc, setImc] = useState<null|{imc:number, type:string}>(null)
  const[idealWeigth, setIdealWeight] = useState<number>()
  
  useEffect(()=>{
    if(woman){
      setGender('woman')
    } else {
      setGender('man')
    }
  }, [man, woman])

  return (
    <div className={style.app}>
      <Result gender={gender} imc={imc} idealWeigth = {idealWeigth}/>
      <Calculator man={man} woman={woman} setWoman={setWoman} setMan={setMan} setImc={setImc}  setIdealWeigth = {setIdealWeight} gender={gender}/>
    </div>
  );
}

export default App;
