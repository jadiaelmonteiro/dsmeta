import logo from '../../assets/img/logo.svg';
import './style.css';

function HeaderComp() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo} alt="DSMeta" />
                    <h1>DSMeta</h1>
                    <p>
                        Desenvolvido por
                        <a href="https://github.com/jadiaelmonteiro" target="_blak"> github.com/jadiaelmonteiro</a>
                    </p>
                </div>
            </header>
        </>
    )
}

export default HeaderComp;