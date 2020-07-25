import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { PageArea } from './styled.js'
import useApi from '../../Helpers/OlxAPI'

import { PageContainer  } from '../../Components/mainComponents'

const Page = () => {
    const api = useApi()
    // STATES
    const {id } = useParams()
    const [loading, setLoading] = useState()
    const [adInfo, setAdInfo] = useState([])
    
    // FUNÇÕES
   


    // RETORNO
    return (
        <PageContainer>
            <PageArea>
                <div className="leftSide">
                    <div className="box">
                        <div className="adImage"></div>
                        <div className="adInfo">
                            <div className="adName"></div>
                            <div className="adDescription"></div>
                        </div>
                    </div>
                </div>
                <div className="rightSide"></div>
            </PageArea>
        </PageContainer>
    )
}

export default Page