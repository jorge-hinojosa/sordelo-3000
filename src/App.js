import photo from './assets/avatar_blue.png';
import sordelo_logo from './assets/sordelo-logo-white.png'
import { EventLink } from './components'
import { EVENTS } from './events'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={photo} className="App-logo" alt="logo" />
        <img src={sordelo_logo} className="sordelo-logo" alt='sordelo logo'/>
      </header>
      <div className='content-container'>
        <div className='link-card'>
          <h1>Catch me at</h1>
          <div className='link-card-content'>
            {
              EVENTS.slice(2, EVENTS.length).map(e => (
                <EventLink
                  link={e.link}
                  date={e.date}
                  event={e.event}
                />
              ))
            }
          </div>
        </div>

        <div className='link-card'>
          <h1>Last seen at</h1>
            {
              EVENTS.slice(0, 2).reverse().map(e => (
                <EventLink
                  link={e.link}
                  date={e.date}
                  event={e.event}
                />
              ))
            }
        </div>

        <div className='link-card bio'>
          <h1>Bio</h1>
          <div>
            <p>
              Musician, producer, and dj based in Dallas, TX. I've been at this shit for like 13 years. Let's make it happen.
            </p>
            <p>
              My favorite genres to spin and produce are house, latin, funk, and pop.
            </p>
            <p>
              My strongest instruments are guitar, bass, and drums. I use Logic Pro X for production.
            </p>
          </div>
        </div>

        <div className='link-card'>
          <h1>HMU at</h1>
          <div>
            <p>
              <a
                href="mailto:sordelomusic@protonmail.com"
                target="_blank" rel="noopener noreferrer"
              >
                sordelomusic@protonmail.com
              </a>
            </p>
            <p>
              <a
                href="https://www.instagram.com/sordelo3000/"
                target="_blank" rel="noopener noreferrer"
              >
                ig: @sordelo3000
              </a>
            </p>
          </div>
        </div>

        <div style={{marginBottom: 15}}>
          <iframe title="Sordelo Soundcloud" width="100%" height="350px" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1321510630&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=true"></iframe><div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap',textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}><a href="https://soundcloud.com/sordelo" title="SORDELO" target="_blank" rel="noopener noreferrer" style={{color: '#cccccc', textDecoration: 'none'}}>SORDELO</a> · <a href="https://soundcloud.com/sordelo/sets/lizard-brain" title="lizard brain" target="_blank" rel="noopener noreferrer" style={{color: '#cccccc', textDecoration: 'none'}}>lizard brain</a></div>
        </div>

        <div style={{marginBottom: 45}}>
          <iframe title="Sordelo Spotify" src="https://open.spotify.com/embed/album/5Aou2tSQQjIASuoFEdo567" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
