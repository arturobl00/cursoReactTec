import React from 'react'
import heroBg from '../images/hero-bg.jpg'
import o1 from '../images/o1.jpg'
import o2 from '../images/o2.jpg'
import f1 from '../images/f1.png'
import f2 from '../images/f2.png'
import f3 from '../images/f3.png'
import f4 from '../images/f4.png'
import f5 from '../images/f5.png'
import f6 from '../images/f6.png'
import f7 from '../images/f7.png'
import f8 from '../images/f8.png'
import f9 from '../images/f9.png'
import about from '../images/about-img.png'
import map from '../images/map.png'
import client1 from '../images/client1.jpg'
import client2 from '../images/client2.jpg'
export const Home = () => {
  return (
  <div>
    {/*Encabezado*/}
    <div className="hero_area">
      <div className="bg-box">
        <img src={heroBg} alt=""/>
      </div>
      <header className='container'>
        <nav className='navbar navbar-expand-lg custom_nav-container'>
          <a className='navbar-brand' href="/">
          <span>
              Feane
            </span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mx-auto ">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/menu">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/book">Book Table</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/toño">Toño</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section className="slider_section">
        <div id="customCarousel1" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className='container'>
                <div className='row'>
                  <div className='col-md-7 col-lg-6'>
                    <div className='detail-box'>
                    <h1>
                      Fast Food Restaurant
                    </h1>
                    <p>
                      Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                    </p>
                    <div className="btn-box">
                      <a href="/" className="btn1">
                        Order Now
                      </a>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className='container'>
                <div className='row'>
                  <div className='col-md-7 col-lg-6'>
                    <div className='detail-box'>
                    <h1>
                      Hamburgesas y Más
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic quae harum, architecto consequuntur incidunt aliquam molestias ea voluptatem laboriosam adipisci, soluta dolore eveniet earum corporis obcaecati accusantium tempora minus.
                    </p>
                    <div className="btn-box">
                      <a href="/" className="btn1">
                        Sale Now
                      </a>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className='container'>
                <div className='row'>
                  <div className='col-md-7 col-lg-6'>
                    <div className='detail-box'>
                    <h1>
                      Order in Tehuacán
                    </h1>
                    <p>
                      Corporis dicta maiores ea, cumque enim a. Non perspiciatis dolorem voluptas, vero sit doloribus expedita hic laborum tempora fugiat, earum eveniet totam.
                    </p>
                    <div className="btn-box">
                      <a href="/" className="btn1">
                        Free Now
                      </a>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
          <ol class="carousel-indicators">
            <li data-target="#customCarousel1" data-slide-to="0" class="active"></li>
            <li data-target="#customCarousel1" data-slide-to="1"></li>
            <li data-target="#customCarousel1" data-slide-to="2"></li>
          </ol>
        </div>
        </div>
      </section>
    </div>

    {/*Segundo elemento*/}
    <section class="offer_section layout_padding-bottom">
    <div class="offer_container">
      <div class="container ">
        <div class="row">
          <div class="col-md-6  ">
            <div class="box ">
              <div class="img-box">
                <img src={o1} alt=""/>
              </div>
              <div class="detail-box">
                <h5>
                  Tasty Thursdays
                </h5>
                <h6>
                  <span>20%</span> Off
                </h6>
              </div>
            </div>
          </div>
          <div class="col-md-6  ">
            <div class="box ">
              <div class="img-box">
                <img src={o2} alt=""/>
              </div>
              <div class="detail-box">
                <h5>
                  Pizza Days
                </h5>
                <h6>
                  <span>15%</span> Off
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>

    {/*tercer elemento*/}
  <section class="food_section layout_padding-bottom">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Our Menu
        </h2>
      </div>

      <ul class="filters_menu">
        <li class="active" data-filter="*">All</li>
        <li data-filter=".burger">Burger</li>
        <li data-filter=".pizza">Pizza</li>
        <li data-filter=".pasta">Pasta</li>
        <li data-filter=".fries">Fries</li>
      </ul>

      <div class="filters-content">
        <div class="row grid">
          <div class="col-sm-6 col-lg-4 all pizza">
            <div class="box">
              <div>
                <div class="img-box">
                  <img src={f1} alt=""/>
                </div>
                <div class="detail-box">
                  <h5>
                    Delicious Pizza
                  </h5>
                  <p>
                    Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                  </p>
                  <div class="options">
                    <h6>
                      $20
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 all burger">
            <div class="box">
              <div>
                <div class="img-box">
                  <img src={f2} alt=""/>
                </div>
                <div class="detail-box">
                  <h5>
                    Delicious Burger
                  </h5>
                  <p>
                    Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                  </p>
                  <div class="options">
                    <h6>
                      $15
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 all pizza">
            <div class="box">
              <div>
                <div class="img-box">
                  <img src={f3} alt=""/>
                </div>
                <div class="detail-box">
                  <h5>
                    Delicious Pizza
                  </h5>
                  <p>
                    Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                  </p>
                  <div class="options">
                    <h6>
                      $17
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 all pasta">
            <div class="box">
              <div>
                <div class="img-box">
                  <img src={f4} alt=""/>
                </div>
                <div class="detail-box">
                  <h5>
                    Delicious Pasta
                  </h5>
                  <p>
                    Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                  </p>
                  <div class="options">
                    <h6>
                      $18
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 all fries">
            <div class="box">
              <div>
                <div class="img-box">
                  <img src={f5} alt=""/>
                </div>
                <div class="detail-box">
                  <h5>
                    French Fries
                  </h5>
                  <p>
                    Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                  </p>
                  <div class="options">
                    <h6>
                      $10
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 all pizza">
            <div class="box">
              <div>
                <div class="img-box">
                  <img src={f6} alt=""/>
                </div>
                <div class="detail-box">
                  <h5>
                    Delicious Pizza
                  </h5>
                  <p>
                    Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                  </p>
                  <div class="options">
                    <h6>
                      $15
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 all burger">
            <div class="box">
              <div>
                <div class="img-box">
                  <img src={f7} alt=""/>
                </div>
                <div class="detail-box">
                  <h5>
                    Tasty Burger
                  </h5>
                  <p>
                    Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                  </p>
                  <div className="options">
                    <h6>
                      $12
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 all burger">
            <div className="box">
              <div>
                <div className="img-box">
                  <img src={f8} alt=""/>
                </div>
                <div className="detail-box">
                  <h5>
                    Tasty Burger
                  </h5>
                  <p>
                    Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                  </p>
                  <div className="options">
                    <h6>
                      $14
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 all pasta">
            <div className="box">
              <div>
                <div className="img-box">
                  <img src={f9} alt=""/>
                </div>
                <div className="detail-box">
                  <h5>
                    Delicious Pasta
                  </h5>
                  <p>
                    Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                  </p>
                  <div className="options">
                    <h6>
                      $10
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-box">
        <a href="/">
          View More
        </a>
      </div>
    </div>
  </section>

    {/*cuarto elemento*/}
  <section className="about_section layout_padding">
    <div className="container  ">

      <div className="row">
        <div className="col-md-6 ">
          <div className="img-box">
            <img src={about} alt=""/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>
                We Are Feane
              </h2>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words which don't look even slightly believable. If you
              are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
              the middle of text. All
            </p>
            <a href="/">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

    {/*quinto elemento*/}
  <section className="book_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Book A Table
        </h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form_container">
            <form action="">
              <div>
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div>
                <input type="text" className="form-control" placeholder="Phone Number" />
              </div>
              <div>
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div>
                <select className="form-control nice-select wide">
                  <option value="" disabled selected>
                    How many persons?
                  </option>
                  <option value="">
                    2
                  </option>
                  <option value="">
                    3
                  </option>
                  <option value="">
                    4
                  </option>
                  <option value="">
                    5
                  </option>
                </select>
              </div>
              <div>
                <input type="date" className="form-control"/>
              </div>
              <div className="btn_box">
                <button>
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="map_container ">
            <div id="googleMap">
              <img src={map} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    {/*sexto elemento*/}
  <section class="offer_section layout_padding-bottom">
    <div class="offer_container">
      <div class="container ">
      <h1 className='text-center'>
          What Says Our Customers
        </h1>
      <div className='row'>
          <div className='col-md-6'>
          
            <div className="box">
            <div className="img-box">
                <img src={client1} alt="" className="box-img" width="200" height="200"/>
              </div>
              <div className="detail-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
                <h6>
                  Moana Michell
                </h6>
                <p>
                  magna aliqua
                </p>
              </div>
            </div>
          
          </div>
        <div className='col-md-6'>
              <div className="box">
              <div className="img-box">
                <img src={client2} alt="" className="box-img" width="200" height="200"/>
              </div>
                <div className="detail-box">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                  </p>
                  <h6>
                    Mike Hamell
                  </h6>
                  <p>
                    magna aliqua
                  </p>
                </div>
              </div>
          
        </div>
        </div>
      </div>
    </div>
    </section>
  </div>
  )
}

