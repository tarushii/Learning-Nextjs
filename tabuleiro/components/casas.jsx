import styles from '../styles/casas.module.css'

export default function Casas(props) {

  return (
    <div
      className={ styles.casas }
      style={{backgroundColor: props.preta ? "#000" : "#fff"}}
    >
      
    </div>
  )
}