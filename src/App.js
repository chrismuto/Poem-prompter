import './App.css';
import Input from './Components/Input';
import Responses from './Components/Responses';

function App() {
  return (
    <div className="d-flex-block justify-content-center">
      <h1 className="col-9 m-auto my-3">
        GPT-3 Storyteller
      </h1>
      <p className="col-9 m-auto mb-3">
        Select an engine and write a prompt. Be more descriptive for a better story!
      </p>
          <Input />
          <Responses />
   </div>
  );
}

export default App;
