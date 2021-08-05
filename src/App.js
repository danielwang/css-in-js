import Bpay from './components/Bpay';
import Payment from './components/Payment';
import styled from 'styled-components';
import './App.css';

const Main = styled.main`
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    flex: 1 1 auto;
`

const Section = styled.section`
    width:500px;
    display: grid;
    gap: 1.5rem;
`

function App() {
  return (
    <div className="App">
      <Main>
        <Section>
          <Bpay billercode="12345" refnumber="98765" />
          <Payment type="apple" value="5800"/>
          <Payment type="google" value="3600"/>
          <Payment type="bpay" value="5200"/>
          <Payment type="creditcard" value="6000"/>
          <Payment type="paylater" value="5888"/>
        </Section>
      </Main>
    </div>
  );
}

export default App;
