import { Calculator } from "./components/Calculator";
import { Result } from "./components/Result";
import style from './App.module.css'
import { useEffect, useState } from "react";

function App() {
  const[woman, setWoman] = useState(true)
  const[man, setMan] = useState(false)
  const[gender, setGender] = useState('')
  const[imc, setImc] = useState<number>(0)
  useEffect(()=>{
    if(woman){
      setGender('woman')
    } else {
      setGender('man')
    }
    console.log('gender',gender)
  }, [man, woman])
  console.log('gender2',gender)
  console.log('homem:', man)
  console.log('mulher:', woman)
  return (
    <div className={style.app}>
      <Result gender={gender} imc={imc}/>
      <Calculator man={man} woman={woman} setWoman={setWoman} setMan={setMan} setImc={setImc} gender={gender}/>
    </div>
  );
}

export default App;
