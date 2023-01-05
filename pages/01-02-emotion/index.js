import {Email,EmailInput,Label} from '../../styles/emotion'

export default function EmotionPage() {

    //여기는 자바스크립트 쓰는곳

    return(
        <div>
            <Label>아이디</Label>
            <EmailInput type="text"/>
            <Label>비밀번호</Label>
            <EmailInput type="text"/>
            
        </div>
    )
}