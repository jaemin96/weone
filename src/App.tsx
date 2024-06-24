import { ThemeProvider } from './contexts';
import Router from './router';
import './scss/main.scss';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
