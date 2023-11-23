import Adminedit from "./Adminedit";
import Adminhome from "./Adminhome";
import Counter from "./Counter";
import Sidebar from "./Sidebar";

function Admin() {
  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ height: "90vh" }}>
          <div
            className="col-md-3 "
            style={{
              height: "100%",
              backgroundColor: "#FFD600",
            }}
          >
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Adminhome />
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
