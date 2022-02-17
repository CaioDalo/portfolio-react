import '../Header/index.css'


export default function Header() {

    return (
        <div className='header'>
            <div className='header-container'>
                <h3>Bem vindo!</h3>
                <div className='menu'>
                    <div>
                        <input
                        defaultChecked
                        id='about-me' 
                        value='about-me' 
                        name='checkbox-header' 
                        type='radio' 
                        />
                        <label for='about-me'>Sobre mim</label>
                    </div>

                    <div>
                        <input
                        id='works' 
                        value='works' 
                        name='checkbox-header' 
                        type='radio' 
                        />
                        <label for='works'>Trabalhos</label>
                    </div>

                    <div>
                        <input
                        id='contact' 
                        value='contact' 
                        name='checkbox-header' 
                        type='radio' 
                        />
                        <label for='contact'>Contato</label>
                    </div>
                    <a href='https://drive.google.com/uc?export=download&id=1TA_pWefRvNhifAceLlbxTAlGF5Aihomp'>Currículo</a>
                </div>
            </div>
        </div>
    )
}