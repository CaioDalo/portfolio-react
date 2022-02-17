import '../Informations/index.css'
import minhaImagem from '../../assets/caio.jpeg'

export default function Informations() {
    return (
        <div className='informations'>
            <div className='informations-container-1'>
                <img src={minhaImagem} />

                <h2>Caio Daló de Souza</h2>

                
                <p>Sempre fui apaixonado por tecnologia e no que ela era capaz de fazer, sendo ajudando quem precisasse ou simplesmente facilitando a vida das pessoas. Pensando nisso, resolvi trilhar esse caminho como desenvolvedor front-end (sim, migrei de profissão), e para isso, tenho estudado com afinco para manter o aprendizado contínuo com cursos e pequenos projetos pessoais, com os quais tenho desenvolvido habilidades em HTML5, CSS3, JavaScript, ReactJS dentre outros. Além disso, tenho o inglês como conhecimento fundamental, e sendo assim, tenho melhorado dia a dia minhas habilidades em leitura, fala e escrita, tendo como foco a fluência.</p>
                <br />
                <p>Tenho experiência em: HTML, CSS, JavaScript, Requisições Ajax, jQuery, Bootstrap, Sass, WordPress, Design responsivo e cultura Ágil (Métodos).</p>
                <p>Estou estudando: ReactJS, Styled Components.</p>
                <br />
                <p>Sinta-se a vontade para entrar em contato!</p>
            </div>
        </div>
    )
}