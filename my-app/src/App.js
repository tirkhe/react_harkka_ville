import React,{useState, useEffect} from 'react'
import { View } from './components/View';

//Alussa tein npm install bootstrap, npm install react-icons-kit


//Haetaan data local storagesta


const getDatafromLS=()=>{
  const data = localStorage.getItem('tuotteet');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}


export const App = () => {

  const [tuotteet, setTuote]=useState(getDatafromLS());

  const [tnimi, setTuotenimi]=useState('');
  const [thylly, setHylly]=useState('');
  const [lkm, setLukumäärä]=useState('');

const handleLisaaTuoteSubmit=(e)=>{
  e.preventDefault();

  let tuote={
    tnimi,
    thylly,
    lkm
  }

  setTuote([...tuotteet,tuote]);
  setTuotenimi('');
  setHylly('');
  setLukumäärä('');

}

//Poistaa tuotteet paikallisesta

const poistaTuote=(tnimi)=>{
  const filteredTuotteet=tuotteet.filter((element,index)=>{
    return element.tnimi !== tnimi
  })
  setTuote(filteredTuotteet);
}

//Tallennettaan paikalliseen

useEffect(()=>{
  localStorage.setItem('tuotteet',JSON.stringify(tuotteet));
},[tuotteet])

  return (
    <div className='wrapper'>
      <h1>Tuotevarasto</h1>
      <p>Lisää ja poista tuoteitta varastosta</p>
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleLisaaTuoteSubmit}>

            <label>Tuotenimi</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setTuotenimi(e.target.value)} value={tnimi}></input>

            <br></br>
            <label>Hylly</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setHylly(e.target.value)} value={thylly}></input>

            <br></br>
            <label>Lukumäärä</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setLukumäärä(e.target.value)} value={lkm}></input>

            <br></br>
            <button type="submit" className='btn btn-success btn-md'> Lisää</button>
          </form>

        </div>

        <div className='view-container'>
          {tuotteet.length>0&&<>
          <div className='table-responsive'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Tuotenimi</th>
                  <th>Hylly</th>
                  <th>Lukumäärä</th>
                  <th>Poista</th>
                </tr>
              </thead>
             <tbody>
               <View tuotteet={tuotteet} poistaTuote={poistaTuote}/>
               </tbody> 
            </table>
          </div>
          <button className='btn btn-danger btn-md' 
          onClick={()=>setTuote([])}>Poista kaikki tuotteet</button>
          </>}
        {tuotteet.length < 1 && <div> Ei tuoteitta lisätty</div>}

        </div>
      </div>
    </div>
  )
}

export default App