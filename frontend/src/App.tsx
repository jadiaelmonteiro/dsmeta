import NotificationButton from "./components/notificationButton";
import Header from "./components/header";
import SalesCard from "./components/cardSales";


function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
