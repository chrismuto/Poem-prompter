import './App.css';
import Input from './Components/Input';
import Responses from './Components/Responses';

function App() {
  return (
    <div className="d-flex-block justify-content-center">
      <h1 className="col-9 m-auto my-3">
        GPT3 Poem Prompter
      </h1>
      <Input />
      <Responses />
   </div>
  );
}

export default App;
