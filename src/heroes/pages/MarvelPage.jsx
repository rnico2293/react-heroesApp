import React from 'react'
import { HeroList } from '../components/HeroList';

export const MarvelPage = () => {
    return (
        <>
            <h2 className="px-3">Marvel Page </h2>
            <hr/>
            <HeroList publisher='Marvel Comics'/>
        </>
    )
}
