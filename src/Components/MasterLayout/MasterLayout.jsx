import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";


export default function MasterLayout() {
  return (
      <>
        
        <div className="container-fluid">
        <div className="row">
          <div className="col-2 bg-light">
            <SideBar />
          </div>
          <div className="col-10">
            <Outlet/>
          </div>
          </div>
        </div>
      </>
  )
}
