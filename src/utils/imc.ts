interface Props{
    weigth: number,
    height: number
}

export interface Iimc{
    title: string,
    min:number,
    max:number,
}

const imcTypes:Iimc[]=[
    {title:'Magreza', min:0, max:18.4},
    {title:'Normal', min:18.5, max:24.9},
    {title:'Sobrepeso', min:25, max:29.9},
    {title:'Obesidade', min:30, max:39.9},
    {title:'Obesidade Grave', min:40, max:1000},
]

export const imc = ({weigth, height}:Props)=>{
    let imc = Number((weigth/(Math.pow(height/100, 2))).toFixed(2))
    let type = ''
    imcTypes.forEach(getType=>{
        if(imc>= getType.min && imc<=getType.max){
            type = getType.title
        }
    })
    if (imc.toString()==='NaN' || imc === Infinity){
        return ({imc:0, type})
    } else {
        return ({imc, type})
    } 
}

export const idealWeight = (heigth:number, gender:string) =>{
    if (gender==='woman'){
        const result = Number((((heigth)-100) * 0.85).toFixed(2))
        if (result>0){
            return result
        } else {
            return 0
        } 
    } else {
        const result = Number((((heigth)-100) * 0.90).toFixed(2))
        if (result>0){
            return result
        } else {
            return 0
        } 
    }
}