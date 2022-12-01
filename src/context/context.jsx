import React from "react";
import { useState, createContext, useContext } from "react";

const CountContext = createContext()

export const useCountContext = () => {
    const context = useContext(CountContext)
    const [count, setCount] = context.count
    const [toggle, setToggle] = context.toggle

    const handleTheme = () => {
        setToggle((prev) => !prev)
    }

    const handleCount = (number) => {
        if (number === 0) {
            setCount(0)
        } else {
            setCount((c) => c + number)
        }
    }
    
    return {
        handleCount,
        handleTheme,
        count,
        toggle
    }
}

export const CountProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    const [toggle, setToggle] = useState(true)

    return (
        <CountContext.Provider
            value={{ count: [count, setCount], toggle: [toggle, setToggle] }}
        >
            {children}
        </CountContext.Provider>
    )
}
