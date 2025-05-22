import './App.css'
import CardComponent from './components/CardComponent'
import HeaderMenu from './components/HeaderMenu'
import QrCodeCVComponent from './components/QrCodeCVComponent'
import SimpleSectionComponent from './components/SimpleSectionComponent'
import VideoHeroComponent from './components/VideoHeroComponent'

function App() {
 

  return (
    <>
       <HeaderMenu initTitle={"/image/logo.png"} />
       <VideoHeroComponent initTitle={"/video/video.mp4"} />
       <SimpleSectionComponent titleSection={"Chi sono"} paragraphSection={`   
          Mi chiamo Walter, sono un Web Developer Full-Stack con una forte passione per la tecnologia, la progettazione
          di interfacce moderne e l’ottimizzazione dell’esperienza utente. Dopo aver avviato il mio percorso da
          autodidatta, ho proseguito con formazione mirata e certificazioni, specializzandomi nello sviluppo di
          applicazioni web scalabili e accessibili.
          Sono una persona precisa, determinata e curiosa, che ama risolvere problemi e apprendere continuamente.
          Lavoro con metodo, spirito collaborativo e grande attenzione ai dettagli, combinando creatività e tecnica per
          creare soluzioni funzionali e user-friendly.`} />
        <CardComponent initTitle={"Skills & Certificazioni"} />
        <SimpleSectionComponent titleSection={"Cosa so fare in pratica"}
                                paragraphSection={`Durante il mio percorso da sviluppatore Full Stack ho acquisito una solida padronanza delle tecnologie front-end come HTML5, CSS3 e JavaScript, affiancate da framework moderni come React e Angular. Sul lato back-end, ho esperienza nello sviluppo in PHP 8, nella creazione di plugin per WordPress e Joomla, e nella gestione dei dati con SQL Server e Entity Framework. Lavoro con attenzione al dettaglio, ottimizzando l’esperienza utente e garantendo performance elevate su ogni dispositivo.
                                                  Il mio approccio unisce creatività, 
                                                  metodo e aggiornamento costante sulle novità del settore.`} />
        <QrCodeCVComponent link={"https://gestioneportineriagaleot.altervista.org/cv-walter.pdf"} />
    </>
  )
}

export default App
