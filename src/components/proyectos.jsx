import '../style/general.scss';
import Videos from './videos';
import data from '../jsons/videos.json';

function Proyectos(){
  return(
    <section id='proyectos' className='proyectos__container'>
      <h2 className='proyectos__tittle'>Proyectos</h2>
      <div className='proyectos__videos'>
      {
        data.map(video => 
          <Videos link={video.link} image={video.image}/>  
        )
      }
      </div>
    </section>
  );
}

export default Proyectos;