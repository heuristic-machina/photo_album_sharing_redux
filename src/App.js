// import logo from './logo.svg';
import './App.css';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className='title-landing'>
          Photo Sharing App
        </div>
        <div className='container mx-auto mt-12'>
          <UsersList />
        </div>
      </header>
    </div>
  );
}

export default App;
