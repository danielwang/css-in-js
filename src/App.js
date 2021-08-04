import Bpay from './components/Bpay';
import styled from 'styled-components';
import './App.css';

const Button = styled.button`
    padding: 1rem;
    background: red;
`

const Main = styled.main`
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    flex: 1 1 auto;
    background-color: teal;
`

function App() {
  return (
    <div className="App">
      <Main>
        <Button>click</Button>
      </Main>
      <Bpay billercode="12345" refnumber="98765" />
    </div>
  );
}

export default App;
