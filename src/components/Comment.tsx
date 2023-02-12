import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react';

import styles from './Comment.module.css'

interface CommentProps {
    content: string;
    onDeleteComment: (comment:string) => void;
}

export function Comment({content, onDeleteComment}:CommentProps) {

    const [likeCount,setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);
    }
    //outra abordagem melhor
    function handleLikeComment(){
        setLikeCount((state) =>{
            //console.log(state)
            return state + 1
        })

        //abordagem simples
        //setLikeCount(likeCount + 1)
    }
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/Ronaldo-Oliveira99.png" alt="" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Marcuse Juli</strong>
                            <time title='04 de Janeiro às 07:29h' dateTime='2023-01-04 07:29:17'> Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment}  title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button  onClick={handleLikeComment} >
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>
        </div>
    )
};