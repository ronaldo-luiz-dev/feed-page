import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css'

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1665512983234-5053c892365b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=60" 
             />
        
            <div className={styles.profile}>
               <Avatar src="https://github.com/ronaldo-luiz-dev.png" />
                
                <strong>Ronaldo Luiz</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine />
                    editar seu perfil
                </a>
            </footer>
        </aside>

    );
}