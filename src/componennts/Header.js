import React,{useState} from 'react'


const Header = ({setCity}) => {
    const [val,setValue] = useState({})
    const handalClick = (e) =>{
        setValue(e.target.value)
    }
    const handaleKeyDown = (e) =>{
        if(e.key === "Enter"){
            setCity(val)
        }
        
    }

    return (
        <header className='header'>
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__logo">
                        The Weaher Channel
                    </div>
                    <div className="header__relative">
                        <input  onInput= {handalClick} onKeyDown= {handaleKeyDown} className='header__input' type="text" placeholder='поиск по городу или индексу' />
                        <button className="header__btn">
                            <i class="fa-solid fa-magnifying-glass header__svg"></i>
                        </button>
                    </div>
                    <a href = "#" className="header__login">
                        Login
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header