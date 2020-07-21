import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderArea } from './styled'

import { isLogged, doLogout } from '../../../Helpers/AuthHandler'

const Header = () => {
    let logged = isLogged()

    const handlerLogout = () => {
        doLogout()
        window.location.href = '/'
    }
    
    return(
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/" >
                        <span className="logo-1">O</span>
                        <span className="logo-2">L</span>
                        <span className="logo-3">X</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        {logged && 
                        <>
                             <li>
                                <Link to="/my-account">Minha Conta</Link>
                            </li>
                            <li>
                                <button onClick={handlerLogout}>Sair</button>
                            </li>
                             <li>
                            <Link to="/post-an-ad" className="button">Post um anúncio</Link>
                        </li>
                        </>
                        }
                        {!logged && 
                        <>
                            <li>
                                <Link to="/signin">Login</Link>
                            </li>
                            <li>
                                <Link to="/signup">Cadastrar</Link>
                            </li>
                             <li>
                            <Link to="/signin" className="button">Post um anúncio</Link>
                        </li>
                        </>
                        } 
                       
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    )
}

export default Header