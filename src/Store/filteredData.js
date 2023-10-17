import React, { createContext } from 'react'
import { useState } from 'react'

const Context = createContext("");

export function FilteredDataProvider({ children }) {

    const [filteredCourses, setFilteredCourses] = useState([]);
    const [notFound, setNotFound] = useState("");
    const [searchValue, setSearchValue] = useState("");



    return (
        <Context.Provider value={{ filteredCourses, setFilteredCourses, notFound, setNotFound, searchValue, setSearchValue }}>
            {children}
        </Context.Provider>
    )
}

export default Context
