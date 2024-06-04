import { Button, SignIn } from './components';
import './scss/main.scss';

function App() {
  return (
    <div className="App">
      <header>weone</header>
      <main style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <section style={{ borderTop: '1px solid black' }}>
          <h1>Text Test</h1>
          <article>We One</article>
        </section>
        <section style={{ borderTop: '1px solid black' }}>
          <h1>Button</h1>
          <Button size="large">hello</Button>
        </section>
        <section style={{ borderTop: '1px solid black' }}>
          <h1>Sign</h1>
          <SignIn />
        </section>
      </main>
    </div>
  );
}

export default App;
