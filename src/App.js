import {useEffect, useState} from "react";
import "./App.css";
import Step1 from "./components/Step1/Step1";
import axios from "axios";


const api = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:5000",
});

function App() {
    const [lead, setLead] = useState(null);

    useEffect(() => {
        api.get('/v1/lead/auth')
            .then(res => {
                console.log("res", res);
                if (res.data.success) {
                    setLead(res.data.data);
                }
            })
            .catch(err => {
                console.log("Err:", err);
                setLead(null);
            });
    }, []);

    return (
        <>
            {lead === null ? <Step1 api={api}/> : null}
            {lead && lead.step === 1 ? <Step1 lead={lead} api={api}/> : null}
        </>
    );
}

export default App;
