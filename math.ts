// doing export default and named export in 1 program

function add(num1:number,num2:number):string{
    const result:number=num1+num2
    return `addition ${result}`
}

const addition:string="addition is done"


function sub(num1:number,num2:number):string{
    const result:number=num1-num2
    return `subtraction ${result}`
}

const subtraction:string="subtraction is done"


export default function mul(num1:number,num2:number):string{
    const result:number=num1*num2
    return `multiplication ${result}`
}

const multiply:string="multiplication is done"

export {add,addition,sub,subtraction,mul,multiply}

