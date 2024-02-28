import React from 'react'
import { HeroList } from '../components/HeroList';

export const DcPage = () => {
    return (
        <>
          <h2 className="px-3">Dc Page</h2>
          <hr/>
          <HeroList publisher="DC Comics"/>
        </>
    )
}
