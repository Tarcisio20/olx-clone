import React from 'react'
import { Link } from 'react-router-dom'

const Page = () => {
    return (
        <>
            <div>Página Inical</div>
            <Link to="/about">Sobre</Link>
        </>
    )
}

export default Page