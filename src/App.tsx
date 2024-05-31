import { Button, CheckBox } from './components/Button';
import './scss/main.scss';

function App() {
  return (
    <div className="App">
      <header>weone</header>
      <div>
        <h1>We One</h1>
        <Button size="large">
          hello
        </Button>
        <CheckBox id={"checkbox_1"} label={"체크박스"}/>
      </div>
    </div>
  );
}

export default App;
