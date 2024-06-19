
import './App.scss'
import Joke from './components/joke.tsx'
import jokeData from './data/data.json'
import { JokeData } from './types/Alltypes.ts'

function App() {
  
  return (
    <div className='parent'>
      {
        jokeData.length ? (
          jokeData.map((joke: JokeData) => {
            return (
              <Joke key={joke.id} id={joke.id} joke={joke.joke} rating={joke.rating} />
            )
          })
        ) : (
          "No data"
        )

      }
    </div>
  )
}

export default App