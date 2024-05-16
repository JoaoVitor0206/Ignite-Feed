import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}> 
      <header>
        <div className={styles.author}>
          <img src="https://github.com/JoaoVitor0206.png" />
          <div className={styles.authorInfo}>
            <strong>João Vitor</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="16 de Maio às 16:42h" dateTime="2024-05-16 16:42:30">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
      <p>Fala galeraa 👋</p>
      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
      <p>👉<a href="">jane.design/doctorcare</a></p>
      <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>  
    </article>
  )
}