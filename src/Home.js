import { useState } from "react";
const Home = () => {
    //let name = 'mario';
    const [name, setName] = useState('mario');  
    const [age, setAge] = useState(25);

    const handleClick= () => {
        setName('luigi');
        setAge(30);
    }

    return ( 
        <div className="Home">
            <h2>Home Page</h2>
            <p>{ name } is {age} age</p>
            <button onClick={handleClick}>click me</button>
        </div>
        
     );
}
 
export default Home;