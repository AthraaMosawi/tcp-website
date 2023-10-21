import { useEffect, useState, createContext } from "react";
import axios from "axios";
const Context = createContext();

export function EmployeesData({ children }) {
    const employeesUrl = "https://tcp-server-66641451cde5.herokuapp.com/employees";
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const getEmployees = async () => {
            await axios
                .get(employeesUrl)
                .then((response) => {
                    console.log(response.data, "this one");
                    setEmployees(response.data);
                })
                .catch((err) => {
                    setError(err.message);
                });
        };
        getEmployees();
    }, []);

    return (
        <>
            <Context.Provider value={{ employees, error, setEmployees, setError }}>
                {children}
            </Context.Provider>
        </>
    );
}

export default Context;