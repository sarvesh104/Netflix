import Logo from './components/Logo';
import Description from './components/Description';
import Button from './components/Button';
import Card from './components/Cards';
import Navbar from './components/Navbar';
import "../src/App.css";


function App() {
  return (
    <diV>
     
      <Navbar />
      <Logo />




      <div style={{
        display: "flex"
      

      }}>
        <Card
          img_src="https://m.media-amazon.com/images/I/71p4nlmm3sL._AC_UF1000,1000_QL80_.jpg" />
        <Card
          img_src="https://www.justwatch.com/images/poster/305581163/s332/extraction-2" />
        <Card
          img_src="https://upload.wikimedia.org/wikipedia/en/c/c3/Pathaan_film_poster.jpg" />
        <Card
          img_src="https://m.media-amazon.com/images/M/MV5BNmJmNTVhZDQtMTFhNi00ZmZlLWJlZDEtNGM2NjYwMTljYzExXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg" />
        <Card
          img_src="https://i.pinimg.com/originals/d4/80/e2/d480e25470cfd9ec06e323e6330105ae.jpg" />
        <Card
          img_src="https://www.indiewire.com/wp-content/uploads/2017/09/barry-2016.jpg?w=675" />
        <Card
          img_src="https://sportshub.cbsistatic.com/i/2022/11/07/ac9a1854-3a1b-4fb6-905d-1482689af760/slumberland-ver4-xlg.jpg?auto=webp&width=1203&height=1500&crop=0.802:1,smart" />
        <Card
          img_src="https://cdn.cinematerial.com/p/297x/jwqwceyo/american-factory-movie-poster-md.jpg?v=1565930430" />

      </div>

      <div className='title'>
        <h1>STRANGER <br></br>
          THINGS</h1>
        <Description />
        <Button />



      </div >

    </diV >
  )
}

export default App;
