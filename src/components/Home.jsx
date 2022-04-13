
export default function Home() {
    return (
      <>
        <main>
          <p>Este soy yo!</p>
          <img src={process.env.PUBLIC_URL + '/leba.jpg'} alt="imagen-prueba" height="400px" width="250px"/>
          <h2>Adolfo León Barrón </h2>
        </main>
      </>
    );
  }