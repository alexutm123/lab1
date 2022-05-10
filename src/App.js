import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 onClick={registration("Pilici", "123")}>  Pilici CR-193 </h1>
          <input href="" class="rounded-input" type="text" placeholder="Login" onChange={(e) => localStorage.setItem("registerUser", e.target.value)}></input>
          <input href="" class="rounded-input" placeholder="Password" type="password" onChange={(e) => localStorage.setItem("registerPass", e.target.value)}></input>
          <button href="" class="gradient-button" onClick={checkIfExist}>Enter</button>
      </header>
    </div>
  );
}

export default App;

function registration(username, password)
{
    localStorage.setItem("user", username);
    localStorage.setItem("pass", password);
}

function checkIfExist()
{
    if (localStorage.getItem("user") == localStorage.getItem("registerUser"))
    {
        if (localStorage.getItem("pass") == localStorage.getItem("registerPass"))
        {
            alert("Привет " + localStorage.getItem("user"))
        }
        else
        {
            alert("Не тот  логин или пароль")
        }
    }
    else
    {
        alert("Не тот  логин или пароль")
    }
}