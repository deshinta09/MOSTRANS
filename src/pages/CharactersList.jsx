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
    console.log(data,'ini data');
    console.log(error,'ini error');

    return (
        <>
        <Navbar/>
        <h1>page Characters List</h1>
        {/* <div className="row gap-1" style={{marginTop:'70px', justifyContent:'center'}}>
            {
                data.map(el=><Card key={el.id} data={el}/>)
            }
        </div> */}

        {/* <div class="grid gap-0 row-gap-3">
            <div class="p-2 g-col-6">
                <div className="card" style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            <div class="p-2 g-col-6">
                <div className="card" style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            <div class="p-2 g-col-6">
                <div className="card" style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            <div class="p-2 g-col-6">
                <div className="card" style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div> */}
        </>
    )
}