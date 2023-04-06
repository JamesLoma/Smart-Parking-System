const Home = () => {
    let name = 'mario';

    const handleClick= (e) => {
        name = 'luigoi';
        console.log(name);
    }

    return ( 
        <div className="Home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>click me</button>
        </div>
        
     );
}
 
export default Home;