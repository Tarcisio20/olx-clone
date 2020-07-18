import React, { useState } from 'react'
import { PageArea } from './styled.js'
import useApi from '../../Helpers/OlxAPI'
import { doLogin } from '../../Helpers/AuthHandler'

import { PageContainer, PageTitle, ErrorMessage } from '../../Components/mainComponents'

const Page = () => {
    const api = useApi()
    // STATES
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberPassword, setRememberPassword] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState('')
    
    // FUNÇÕES
    const handlerSubmit = async e => {
        e.preventDefault()
        setDisabled(true)

        const json = await api.login(email, password)

        if(json.error){
            setError(json.error)
        }else{
            doLogin(json.token, rememberPassword)
            window.location.href = '/'
        }

        setDisabled(false)
    }


    // RETORNO
    return (
        <PageContainer>
            <PageTitle>Login</PageTitle>
            <PageArea>
                {error && 
                <ErrorMessage>{error}</ErrorMessage>
                }

                <form onSubmit={handlerSubmit}>
                    <label className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input type="email" required value={email} onChange={e=>setEmail(e.target.value)} disabled={disabled} />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input type="password" required value={password} onChange={e=>setPassword(e.target.value)} disabled={disabled} />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Lembrar Senha</div>
                        <div className="area--input">
                            <input type="checkbox" checked={rememberPassword} onChange={()=>setRememberPassword(!rememberPassword)} disabled={disabled} />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled} >Fazer Login</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    )
}

export default Page