
import './jokes.scss'
import { JokeData } from '../types/Alltypes.ts'
import {ratingFun} from '../utils/utils.tsx'

const Joke = (data:JokeData) => {  
  
  return (
    <div key={data.id} className='joke'>
      <h4 className='id'>Id: {data.id}</h4>
      <p className='data'>Desc: {data.joke}</p>
      <p className='rating'>Rating: {ratingFun(data.rating)}</p>
    </div>
  )
}

export default Joke