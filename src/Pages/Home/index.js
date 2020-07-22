import React, { useState } from 'react'
import { PageArea, SearchArea } from './styled.js'
import useApi from '../../Helpers/OlxAPI'


import { PageContainer } from '../../Components/mainComponents'

const Page = () => {
    const api = useApi()
    // STATES
    
    
    // FUNÇÕES


    // RETORNO
    return (
        <>
        <SearchArea>
            <PageContainer>
                <div className="searchBox" >
                    <form method="GET" action="/ads" >
                        <input type="text" name="q" placeholder="O qur você procura?" />
                        <select name="state" >
                            <option></option>
                        </select>
                        <button>Pesquisar</button>
                    </form>
                </div>
                <div className="categoryList" ></div>
            </PageContainer>
        </SearchArea> 
        <PageContainer>
            <PageArea>
               ...
            </PageArea>
        </PageContainer>
        </>
    )
}

export default Page