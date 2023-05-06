import MainCarousel from './MainCarousel'
import ShoppingList from './ShoppingList';
import Footer from '../global/Footer';
const Home =() => {
return (<div className='home'>
<MainCarousel />
<ShoppingList />
<Footer />
</div>)
}

export default Home;