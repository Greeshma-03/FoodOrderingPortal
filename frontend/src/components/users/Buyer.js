import BuyerNavbar from "../templates/BuyerNav";

const Buyer=(props)=>{
    return(
        
        <div>

        <h1>Welcome {localStorage.getItem("useremail")}!!</h1>    
        </div>

    );
};

export default Buyer;
