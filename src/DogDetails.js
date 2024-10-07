import React from 'react';
import { useParams } from 'react-router-dom';


function DogDetails({ dogs }) {
    const { name } = useParams();
    const dog = dogs.find(d => d.name.toLowerCase() === name);

    if (!dog) {
        return <h2>Dog not found!</h2>;
    }
    

    return (
        <div>
            <h1>{dog.name}</h1>
            <p>Age: {dog.age}</p>
            <img src={`/${dog.src}.jpg`} alt={dog.name} />
            <ul>
                {dog.facts.map((fact, index) => (
                    <li key={fact}>{fact}</li>
                ))}
            </ul>
            
        </div>
    );
}

export default DogDetails;