import '../Footer/index.css'

export default function Footer() {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <div className='footer'>
            <div className='footer-container'>
                <p>2022 - {year}</p>
                <div className='social-midias'>
                    <a href='#' active>Linkedin</a>
                    <a href='#'>Whatsapp</a>
                    <a href='#'>Instagram</a>
                    <a href='https://drive.google.com/uc?export=download&id=1TA_pWefRvNhifAceLlbxTAlGF5Aihomp'>Currículo</a>
                </div>
            </div>
        </div>
    )
}