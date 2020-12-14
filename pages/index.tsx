import {
  FaBirthdayCake, FaGithub,
  FaLinkedin, FaMale,
  FaMapMarkerAlt, FaMobile
} from 'react-icons/fa';
import { MdEmail, MdWork } from 'react-icons/md';
import {
  BGImage, Container, Content,
  HeaderTitle, Links
} from '../Styles/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <header>
        <nav>
          <HeaderTitle>
            <h1>Portfólio</h1>
            <strong>Alexandre Ferreira</strong>
          </HeaderTitle>
          <Links>
            <a
              href={'https://github.com/magno193'}
              target="_blank"
              rel="noreferrer">
              <FaGithub />
            </a>
            <a
              href={'https://www.linkedin.com/in/alexandre-ferreira-451b0b191/'}
              target="_blank"
              rel="noreferrer">
              <FaLinkedin />
            </a>
          </Links>
        </nav>
      </header>
      <BGImage />
      <Content>
        <aside>
          <div>
            <img src="/images/perfil.png" alt="Imagem de Perfil" />
            <h3>Alexandre Ferreira</h3>
            <em>Desenvolvedor Fullstack .Net e Javascript</em>
            <ul>
              <li>
                <FaBirthdayCake />
                <span>06/12/1993</span>
              </li>
              <li>
                <FaMale />
                <span>Masculino</span>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span>Botucatu | São Paulo</span>
              </li>
            </ul>
          </div>
          <div>
            <h3>Contatos</h3>
            <ul>
              <li>
                <FaMobile />
                <span>(14) 98101-2187</span>
              </li>
              <li>
                <MdEmail />
                <span>alexmlf93@gmail.com</span>
              </li>
              <li>
                <FaGithub />
                <span>github.com/magno193</span>
              </li>
              <li>
                <FaLinkedin />
                <span>linkedin.com/in/magno193</span>
              </li>
            </ul>
          </div>
          <div>
            <h3>Idiomas</h3>
            <ul>
              <li>
                <span><strong>Inglês</strong> | Intermediário</span>
              </li>
              <li>
                <span><strong>Português</strong> | Nativo/Fluente</span>
              </li>
            </ul>
          </div>
        </aside>
        <article>
          <h2>Sobre mim</h2>
          <p>
            Meu nome é Alexandre Magno de Lima Ferreira,
            tecnólogo graduado em análise e desenvolvimento de sistemas
            e aspirante aos temas de composição musical e design.
         </p>
          <p>
            Desde segundo semestre de 2019 estou atuando como desenvolvedor
            de softwares web, comecei trabalhando com a tecnologia <strong>ASP.Net Core MVC </strong>
            junto ao framework Serenity.
         </p>
          <p>
            No começo de 2020 adiante comecei a atuar como freelancer junto com outros desenvolvedores, onde
            conversamos constantemente remotamente e aplicando algumas práticas de <strong>Scrum</strong> para consolidar ideias de projetos web,
            é onde estou aperfeiçando as minhas <em>soft skills</em>.
            Portanto estou acostumado em trabalhar remotamente.
          </p>
          <p>
            Apesar de no começo ter utilizado tecnologias <strong>ASP.NET Core</strong> também, ao mesmo tempo,
            passei a estudar e aprofundar em <strong>Node.js</strong>, <strong>React.js</strong> utilizando
            <strong> Javascript</strong> ou <strong>Typescript</strong>,
            no qual em grande parte aprendi por estudos de cursos e leitura de documentação.
          </p>
          <p>
            Atualmente estudando framework <strong>Next.js</strong> com CMS e também em design UI/UX utilizando o software Figma.
          </p>

          <h2>Experiências</h2>
          <ul>
            <li>
              <div><MdWork /></div>
              <div>
                <strong>flowDev | <span>Janeiro 2020 - atual</span></strong>
                <h3>Desenvolvedor Fullstack</h3>
                <span>
                  Equipe de freelancers montada por 3 desenvolvedores atuando como prestador de serviços
                  em desenvolvimento de software no interior de São Paulo.
                </span>
              </div>
            </li>
            <li>
              <div><MdWork /></div>
              <div>
                <strong>Pélago Tecnologia | <span>Agosto 2019 - Janeiro 2020</span></strong>
                <h3>Desenvolvedor ASP .NET Core</h3>
                <span>
                  Desenvolvimento de sistema utilizando tecnologia ASP.NET Core
                  junto ao framework Serenity.
                </span>
              </div>
            </li>
          </ul>
        </article>
      </Content>
    </Container>
  );
}

export default Home;
