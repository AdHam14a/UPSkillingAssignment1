import image1 from "../../assets/Images/img_bg_1-PzvG2r05.jpg"
import image2 from "../../assets/Images/img_bg_2-DzCs5o-0.jpg"
import '../../App.css'

export default function Home() {
  return (
      <>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-mdb-ride="carousel" data-mdb-interval="2000">
            <div className="carousel-inner">
                <div className="carousel-item">
                <img className="d-block w-100" src={image1} alt="First slide" />
                <div className="carousel-caption text-md-start">
                    <h1 className="text-dark text-lg-start main-page">Hi! Im Jackson</h1>
                    <p className="text-dark text-lg-start main-page-two">
                    100% HTML5 Bootstrap templates made<br />
                    <a href="#">By Colorlib.com</a>
                    </p>
                    <button className="btn btn-outline-dark">Download CV <i className="fa-solid fa-download" /></button>
                </div>
                </div>
                <div className="carousel-item active">
                <img className="d-block w-100" src={image2} alt="Second slide" />
                <div className="carousel-caption text-md-start">
                    <h1 className="text-dark text-lg-start main-page">I am a Designer</h1>
                    <p className="text-dark text-lg-start main-page-two">
                    100% HTML5 Bootstrap templates made<br />
                    <a href="#">By Colorlib.com</a>
                    </p>
                    <button className="btn btn-outline-dark main-button">View Portfolio <i className="fa-solid fa-briefcase" /></button>
                </div>
                </div>
            </div>
            </div>
      </>
  )
}
