import { useState } from 'react';

export default function SignupStatePage(){
    const [email, setEmail]=useState("");
    const [password, setPassword] = useState("");
    const [eamilError,setEamilError] = useState("");

    function onChangeEmail(event){
        setEmail(event.target.value);
    }

    function onChangePassword(event){
        setPassword(event.target.value);
    }

    function onClickSignUp(){
        console.log(email)
        console.log(password)

        //검증하기
        if(email.includes('@')===false){
            // alert('이메일이 올바르지 않습니다.')
            setEamilError('이메일이 올바르지 않습니다.')
        }
    }

    return(
        <>
            이메일: <input type='text' onChange={onChangeEmail} />
            <div>{eamilError}</div>
            비밀번호: <input type='password' onChange={onChangePassword} />
            <button onClick={onClickSignUp}>회원가입</button>
        </>
    )
}