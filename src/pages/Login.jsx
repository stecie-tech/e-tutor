import MainLayout from "../layouts/MainLayout";
import Input from "../components/Input"
import Button from "../components/Button"
import { useState } from "react";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <MainLayout>
        <form style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px"
        }}
            onSubmit={(e) => {
                e.preventDefault()
                console.log({ email, password })
            }}
        >
            <Input type="text" value={email} handleInputchange={setEmail} name="email" iconName="user.png" placeholder="username or email" />
            <Input type="password" value={password} handleInputchange={setPassword} name="password" iconName="password.png" placeholder="secret password" />
            <Button text={"submit"} />
        </form>
    </MainLayout>
}