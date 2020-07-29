import React, { useState,useEffect, useRef } from 'react'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import { PageArea } from './styled.js'
import useApi from '../../Helpers/OlxAPI'


import { PageContainer, PageTitle, ErrorMessage } from '../../Components/mainComponents'

const Page = () => {
    const api = useApi()

    const fileField = useRef()
    // STATES
    const [categories, setCategories] = useState([])
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [priceNegotiable, setpriceNegotiable] = useState(false)
    const [desc, setDesc] = useState('')

    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState('')
    
    // FUNÇÕES
    useEffect(()=>{
        const getCategories = async () => {
            const cats = await api.getCategories()
            setCategories(cats)
        } 
        getCategories()
    },[])


   /* const handlerSubmit = async e => {
        e.preventDefault()
        setDisabled(true)
        setError('')

        const json = await api.login(email, password)

        if(json.error){
            setError(json.error)
        }else{
            doLogin(json.token, rememberPassword)
            window.location.href = '/'
        }

        setDisabled(false)
    }*/

    const priceMask = createNumberMask({
        prefix:'R$ ',
        includeThousandsSeparator:true,
        thousandsSeparatorSymbol:'.',
        allowDecimal:true,
        decimalSymbol:','
    })

    // RETORNO
    return (
        <PageContainer>
            <PageTitle>Postar um Anuncio</PageTitle>
            <PageArea>
                {error && 
                <ErrorMessage>{error}</ErrorMessage>
                }

                <form onSubmit={/*handlerSubmit*/}>
                    <label className="area">
                        <div className="area--title">Titulo</div>
                        <div className="area--input">
                            <input type="text" required value={title} onChange={e=>setTitle(e.target.value)} disabled={disabled} />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Categoria</div>
                        <div className="area--input">
                           <select disabled={disabled} onChange={e=>setCategories(e.target.value)} required >
                            <option></option>
                            {categories && categories.map(i=>(
                                <option key={i._id} value={i._id} >{i.name}</option>
                            ))}
                           </select>
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Preço</div>
                        <div className="area--input">
                        <MaskedInput mask={priceMask} placeholder="R$ " disabled={disabled || priceNegotiable} value={price} onChange={e=>setPrice(e.target.value)} />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Preço Negociavel</div>
                        <div className="area--input">
                        <input type="checkbox" disabled={disabled}
                        checked={priceNegotiable}
                        onChange={e=>setpriceNegotiable(!priceNegotiable)} />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Descrição</div>
                        <div className="area--input">
                       <textarea disabled={disabled} value={desc} onChange={e=>setDesc(e.target.value)}></textarea>
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">Imagens (1 ou mais)</div>
                        <div className="area--input">
                      <input type="file" disabled={disabled} multiple ref={fileField} />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled} >Adicionar Anuncio</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    )
}

export default Page