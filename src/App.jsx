
import Header from "./components/Header"
import Guitar from "./components/Guitar"
import { useCart } from "./hooks/useCart"

function App() {

  const {
    data,
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    setCart,
    isEpmty,
    cartTotal
  } = useCart()

  return (
    <Router>
    <Header 
      cart={cart}
      removeFromCart={removeFromCart}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      setCart={setCart}
      isEpmty={isEpmty}
      cartTotal={cartTotal}
    /> 
    <main className="container-xl mt-5">
        <h2 className="text-center text-purple">Catálogo</h2>

        <div className="row mt-5">
            {data.map((guitar) => (
                <Guitar
                    key={guitar.id}
                    guitar={guitar}
                    addToCart={addToCart}
                />
            ))}
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">videojuegos - Todos los derechos Reservados</p>
        </div>
    </footer>

    </Router>
  )
}

export default App
