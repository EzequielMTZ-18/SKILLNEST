
import './App.css'

function App() {

  const impresion = () => {
    console.log("Tu propia funcion esta funcionando")
  }
  const contador = 0;

  return (
    <>
      <h1>OnClick</h1>
      <button onClick={() => alert('Who else but Nig!')}>Clique aqui</button>
      <hr />
      <h1>onMouseEnter y onMouseOut</h1>
      <div style={{ border: "2px solid white", height: "2rem" }} onMouseEnter={() => console.log("Aentro")} onMouseOut={() => console.log("afoera")}></div>
      <hr />
      <h1>onChange 1</h1>
      <label htmlfor="gender">Genero:</label>
      <select name="gender" id="gender" onChange={() => alert("Cambiamo")}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <hr />
      <h1>onChange 2</h1>
      <label htmlfor="gender2">Genero:</label>
      <select name="gender2" id="gender2" onChange={(e) => alert(e.target.value)}>
        <option value="Male value">Male</option>
        <option value="Female value">Female</option>
        <option value="Other value">Other</option>
      </select>
      <hr />
      <h1>onInput</h1>
      <label htmlfor="nombre"></label >
      <input name="nombre" id="nombre" type="text" onInput={(e) => console.log(e.target.value)} />
      <hr />
      <h1>Ejecion funcion propia</h1>
      <button onClick={() => impresion()}>Ejecutar</button>
      <hr />
      <h1>Contador con useState (sin hacer)</h1>
      <p>{contador}</p>
      <button onClick={contador + 1}>Contar</button>




    </>
  )
}

export default App
