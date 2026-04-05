
import styles from './styles.module.css'

function Card(profile) {

    return(
        <>

        <div>
        <a class ={styles.title}>AGENTS-VALORANT</a>
        </div>

            <div className={styles.container}>
                <img src={profile.book} alt={profile.title} className={styles.book}/>
                <div>

            
            <h1>JETT</h1>

            <h2>Jett é uma agente Radiante da Coreia do Sul no Valorant, conhecida por sua agilidade extrema e controle do vento. Ex-chef de cozinha em Seul, ela se juntou ao Protocolo Valorant após um incidente com seus poderes. Ágil e independente, ela usa adagas e ventos para criar aberturas, sendo crucial para ataques rápidos e movimentação aérea</h2>

            
         

            <div class="botoes">


            <a class="botao-github" href="https://valorant-lore.fandom.com/wiki/Jett" target="_blank">Saiba mais</a>
            </div>
                    
                    
                </div>
            </div>

            <div className={styles.container}>
                <img src={profile.book2} alt={profile.title} className={styles.book}/>
                <div>

            
            <h1>SAGE</h1>

            <h2>Sage é uma agente da função Sentinela no Valorant, originária da China, especializada em suporte, cura e controle de mapa através de manipulação de terra (radianita). Suas habilidades incluem curar aliados/si mesma, criar barreiras, lentidão e reviver aliados, tornando-a crucial para manter a equipe viva e ditar o ritmo da partida</h2>

         

            <div class="botoes">
                

            <a class="botao-github" href="https://valorant.fandom.com/wiki/Sage" target="_blank">Saiba mais</a>
            </div>
                    
                    
                </div>
            </div>
             <div className={styles.container}>
                <img src={profile.book3} alt={profile.title} className={styles.book}/>
                <div>

            
            <h1>DEADLOCK</h1>

            <h2>Deadlock é a 23ª agente a entrar para o Protocolo VALORANT, exercendo a função de Sentinela. Originária da Noruega, ela utiliza um arsenal de nanofios de alta tecnologia para bloquear avanços e controlar áreas críticas do mapa.</h2>

         

            <div class="botoes">
                

            <a class="botao-github" href="https://valorant.fandom.com/wiki/Deadlock" target="_blank">Saiba mais</a>
            </div>
                    
                    
                </div>
            </div>
            
        </>
    )
}

export default Card