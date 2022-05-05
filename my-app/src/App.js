import React from 'react'

export const App = () => {
  return (
    <div className='wrapper'>
      <h1>Tuotevarasto</h1>
      <p>Lisää ja katso tuoteitta varastossa</p>
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'>

            <label>Tuotenimi</label>
            <input type="text" className='form-control' required></input>
            <br></br>
            <label>Tuotekuvaus</label>
            <input type="text" className='form-control' required></input>
            <br></br>
            <label>Tuote-ID</label>
            <input type="text" className='form-control' required></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'> Lisää</button>
          </form>

        </div>

        <div className='view-container'>


        </div>
      </div>
    </div>
  )
}

export default App