export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <img src="img/clublogo.svg" alt="Logo"/>
                <h1>
                  The Cheranalloor Club
                </h1>
                <p><b>Reg.No: EKM/TC/120/2022</b></p>
                <p><b>Motto: </b>Serving the mankind, serving the nature, is serving ourselves</p>
                <a
                  href='#about'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
