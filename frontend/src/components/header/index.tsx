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
                        <a href="https://github.com/jadiaelmonteiro" target="_blak"> jadiael.monteiro@gmail.com</a>
                    </p>
                </div>
            </header>
        </>
    )
}

export default HeaderComp