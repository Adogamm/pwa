


export default function Gallery() {
    return (
      <>
        <main>
          <h2>Collage</h2>
          <div>
            <img src={process.env.PUBLIC_URL + '/1.jpg'} alt="imagen-prueba" height="250px"/>
            <img src={process.env.PUBLIC_URL + '/2.jpg'} alt="imagen-prueba" height="250px"/>
          <div>
            <img src={process.env.PUBLIC_URL + '/3.jpg'} alt="imagen-prueba" height="250px"/>
            <img src={process.env.PUBLIC_URL + '/4.jpg'} alt="imagen-prueba" height="250px"/>
          </div>
          </div>
        </main>
      </>
    );
  }