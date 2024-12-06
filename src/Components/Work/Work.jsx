import img1 from "../../assets/Images/img-1-C4nS0eD8.jpg"
import img2 from "../../assets/Images/img-2-D-4H1m4L.jpg"
import img3 from "../../assets/Images/img-3-pR2ZEVY9.jpg"
import img4 from "../../assets/Images/img-4-tHccITd-.jpg"
import img5 from "../../assets/Images/img-5-lAucr__a.jpg"
import img6 from "../../assets/Images/img-6-DFW03AZ3.jpg"

import '../../App.css'

export default function Work() {
  const changeClass = (event) => {
    const activatedLI = document.querySelectorAll('li.activated');
    activatedLI.forEach(item => {
      item.classList.remove('activated');
    });
    event.target.classList.add("activated");
  };
  return (
    <div className="container">
        <div className="row">
          <div className="col-10 p-5 m-5">
            <p className="text-muted main-paragraph">MY WORK</p>
            <h2 className="main-heading">RECENT WORK</h2>
            <ul className="d-flex list-unstyled justify-align-content-start mt-4">
              <li className="me-3 click activated rest-page" onClick={changeClass}>Graphic Design</li>
              <li className="me-3 click rest-page" onClick={changeClass}>Apps</li>
              <li className="me-3 click rest-page" onClick={changeClass}>Software</li>
            </ul>
            <div className="container">
              <div className="row">
                <div className="col-md-6 mb-4 work-card">
                <div className="inner">
                  <div className="front">
                      <img src={img1} alt="img1" className="workImg"/>
                    </div>
                    <div className="back">
                        <a href="#" className="link">WORK02</a>
                        <p className="paragraph">Animation</p>
                        <div className="icon">
                          <span className="icon-span">
                            <i className="fa-solid fa-share-nodes" />
                          </span>
                          <span className="icon-span">
                            <i className="fa-regular fa-eye me-1" />
                            <span className="text-black text-decoration-underline">100</span>
                          </span>
                          <span className="icon-span">
                            <i className="fa-regular fa-heart me-1" />
                            <span className="text-black text-decoration-underline">49</span>
                          </span>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4 work-card">
                <div className="inner">
                  <div className="front">
                      <img src={img2} alt="img2" className="workImg"/>
                    </div>
                    <div className="back">
                        <a href="#" className="link">WORK02</a>
                        <p className="paragraph">Animation</p>
                        <div className="icon">
                          <span className="icon-span">
                            <i className="fa-solid fa-share-nodes" />
                          </span>
                          <span className="icon-span">
                            <i className="fa-regular fa-eye me-1" />
                            <span className="text-black text-decoration-underline">100</span>
                          </span>
                          <span className="icon-span">
                            <i className="fa-regular fa-heart me-1" />
                            <span className="text-black text-decoration-underline">49</span>
                          </span>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4 work-card">
                <div className="inner">
                  <div className="front">
                      <img src={img3} alt="img3" className="workImg"/>
                    </div>
                    <div className="back">
                        <a href="#" className="link">WORK02</a>
                        <p className="paragraph">Animation</p>
                        <div className="icon">
                          <span className="icon-span">
                            <i className="fa-solid fa-share-nodes" />
                          </span>
                          <span className="icon-span">
                            <i className="fa-regular fa-eye me-1" />
                            <span className="text-black text-decoration-underline">100</span>
                          </span>
                          <span className="icon-span">
                            <i className="fa-regular fa-heart me-1" />
                            <span className="text-black text-decoration-underline">49</span>
                          </span>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4 work-card">
                <div className="inner">
                  <div className="front">
                      <img src={img4} alt="img4" className="workImg"/>
                    </div>
                    <div className="back">
                        <a href="#" className="link">WORK02</a>
                        <p className="paragraph">Animation</p>
                        <div className="icon">
                          <span className="icon-span">
                            <i className="fa-solid fa-share-nodes" />
                          </span>
                          <span className="icon-span">
                            <i className="fa-regular fa-eye me-1" />
                            <span className="text-black text-decoration-underline">100</span>
                          </span>
                          <span className="icon-span">
                            <i className="fa-regular fa-heart me-1" />
                            <span className="text-black text-decoration-underline">49</span>
                          </span>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4 work-card">
                <div className="inner">
                  <div className="front">
                      <img src={img5} alt="img5" className="workImg"/>
                    </div>
                    <div className="back">
                        <a href="#" className="link">WORK02</a>
                        <p className="paragraph">Animation</p>
                        <div className="icon">
                          <span className="icon-span">
                            <i className="fa-solid fa-share-nodes" />
                          </span>
                          <span className="icon-span">
                            <i className="fa-regular fa-eye me-1" />
                            <span className="text-black text-decoration-underline">100</span>
                          </span>
                          <span className="icon-span">
                            <i className="fa-regular fa-heart me-1" />
                            <span className="text-black text-decoration-underline">49</span>
                          </span>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4 work-card">
                <div className="inner">
                  <div className="front">
                      <img src={img6} alt="img6" className="workImg"/>
                    </div>
                    <div className="back">
                        <a href="#" className="link">WORK02</a>
                        <p className="paragraph">Animation</p>
                        <div className="icon">
                          <span className="icon-span">
                            <i className="fa-solid fa-share-nodes me" />
                          </span>
                          <span className="icon-span">
                            <i className="fa-regular fa-eye me-1" />
                            <span className="text-black text-decoration-underline">100</span>
                          </span>
                          <span className="icon-span">
                            <i className="fa-regular fa-heart me-1" />
                            <span className="text-black text-decoration-underline">49</span>
                          </span>
                        </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>  
      </div>
  )
}
