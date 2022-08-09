import "./singlepage.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Singlepage = () => {
  return (
    <div className="singlePage">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        single
      </div>
    </div>
  );
};

export default Singlepage;
