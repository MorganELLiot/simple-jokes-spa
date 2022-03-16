import React from 'react'
import Navbar from './Navbar.js'
import Joke from './Joke.js';

export default function App() {
    return (
        <div>
            <Navbar />
            <Joke 
                settup="I got my daughter a fridge for her birthday."
                punchline="I can't wait to see her face light up when she opens it."
            />
            <Joke
                settup=""
                punchline="I see, said the blind man as he peed into the wind, it all comes back to me now!"
            />
            <Joke 
                settup="Did you hear the one about the blind carpenter?"
                punchline="He picked up a hammer and saw!"
            />
            <Joke 
                settup=""
                punchline="Down with shampoo! Demand real poo!"
            />
        </div>
    )
}