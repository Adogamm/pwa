export default function About() {
    return (
      <>
        <main>
          <h2>Adolfo León Barrón</h2>
          <img src={process.env.PUBLIC_URL + '/1.jpg'} alt="imagen-prueba" height="300px" width="auto"/>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vel similique laborum quod ex, voluptas ducimus rem nesciunt libero quis, esse et unde alias reiciendis itaque odit excepturi ad cupiditate?</h4>
        </main>
      </>
    );
  }