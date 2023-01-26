// import caso1 from '../images/caso1.jpg';


function Videos( {link, image} ){
  return(
    <div className="videos__container">
      <a 
        className='videos__link' 
        href={link}
        target='_blank'
        rel="noreferrer">
        <img 
          className='videos__video' 
          src={require(`../images/${image}.png`)} 
          alt='description' />
      </a>
    </div>
  );
}

export default Videos;