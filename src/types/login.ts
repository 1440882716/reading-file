interface loginData {
    phone:string
    password:string
}
interface phoneCode{
    phone:string
    code:string
}
export class InitData{
    loginType:number=1
    findStep:number=1
    loginForm:loginData={
        phone:'',
        password:''
    }
    codeLogin:phoneCode={
        phone:"",
        code:"" 
    }
    
}