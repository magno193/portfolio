import {
  FaBirthdayCake,
  FaCog, FaGithub,
  FaLinkedin, FaMale,
  FaMapMarkerAlt, FaMobile,
  FaRegHeart
} from 'react-icons/fa';
import {
  MdBook, MdDashboard, MdEmail, MdSchool,
  MdStars, MdWork
} from 'react-icons/md';
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
              <FaGithub color="#fff" />
            </a>
            <a
              href={'https://www.linkedin.com/in/alexandre-ferreira-451b0b191/'}
              target="_blank"
              rel="noreferrer">
              <FaLinkedin color="#fff" />
            </a>
          </Links>
        </nav>
      </header>
      <BGImage>
        <div>
          <h1>Seja bem-vindo(a) ao meu website</h1>
          <span>Veja as informações abaixo para me conhecer mais <FaRegHeart /></span>
        </div>
      </BGImage>
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
                <a
                  href='https://github.com/magno193'
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>github.com/magno193</span>
                </a>
              </li>
              <li>
                <FaLinkedin />
                <a
                  href='https://www.linkedin.com/in/magno193/'
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>linkedin.com/in/magno193</span>
                </a>
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
            conversamos constantemente e remotamente, aplicando algumas práticas de <strong>Scrum</strong> para consolidar ideias de projetos web,
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

          <h2>Cursos</h2>
          <ul>
            <li>
              <div><MdSchool /></div>
              <div>
                <strong>Faculdade de Tecnologia de Botucatu | <span>2015 - 2019</span></strong>
                <h3>Superior em Análise e Desenvolvimento de Sistemas </h3>
                <span>
                  Curso focado em desenvolvimento, gerenciamento e análise de sistemas de computador,
                  englobando tanto sistemas web como sistemas desktop.
                </span>
              </div>
            </li>
            <li>
              <div><MdBook /></div>
              <div>
                <strong>Origamid | <span>Abril 2020 - sem limite</span></strong>
                <h3>Web Design Completo</h3>
                <span>
                  Curso para aprendizado e aplicação de HTML, CSS, Javascript para construção do projeto BikCraft.
                </span>
              </div>
            </li>
            <li>
              <div><MdBook /></div>
              <div>
                <strong>RocketSeat | <span>Outubro 2020 - Outubro 2021</span></strong>
                <h3>Node.js, React.js e React Native </h3>
                <span>
                  Curso para aprendizado do uso de linguagens como JavaScript e Typescript com utilização de
                  Node.js, React.js e React Native junto com aplicação de Docker e testes unitários.
                </span>
              </div>
            </li>
          </ul>

          <h2>Conhecimentos</h2>
          <ul>
            <li>
              <div><MdStars /></div>
              <div>
                <strong className="tech">Técnicas: <span>Git, Comunicação, Trabalho Remoto, Kanban, SOLID, Scrum</span></strong>
                <h3>Conhecimentos Gerais</h3>
                <span>
                  Acostumado em trabalhar de forma remota com equipe, realizando reuniões frequentes e também uso de método Kanban
                  para gerenciar fluxo de trabalho.
                </span>
              </div>
            </li>
            <li>
              <div>
                <MdDashboard />
              </div>
              <div>
                <strong className="tech">Ferramentas: <span>HTML, CSS, Javascript/Typescript, Figma, React.js, Next.js</span></strong>
                <h3>Front-End</h3>
                <span>
                  Utilização de componentes de React com Javascript ou Typescript para estilização de páginas
                   junto à biblioteca <em>styled-components</em>. Conheço também a ferramenta Figma para prototipação e criação de UI.
                </span>
              </div>
            </li>
            <li>
              <div>
                <FaCog />
              </div>
              <div>
                <strong className="tech">Ferramentas: <span>ASP.NET Core, Node.js, Banco de Dados, Javascript/Typescript</span></strong>
                <h3>Back-End</h3>
                <span>
                  Conhecimento em aplicação de método MVC quanto método API RESTful, banco de dados relacionais e não relacionais,
                  uso de ferramentas como ASP.NET Core e Node.js com utilização de bibliotecas pelo npm ou yarn dependendo da necessidade de cada projeto.
                </span>
              </div>
            </li>
          </ul>
        </article>
      </Content>
      <footer>
        <nav>
          <span>Website desenvolvido por Alexandre Ferreira com tecnologia Next.js</span>
          <Links>
            <a
              href='https://github.com/magno193'
              target="_blank"
              rel="noreferrer">
              <FaGithub color="#fff" />
            </a>
            <a
              href='https://www.linkedin.com/in/magno193/'
              target="_blank"
              rel="noreferrer">
              <FaLinkedin color="#fff" />
            </a>
          </Links>
        </nav>
      </footer>
    </Container>
  );
}

export default Home;
