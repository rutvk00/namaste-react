import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {
        /*
          MainContainer
            - VideoBackground
            - VideoTitle
          SecondaryContainer
            - MoviesList * n
              - Cards * n
        */
      }
    </div>
  )
}

export default Browse
