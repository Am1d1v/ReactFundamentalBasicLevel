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
  const text = "Please log in";
  const logged = true;
  //const logged = false;
  const res = () => {
    return 'Logged In';
  }
  return(
    <button>{logged ? 'Enter' :text}</button>
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
