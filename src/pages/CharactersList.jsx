import { useState } from "react";
import Card from "../components/card";
import Navbar from "../components/navbar";
import { gql, useQuery } from "@apollo/client";

export const get_characters = gql`
query {
  characters{
    results {
        id
      name
      gender
      image
      episode {
        name
        
      }
    }
  }
}
`
export default function CharactersList(){
    const { loading, data, error } = useQuery(get_characters)

    if (loading){
        return <div style={{ display:'flex', justifyContent: 'center', textAlign: 'center' }}>
            <img src="./loading.gif" alt="loading..." />
        </div>
    }

    return (
        <>
        <Navbar/>
        <div className="row gap-1" style={{marginTop:'70px', justifyContent:'center'}}>
            {
                data?.characters?.results.map(el=><Card key={el.id} data={el}/>)
            }
        </div>
        </>
    )
}