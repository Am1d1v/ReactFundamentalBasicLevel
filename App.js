import './App.css';


const Header = function(){
  return (<h2>Some Header Text</h2>)
};

const Field =  function(){
  return(
    <input placeholder='Type here' type='text'/>
  )
}

function Btn(){
  const text = "Log In";
  const res = () => {
    return 'Logged In';
  }
  return(
    
    <button>{res()}</button>
  )
}


function App() {
    return(
      <div className="App">
        <Header />
        <Field />
        <Btn />

      </div>
    ); 
}

export default App;
