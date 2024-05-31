import { useEffect, useState } from "react";
import Card from "../components/card";
import Navbar from "../components/navbar";
import { gql, useQuery } from "@apollo/client";
import axios from 'axios'

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
    const [dataRick, setDataRick] = useState({})
    const [dataMorty, setDataMorty] = useState({})

    async function characterMorty(){
        try {
            let { data } = await axios({
                method: 'get',
                url: 'https://rickandmortyapi.com/api/character/2'
            })
            setDataMorty(data)
        } catch (error) {
            console.log(error, 'errornya sis');
        }
    }

    async function characterRick(){
        try {
            let { data } = await axios({
                method: 'get',
                url: 'https://rickandmortyapi.com/api/character/1'
            })
            setDataRick(data)
        } catch (error) {
            console.log(error, 'errornya sis');
        }
    }

    useEffect(()=>{
        characterMorty()
        characterRick()
    },[])

    return (
        <>
        <Navbar/>
        <h1>page Characters List</h1>

        {/* <div className="row gap-1" style={{marginTop:'70px', justifyContent:'center'}}>
            {
                data?.characters?.results.map(el=><Card key={el.id} data={el}/>)
            }
        </div> */}

        <div className="row gap-1" style={{marginTop:'70px', justifyContent:'center'}}>
            <Card data={dataRick}/>
            <Card data={dataMorty}/>
        </div>
        </>
    )
}