import EstiloCondicional from "../../components/estiloCondicional"

export default function usandoEstiloCondicional() {
  
  return (
    <div>
      <EstiloCondicional numero={5} color="#000" direita />
      <EstiloCondicional numero={-1} color="#fff" />
    </div>
  )
}