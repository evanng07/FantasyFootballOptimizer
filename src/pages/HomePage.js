import Card from "../components/UI/Card";
import "../index.css";
import joshallen from "../utils/images/joshallen.png";

const HomePage = () => {
  return (
    <div className="justify-center items-center ml-32 mt-40">
      <form className="relative flex">
        <div>
          <img
            src={joshallen}
            className="w-40 absolute left-0 top-0 -mt-10 ml-72"
            alt="image"
          />
          <h2
            className="text-white w-100 font-bold text-5xl absolute"
            style={{ marginLeft: "485px", marginTop: "60px" }}
          >
            Fantasy Optimizer
          </h2>
          <h2
            className="w-100 absolute"
            style={{
              marginLeft: "580px",
              marginTop: "115px",
              color: "#D3D3D3",
              fontSize: "14px",
            }}
          >
            Fantasy Football Simplified
          </h2>
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

export default HomePage;
