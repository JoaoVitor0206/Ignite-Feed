import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/JoaoVitor0206.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João Vitor</strong>
              <time title="16 de Maio às 16:42h" dateTime="2024-05-16 16:42:30">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} /> 
            </button>
          </header>

          <p>Muito bom Devon, parabéns!!👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
      
    </div>
  )
}