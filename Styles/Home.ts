import styled from 'styled-components';

export const Container = styled.main`
  margin: 0 auto;

  & > header {
    display: flex;
    align-items: center;
    height: 50px;
    background-color: #003049 ;
    box-shadow: 1px 1px #666;
  }

  & > header > nav {
    flex: 1;
    max-width: 1140px;
    padding: 0 2rem;
    height: 40px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #fff;
  font-family: 'Roboto Slab', serif;

  h1 {
    font-size: 1.6rem;
    position: relative;
  }

  h1::after {
    content: "|";
    position: absolute;
    left: 118px;
    font-weight: lighter;
  }

  strong {
    font-size: 1.1rem;
    margin-left: 20px;
  }
`;


export const Links = styled.div`
  text-decoration: none;
  color: #fff;
  min-width: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    width: 30px;
    height: 30px;
  }

  a:visited {
    color: #fff;
  }
`;

export const BGImage = styled.div`
	background: url('/images/header-title.png') center no-repeat;
	height: 280px;
	background-size: cover;
	margin-bottom: 40px;
`;

export const Content = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 32px;

  aside {
    min-width: 280px;
    margin-right: 40px;
  }

  article, aside > div {
    background-color: #fff;
    padding: 20px;
  }

  aside > div {
    box-shadow: 0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);
    margin-bottom: 40px;
    img {
      display: block;
      margin: 0 auto;
      border-radius: 50%;
    }

    h3 {
      font-family: 'Roboto Slab', serif;
      margin-top: 20px;
      margin-bottom: 8px;
      border-bottom: solid 1px #ccc;
    }

    em {
      color: #666;
    }

    ul {
      margin: 20px 0;

      li {
        margin: 8px 0;
        display: flex;
        align-items: center;
        color: #333;

        svg {
          margin-right: 10px;
        }
      }
    }
  }

  article {
    flex: 4;
    line-height: 1.5;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);
    margin-bottom: 40px;
    h2 {
      margin-top: 60px;
      margin-bottom: 15px;
      border-bottom: 1px solid #ccc;
      font-family: 'Roboto Slab', serif;
    }

    p {
      color: #333;
      margin: 30px 0;
    }

    ul {
      list-style: none;
      margin-top: 30px;

      li {
        display: flex;
        padding: 10px;
        margin-bottom: 20px;

        div > strong {
          font-size: 1.3rem;
          color: #222;
        }

        div > strong span {
          font-weight: lighter;
          color: #666;
          font-size: 0.85rem;
        }

        div > svg{
          height: 40px;
          width: 40px;
          margin: 10px;
          padding: 6px;
          color: #222;
          border: solid 1px;
          border-radius: 50%;
        }

        div > span {
          font-size: 0.93rem;
          color: #333;
        }
      }
    }
  }
`;
