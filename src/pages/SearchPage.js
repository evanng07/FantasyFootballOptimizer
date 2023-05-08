import "../index.css";
import Card from "../components/UI/Card";

const SearchPage = () => {
  return (
    
      <div className="justify-center items-center ml-32 mt-6">
        <div className="text-3xl font-bold text-white">
          Search Page is here!
        </div>
        <form>
            <input className="p-5 rounded-3xl ml-64 w-1/2 mt-24 h-10" placeholder="Search for a player" />
        </form>
      </div>
    
  );
};

export default SearchPage;