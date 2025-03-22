import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import firstImg from "./assets/images/MicrosoftTeams-image (7).png";
import secondImg from "./assets/images/MicrosoftTeams-image (8).png"
import thirdImg from "./assets/images/MicrosoftTeams-image (9).png";

function App() {
  return (
    <>
      <div className="wrapper">
        <section className="special">
          <div className="container-special">
            <h1>
              THIS WEEKS SPECIAL
              <span>
                30% off of all week old (but still delicous) pretzels!
              </span>
            </h1>
          </div>
        </section>
        <section>
          <div className="triangle"></div>
        </section>
        <section className="header">
          <nav>
            <figure>
              <img src={firstImg} alt="logo" />
            </figure>
            <ul>
              <li className="home">
                Home
                <p>Sweet Home</p>
              </li>
              <li>
                About
                <p>Company History</p>
              </li>
              <li>
                Pretzels
                <p>Our Products</p>
              </li>
              <li>
                Shop
                <p>Product to go</p>
              </li>
            </ul>
          </nav>
        </section>
        <hr />
        <section className="main-wrapper">
          <section className="main">
            <p>
              BULLET PROOF PRETZEL CO. is a premier baker of homemade pretzels
              since 1918. Our secret family recipe has been handed down four
              generations. Literally Like on an index card.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
              neque beatae earum dolores debitis molestias consequuntur iure
              labore sapiente corrupti eius nisi saepe, doloribus, magni
              dolorum? Quaerat optio odio tenetur doloribus soluta eligendi
              quisquam? Cum, veritatis voluptate!
            </p>
            <figure className="pretzel-image">
              <img src={secondImg} alt="" />
            </figure>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              iusto quam ut amet doloribus, natus inventore illum, nostrum
              cupiditate, soluta animi! Voluptatibus, non. Ea, voluptate
              delectus ex laboriosam fuga error ab.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cum
              nisi illum suscipit, exercitationem nesciunt harum expedita
              cupiditate, reiciendis, beatae corrupti officiis aut maiores ipsa.
              Aut sequi deleniti odit nobis corporis earum sed, voluptate,
              provident, nihil voluptatum necessitatibus? Optio dolorem iusto
              commodi reiciendis doloribus doloremque, harum sed magni minima
              accusamus.
            </p>
          </section>
          <section className="aside">
            <div className="callout">
              <h1>What are pretzels?</h1>
              <p>
                Pretzels are delicous baked snacks made from dough that's
                twisted into shape. They go great with mustard and beer.
              </p>
            </div>
            <div className="items">
              <div className="our-pretzels">
                <h1>OUR PRETZELS</h1>
                <ul>
                  <li>
                    <a href="#">Plain</a>
                  </li>
                  <li>
                    <a href="#">Yogurt covered</a>
                  </li>
                  <li>
                    <a href="#">Salted</a>
                  </li>
                  <li>
                    <a href="#">BBQ</a>
                  </li>
                  <li>
                    <a href="#">Chocolate covered</a>
                  </li>
                  <li>
                    <a href="#">Tofu</a>
                  </li>
                </ul>
                <hr />
              </div>
              <div className="about-us">
                <h1>ABOUT US</h1>
                <ul>
                  <li>
                    <a href="#">History</a>
                  </li>
                  <li>
                    <a href="#">Jobs</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Directions</a>
                  </li>
                </ul>
                <hr />
              </div>
            </div>
            <div className="lower-section">
              <h1>SALT & BATTERY</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laborum praesentium eaque expedita iste, itaque similique iure
                possimus maiores, accusantium nihil dolor. Ipsum voluptatum
                maxime quasi soluta blanditiis libero autem inventore obcaecati
                minus esse necessitatibus natus repudiandae animi suscipit in
                consectetur doloribus omnis enim, voluptate sint repellendus
                ipsam aliquid corporis voluptas! Nostrum deserunt ipsum
                praesentium aperiam aspernatur ab inventore recusandae impedit
                ducimus dolorem, quibusdam ipsam facilis quaerat neque quam. In
                doloremque cumque culpa aliquam hic, earum obcaecati rerum
                expedita assumenda fugiat accusantium dolores quidem ullam
                consequatur dolor. Perferendis, possimus. Veritatis sed vitae
                obcaecati deleniti aspernatur perferendis, explicabo dolorem ut
                harum dolor.
              </p>
            </div>
          </section>
        </section>
        <section className="footer">
          <h1>
            COPYRIGHT 2011 BULLET PROOF PRETZEL COMPANY. ALL RIGHTS RESERVED
          </h1>
          <figure>
            <img src={thirdImg} alt="logo gray" />
          </figure>
        </section>
      </div>
    </>
  );
}

export default App;
