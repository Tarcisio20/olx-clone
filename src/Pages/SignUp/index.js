import React, { useState, useEffect } from 'react'
import { PageArea } from './styled.js'
import useApi from '../../Helpers/OlxAPI'
import { doLogin } from '../../Helpers/AuthHandler'

import { PageContainer, PageTitle, ErrorMessage } from '../../Components/mainComponents'

const Page = () => {
    const api = useApi()
    // STATES
    const [name, setName] = useState('')
    const [stateLoc, setStateLoc] = useState('')
    const [email, setEmail] = useState('')
    const [stateList, setStateList] = useState([])
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState('')
    
    // FUNÇÕES
    useEffect(()=>{
        const getStates = async () => {
            const slist = await api.getStates()
            setStateList(slist)
        }
        getStates()
    },[])

    const handlerSubmit = async e => {
        e.preventDefault()
        setDisabled(true)
        setError('')

        if(password !== confirmPassword){
            setError('Senhas diferentes!')
            return
        }

        const json = await api.register(name, stateLoc, email, password)

        if(json.error){
            setError(json.error)
        }else{
            doLogin(json.token)
            window.location.href = '/'
        }

        setDisabled(false)
    }


    // RETORNO
    return (
        <PageContainer>
            <PageTitle>Cadastro</PageTitle>
            <PageArea>
                {error && 
                <ErrorMessage>{error}</ErrorMessage>
                }

                <form onSubmit={handlerSubmit}>
                    <label className="area">
                        <div className="area--title">Nome Completo</div>
                        <div className="area--input">
                            <input type="text" required value={name} onChange={e=>setName(e.target.value)} disabled={disabled} />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Estado</div>
                        <div className="area--input">
                            <select value={stateLoc} onChange={e=>setStateLoc(e.target.value)} required >
                                <option></option>
                                {stateList.map((i,k)=>(
                                    <option key={k} value={i._id}>{i.name}</option>
                                ))}
                            </select>
                        </div>
                    </label>

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
                        <div className="area--title">Confirmar Senha</div>
                        <div className="area--input">
                            <input type="password" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} disabled={disabled} />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled} >Fazer Cadastro</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    )
}

export default Page