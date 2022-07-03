import logo from './logo.svg';
import './App.css';
import Page from './pages/Page';
import Category from './components/Category';
import { BrowserRouter } from 'react-router-dom'
import Search from './components/Search'
import styled from "styled-components"
import { Link } from 'react-router-dom';
import {GiKnifeFork} from "react-icons/gi"

function App() {
  
  return (
    <div className="App">
      <h1>YO! REACT IS DOPE!</h1>
      <BrowserRouter>
      <Nav>
        <GiKnifeFork />
          <Logo to={"/"}>Yayalicious</Logo>
      </Nav>
      <Search />
      <Category />
      <Page />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster two', cursive;
`

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    font-size: rem;
  }
`

export default App;
