import logo from './logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from './actions/action';
import './App.css';
import styled from 'styled-components';

const ChangeValueButton = styled.button`
  display: inline-flex;

  justify-content: center;
  align-items: center;
  background-color: #61dafb;
  font-size: 36px;
  border: 0;
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  margin: 1rem;
`;

const ButtonWrapper = styled.div`
  margin: 1rem;
`;

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const plusNum = () => {
    dispatch(increase());
  };

  const minusNum = () => {
    dispatch(decrease());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>{count}</span>
        <ButtonWrapper>
          <ChangeValueButton onClick={plusNum}>+</ChangeValueButton>
          <ChangeValueButton onClick={minusNum}>-</ChangeValueButton>
        </ButtonWrapper>
      </header>
    </div>
  );
}

export default App;
