import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post(props) {
  console.log(props);

  return (
    <article className={styles.post}> 
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/JoaoVitor0206.png" />
          <div className={styles.authorInfo}>
            <strong>João Vitor</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="16 de Maio às 16:42h" dateTime="2024-05-16 16:42:30">Publicado há 1h</time>
      </header>

      <div className={styles.content}>

      </div>  

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder="Deixe seu comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}