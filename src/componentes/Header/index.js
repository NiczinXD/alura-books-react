import './estilos.css'
import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../Icones'

function Header () {
    return (
        <header className="App-header">
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>       
        </header>
    )
}

export default Header