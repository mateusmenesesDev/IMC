import { Calculator } from "./components/Calculator";
import { Result } from "./components/Result";
import style from './App.module.css'

function App() {
  return (
    <div className={style.app}>
      <Result/>
      <Calculator/>
    </div>
  );
}

export default App;
