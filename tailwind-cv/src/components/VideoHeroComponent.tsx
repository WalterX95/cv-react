import type initComponent from "../types/initComponent";

const VideoHeroComponent: React.FC<initComponent> = ({initTitle}) => {
   
    return(
        <>
 <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video className="min-w-full min-h-full absolute object-cover" src={initTitle}  autoPlay={true} muted loop></video>
      </div>
      <div className="video-content space-y-2 z-10">
        <h1 className="font-light text-6xl">Web Developer React</h1>
        <h3 className="font-light text-3xl">con React, Angular e Tailwind</h3>
      </div>
    </section>
    </>
    )
}

export default VideoHeroComponent;