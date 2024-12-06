import { Link } from "react-router-dom"
import image from "../../assets/Images/about-BgAkqdr2.jpg"

export default function SideBar() {
    return (
        <>
            
                <div className="d-flex justify-content-center my-4">
                    <img src={image} alt="image" className="person" />
                </div>
                <p className="d-flex justify-content-center mb-0 name">Jackson Ford </p>
                <p className="d-flex justify-content-center job"> <a href="#" className="text-decoration-none">UI/UX/Designer </a> in Philippines</p>
                <div className="d-flex flex-column align-items-center px-3 pt-2 text-white ">
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center">
                            <li className="nav-item">
                                <Link to="/" className="nav-link align-middle px-0">
                                    <span className="d-sm-inline text-dark job">Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="nav-link px-0 align-middle">
                                    <span className="d-sm-inline text-dark job">About</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/skills" className="nav-link px-0 align-middle">
                                    <span className="d-sm-inline text-dark job">Skills</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/experience" className="nav-link px-0 align-middle">
                                    <span className="d-sm-inline text-dark job">Experience</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/work" className="nav-link px-0 align-middle">
                                    <span className="d-sm-inline text-dark job">Work</span>
                                </Link>
                            </li>
                        </ul>
                </div>
        </>
    )
}

