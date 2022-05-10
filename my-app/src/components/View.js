import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'



export const View = ({tuotteet,poistaTuote}) => {

    return tuotteet.map(tuote=>(

        <tr key={tuote.tnimi}>
            <td>{tuote.tnimi}</td>
            <td>{tuote.thylly}</td>
            <td>{tuote.lkm}</td>
           <td className='delete-btn' onClick={()=>poistaTuote(tuote.tnimi)}>
               X
               </td> 
        </tr>
    ))
}