export default function Panel(props) {
    return (
      <div className="div_panel_buttons">
        <button id="btn_nuevo" type="button" 
          className={props.estilo==="white"?"btn dark":"btn white"} 
          disabled={props.hayBolsa?false:true}
          onClick={props.reiniciar}>Juego nuevo</button>
        <button id="btn_respuesta" type="button" 
          className={props.estilo==="white"?"btn dark":"btn white"}
          disabled={props.hayBolsa?false:true}
          onClick={props.seRinde}>Ver respuesta</button>
      </div>
    ); 
}

