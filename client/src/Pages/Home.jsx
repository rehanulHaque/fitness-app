import React, {useState, useEffect} from 'react'
import { useAppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';
import Excercise from '../Components/Excercise';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const { getExercises } = useAppContext();
  // const navigate = useNavigate();
  useEffect(() => {
    getExercises().then(res=>{
      setExercises(res)
    })
  }, [])

  return (
    <main>
      <div className='max-w-[400px] mx-auto'>
        {exercises && exercises.map((exercise) => (
          <Excercise key={exercise._id} {...exercise}/>
        ))}
      </div>
    </main>
  )
}

export default Home
