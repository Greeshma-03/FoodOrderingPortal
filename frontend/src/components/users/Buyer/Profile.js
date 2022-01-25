import BuyerNavbar from "../../templates/BuyerNav";

const bProfile = () => {
    return (
        <div>
            <div>
                <BuyerNavbar />
                <div className="container">
                </div>
                <h1>Welcome to the profile page {localStorage.getItem("username")}!! </h1>
            </div>
        </div>

    );
};

export default bProfile;