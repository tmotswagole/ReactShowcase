import "./style/main.css";
import "./style/bootstrap.css";
import "./style/font-awesome.min.css";
import "./style/nice-select.css";
import "./style/owl.carousel.css";
import "./img/bancabc.png";
import "./img/burs-logo.png";
import "./img/emop.jpg";
import "./img/sais-partner.png";
import "./img/sais.png";
import "./img/sunderland.png";
import "./img/unam.jpg";

export default function App() {
  return (
    <div className="App">
      <header id="header"></header>
      {/* <!-- #header --> */}
      {/* <!-- start banner Area --> */}
      <section className="banner-area">
        <div className="container">
          <div className="row fullscreen align-items-center justify-content-between">
            <div className="col-lg-6 col-md-6 banner-left">
              <h6>This is me</h6>
              <h1>Thabiso Motswagole</h1>
              <div>
                This is my portfolio where you will find information about me.
              </div>
              <a
                style={{ marginTop: "5%" }}
                href="https://www.linkedin.com/in/thabiso-solomon-motswagole/"
                target="_blank"
                rel="noreferrer"
                className="primary-btn text-uppercase"
              >
                discover more about me
              </a>
            </div>
            <div className="col-lg-6 col-md-6 banner-right d-flex align-self-end">
              <img
                className="img-fluid"
                src={require("./img/hero-img.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End banner Area --> */}

      {/* <!-- Start home-about Area --> */}
      <section className="home-about-area pt-120">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-md-6 home-about-left">
              <img className="img-fluid" src="img-img.png" alt="" />
            </div>
            <div className="col-lg-5 col-md-6 home-about-right">
              <h6>About Me</h6>
              <h1 className="text-uppercase">Personal Details</h1>
              <div>
                A talented software developer experienced in building,
                deploying, maintaining, and updating large scale systems in
                various sectors. A multi-faceted developer, knowledgeable in
                Java, SQL, React, SPRING boot, TensorFlow and Python. A true
                team player with experience working on development teams from
                South Africa, Zimbabwe, India and China. Analytical, motivated
                and hardworking with a strive for excellence displayed in
                hereunder results of past works. Seeking employment at a company
                involved with software development and Artificial Intelligence.
              </div>
              <a
                href="ThabisoMotswagole-CV.pdf"
                download
                className="primary-btn text-uppercase"
                style={{ marginTop: "5%" }}
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End home-about Area --> */}
      {/* <!-- Start timeline Area --> */}
      <section className="timeline pb-120" style={{ marginTop: "5%" }}>
        <div className="text-center">
          <div className="menu-content pb-70">
            <div className="title text-center">
              <h1 className="mb-10">My Qualifications</h1>
              <div>These are from 2012 to present.</div>
            </div>
          </div>
        </div>
        <ul>
          <li>
            <div className="content">
              <img
                className="img-fluid mx-auto d-block mb-30"
                src={require("./img/emop.jpg")}
                alt=""
              />
              <h4>
                <time>BE in Aviation Engineering</time>
              </h4>
              <div>
                <b>Period:</b> Jun 2012 to Jun 2013
              </div>
              <div>
                <b>Result:</b> n/a
              </div>
            </div>
          </li>
          <li>
            <div className="content">
              <img
                className="img-fluid mx-auto d-block mb-30"
                src={require("./img/unam.jpg")}
                alt=""
              />
              <h4>
                <time>BE Civil Engineering</time>
              </h4>
              <div>
                <b>Period:</b> Jan 2014 to Dec 2014
              </div>
              <div>
                <b>Result:</b> n/a
              </div>
            </div>
          </li>
          <li>
            <div className="content">
              <img
                className="img-fluid mx-auto d-block mb-30"
                src={require("./img/sunderland.png")}
                alt=""
              />
              <h4>
                <time>BSc (Honors) in Computer Systems Engineering</time>
              </h4>
              <div>
                <b>Period:</b> Jun 2015 to Jun 2019
              </div>
              <div>
                <b>Result:</b> Second Class Second Division
              </div>
            </div>
          </li>
          <li>
            <div className="content">
              <img
                className="img-fluid mx-auto d-block mb-30"
                src={require("./img/burs-logo.png")}
                alt=""
              />
              <h4>
                <time>Analyst Developer</time>
              </h4>
              <div>
                <b>Period:</b> Jan 2018 to Jul 2018
              </div>
              <b>Accomplishments:</b>
              <div>
                I developed BURS’ first Android application using Android Studio
                (Java), Retrofit and SPRING framework, REST webservices.
              </div>
              <div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.burs.mtax"
                  target="_blank"
                  rel="noreferrer"
                >
                  View mobile app developed.
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="content">
              <img
                className="img-fluid mx-auto d-block mb-30"
                src={require("./img/bancabc.png")}
                alt=""
              />
              <h4>
                <time>I.T. Officer</time>
              </h4>
              <div>
                <b>Period:</b> Jan 2018 to Jul 2018
              </div>
              <b>Accomplishments:</b>
              <div>
                I built a python app that generated and formatted Microsoft
                Excel reports for use in I.T month end incident trend analysis
                and performance measures.
              </div>
            </div>
          </li>
          <li>
            <div className="content">
              <img
                className="img-fluid mx-auto d-block mb-30"
                src={require("./img/bancabc.png")}
                alt=""
              />
              <h4>
                <time>ATM & Cards Support Officer</time>
              </h4>
              <div>
                <b>Period:</b> Jan 2018 to Jul 2018
              </div>
              <b>Accomplishments:</b>
              <div>
                I Developed an automatic text editor in python to search the
                ATM’s log files and return eJournal logs (the ATM activity
                during transactions and daily service) and return it in txt
                format that can easily be read. This mitigated the risk of
                missing ATM activity. The old method was not accurate all the
                time and caused eJournal entries to get corrupted or go missing.
              </div>
              <div>
                <a href="www.bancabc.co.bw" target="_blank" rel="noreferrer">
                  Check their website here.
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="content">
              <img
                className="img-fluid mx-auto d-block mb-30"
                src={require("./img/sais.png")}
                alt=""
              />
              <img
                className="img-fluid mx-auto d-block mb-30"
                src={require("./img/sais-partner.png")}
                alt=""
              />
              <h4>
                <time>InsurTech Developer</time>
              </h4>
              <div>
                <b>Period:</b> Dec 2020 to Aug 2021
              </div>
              <div>
                <b>Accomplishments:</b>
                <div>
                  I took on a more supervisor role in projects and with the
                  trainees.
                </div>
                <div>
                  I was the lead developer role on Customer Portal and Sales
                  Platform tackling the most complex tasks on both the SPRING
                  backend and AngularJS frontend.
                </div>
                <div>
                  <a
                    href="https://www.sais-erp.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Check their website here.
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>

      {/* <!-- End timeline Area --> */}
    </div>
  );
}
