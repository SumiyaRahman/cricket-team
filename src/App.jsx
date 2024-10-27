import { useState } from "react";
import Banner from "./Components/Banner";
import Header from "./Components/Header/Header";
import Players from "./Components/Players/Players";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer";

const App = () => {

  const [claimCoins, setClaimCoins] = useState(0);

  const handleClaimCoins = () => {
    const prevCoin = claimCoins + 6000000;
    setClaimCoins(prevCoin);
    toast.success(`Successfully claimed coins!`);
  }
  
  return (
    <div>
      <div  className="container mx-auto px-5">
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover></ToastContainer>
      
      {/* Header */}
      <Header claimCoins={claimCoins}></Header>

      {/* banner */}
      <Banner  handleClaimCoins={handleClaimCoins}></Banner>

      {/* Players */}
      <Players claimCoins={claimCoins} setClaimCoins={setClaimCoins}></Players>

      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default App;