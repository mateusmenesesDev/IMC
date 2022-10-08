interface Props{
    weigth: number,
    height: number
}

export interface Iimc{
    title: string,
    min:number,
    max:number,
    imc?:number,
}
const imcTypes:Iimc[]=[
    {title:'Magreza', min:0, max:18.4},
    {title:'Normal', min:18.5, max:24.9},
    {title:'Sobrepeso', min:25, max:29.9},
    {title:'Obesidade', min:30, max:39.9},
    {title:'Obesidade Grave', min:40, max:1000},
]

export const imc = ({weigth, height}:Props)=>{
    const heigthSquare = Math.pow(height/100, 2)
    const imc = Number((weigth/heigthSquare).toFixed(2))
    return imc
}

export const imcType = (imc:number) =>{
    for (let i in imcTypes){
        if(imc>= imcTypes[i].min && imc<=imcTypes[i].max){
            return imcTypes[i].title
        }
    }
    return null
}

export const idealWeight = (heigth:number, gender:string) =>{
    if (gender==='woman'){
        return Number((((heigth)-100) * 0.85).toFixed(2))
    } else {
        return Number((((heigth)-100) * 0.90).toFixed(2))
    }
}