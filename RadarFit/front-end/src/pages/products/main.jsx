import Detalhes from './components/Detalhes';
import NavBar from './components/navbar';
import Products from './components/products';

export default function Main() {
  return (
    <main>
      <NavBar />
      <Products />
      <Detalhes />
    </main>
  );
}
