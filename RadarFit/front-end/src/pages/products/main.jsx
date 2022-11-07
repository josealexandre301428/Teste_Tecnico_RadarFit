import Detalhes from './components/Detalhes';
import NavBar from './components/navbar';
import NewProduct from './components/newProduct';
import Products from './components/products';

export default function Main() {
  return (
    <main>
      <NavBar />
      <NewProduct className="d-flex p-2 justify-content-between" />
      <section className="d-flex justify-content-around">
        <Products />
        <Detalhes />
      </section>
    </main>
  );
}
