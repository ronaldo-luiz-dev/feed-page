import {format, formatDistanceToNow} from 'date-fns' 
import ptBR from 'date-fns/locale/pt-BR' 
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

//utilização de typescript
//interface = objeto
interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: string;
    content: string;
}


interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[];
}


// para a manipulação de datas, exite o INTL -> mdn intl date.
// porem será usado a biblioteca  date-fns // parei video 6:10
export function Post({author,publishedAt,content}:PostProps) {

    // estado 
    const [comments,setComment] = useState([
        'Fusce ut mi eget leo feugiat porttitor in sit amet diam.' ,
    ]);

    // estado para armazenar o texto digitado dentro do input
    const [newCommentText,setnewCommentText] = useState('');

    // formatação de datas
    const publishedDateFormatted = format(publishedAt,"d 'de' LLLL 'às' HH:mm",{locale:ptBR})
    // publicada a x tempo da data atual (publishedDateFormatted)
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale:ptBR,
        addSuffix: true
    });

    // evento do botao que submete a informacao do textarea
    function handleCreateNewComment(event: FormEvent){
        event.preventDefault();
       //const newCommentText = event.target.area1.value; => alterado para um estado

       //pega a cadeia de caracteres mais recentes digitados
        setComment([...comments, newCommentText]);
        
        //event.target.comment.value = ''  => programação imperativa: (evitar isso)
        setnewCommentText('') //=> programação declarativa (utilizando estado)

    }

    // evento do textarea, text digitado
    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity ('');
        setnewCommentText(event.target.value);
    }
    //evento que capta a validação do textarea
    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatório');
    }
      // evento do textarea, text digitado
    function deleteComment(commentToDelete: string){
        const commentsWithoutDeleteOne = comments.filter(comment => {
        return  comment !== commentToDelete;
    })
        setComment(commentsWithoutDeleteOne);
    }

    //para validar formulario
    const isNewCommentEmpty= newCommentText.length == 0

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}> 
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line=>{
                    if(line.type === 'paragraph'){

                        //a key é colocada no primeiro elemento renderizado
                        return <p key={line.content}>{line.content}</p>
                    }else if(line.type === 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>
            
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
               
                    name='comment'
                    placeholder='Deixe um comentário'
                    // toda vez que newCommentText mudar, a text area vai refletir essa alteração
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required 
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>
                        Comentar
                    </button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return(
                        <Comment 
                            key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
       
    );
}