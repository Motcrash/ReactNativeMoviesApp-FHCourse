import React, { createContext, useState } from 'react';

interface imageColors {
    primary: string,
    secondary: string,
}

interface contextProps {
    colors: imageColors,
    prevColors: imageColors,
    setMainColors: (colors: imageColors) => void,
    setPrevMainColors: (colors: imageColors) => void,
}

export const GradientContext = createContext({} as contextProps ); 

export const GradientProvider = ({ children }: {children: JSX.Element}) => {

    const [colors, setColors] = useState<imageColors>({
        primary: 'transparent',
        secondary: 'transparent',
    })

    const [prevColors, setPrevColors] = useState<imageColors>({
        primary: 'transparent',
        secondary: 'transparent',
    })

    const setMainColors = ( colors: imageColors ) => {
        setColors( colors )
    }

    const setPrevMainColors = ( colors: imageColors ) => {
        setPrevColors( colors )
    }
    
    return(
        <GradientContext.Provider value = {{
            colors,
            setMainColors,
            prevColors,
            setPrevMainColors,
        }}
        >
            {children}
        </GradientContext.Provider>
    )
}
