import "../index.css";
import Card from "../components/UI/Card";
import jalen from "../utils/images/jalenramseycrop.png";

const SearchPage = () => {
  return (
    <div className="justify-center items-center ml-32 mt-40">
      <form className="relative flex">
        <div>
          <h2
            className="text-white w-100 font-bold text-5xl absolute"
            style={{ marginLeft: "375px", marginTop: "60px" }}
          >
            Here is your result!
          </h2>
          <h2
            className="w-100 absolute"
            style={{
              marginLeft: "500px",
              marginTop: "115px",
              color: "#D3D3D3",
              fontSize: "14px",
            }}
          >
            Fantasy Football Simplified
          </h2>
          <img
            src={jalen}
            className="w-100 absolute left-0 top-0"
            style={{ marginLeft: "715px", marginTop: "-230px", zIndex: "-1" }}
            alt="image"
          />
        </div>
        <input
          className=" absolute rounded-3xl w-1/2 mt-40 h-10 pl-4 z-10"
          style={{ transform: "translate(48%, -10%)" }}
          placeholder="Search for a player"
        />
      </form>
    </div>
  );
};

export default SearchPage;
