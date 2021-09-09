import "./App.css";
import Step1 from "./components/Step1/Step1";
import axios from "axios";

function App() {
  const api = axios.create({
    withCredentials: true,
    baseURL: "http://10.50.0.192:5000",
  });
  return <Step1 api={api} />;
}

export default App;
