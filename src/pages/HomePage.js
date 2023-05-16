import Card from "../components/UI/Card";
import "../index.css";
import joshallen from "../utils/images/joshallen.png";

const HomePage = () => {
  return (
    <div className="justify-center items-center ml-32 mt-40">
      <form className="relative flex">
        <img
          src={joshallen}
          className="w-40 absolute left-0 top-0 -mt-10 ml-56"
          alt="image"
        />     
        <input
          className="rounded-3xl ml-64 w-1/2 mt-40 h-10 pl-4 z-10"
          placeholder="Search for a player"
        />
      </form>
    </div>
  );
};

export default HomePage;
