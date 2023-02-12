import { AirplaneInFlight } from 'phosphor-react'
import styles from './Header.module.css'
import logo from '../assets/logo.svg'

export function Header() {
    return(

        <header className={styles.header}>
            <img src={logo} alt="Logotipo" />
            <strong>My Feed</strong>
            <AirplaneInFlight size={32} />
        </header>
    );
}