import Head from "next/head";
import Footer from "../components/Footer";

const onFilterKeyUp = (e) => {
  const filter = e.target.value.toLowerCase();
  const items = document.querySelectorAll(".items .item");
  items.forEach((item) => {
    const label = item.querySelector("label").innerText.toLowerCase();
    if (label.indexOf(filter) > -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
};

const onClickThumbnail = (e) => {
  const thumbnails = document.querySelectorAll(".thumbnails .thumbnail");
  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove("active");
  });
  e.target.parentNode.classList.add("active");
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Custom Fades</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <ul>
            <li>
              <a href="#work">
                <img src="" />
                <span>Work</span>
              </a>
            </li>
            <li>
              <a href="#services">
                <img src="" />
                <span>Services</span>
              </a>
            </li>
            <li className="logo">
              <a href="#about">
                <img
                  src="/logo-netlify.svg"
                  alt="Netlify Logo"
                  width={100}
                  height={100}
                />
              </a>
            </li>
            <li>
              <a href="#products">
                <img src="" />
                <span>Products</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <img src="" />
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div className="hero-text container">
            <h1>Custom Fades</h1>
            <h2>Barber Shop</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatem, quia voluptate, aperiam, quidem quod voluptatibus
              voluptates doloribus quos quibusdam fugit. Quisquam voluptatem,
              quia voluptate, aperiam, quidem quod voluptatibus voluptates
              doloribus quos quibusdam fugit.
            </p>
            <a href="#contact" className="button primary">
              Book Now
            </a>
            <a href="#contact" className="button ghost primary">
              Showroom
            </a>
            <div className="thumbnails flex gap-4">
              <div className="thumbnail" data>
                <span>01</span>
                <img
                  src="/images/headshot-isaiah.jpg"
                  alt=""
                  width={164}
                  height={164}
                />
              </div>
              <div className="thumbnail">
                <span>01</span>
                <img
                  src="/images/headshot-isaiah.jpg"
                  alt=""
                  width={164}
                  height={164}
                />
              </div>
              <div className="thumbnail">
                <span>01</span>
                <img
                  src="/images/headshot-isaiah.jpg"
                  alt=""
                  width={164}
                  height={164}
                />
              </div>
              <div className="thumbnail">
                <span>01</span>
                <img
                  src="/images/headshot-isaiah.jpg"
                  alt=""
                  width={164}
                  height={164}
                />
              </div>
            </div>
          </div>
        </section>
        <section id="work">
          <div className="container row">
            <div className="col-6 text-white">
              <h3 className="display">Work</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatem, quia voluptate, aperiam, quidem quod
                voluptatibus voluptates doloribus quos quibusdam fugit. Quisquam
                voluptatem, quia voluptate, aperiam, quidem quod voluptatibus
                voluptates doloribus quos quibusdam fugit.
              </p>
              <a href="#services" className="button primary">
                Lets get started
              </a>
            </div>
            <div className="col-6">
              <img
                className=""
                src="/images/robertdavis.png"
                alt="Portrait photo of Robert Davis, Owner of Custom Fades Barber Shop"
              />
            </div>
          </div>
        </section>
        <section id="services" className="background-white">
          <div className="container">
            <h3>Services</h3>
            <div className="row">
              <div className="col-6 frame">
                <img src="/images/boy.png" alt="boy" />
                <h3>Boy</h3>
              </div>
              <div className="col-6 frame">
                <img src="/images/boy.png" alt="boy" />
                <h3>Men</h3>
              </div>
            </div>
            <div className="filter">
              <input
                type="text"
                placeholder="What are you looking for?"
                onKeyUp={onFilterKeyUp}
              />
            </div>
            <div className="items">
              <div className="item">
                <label>Men's haircut</label>
                <span>
                  <i>from $50</i>
                </span>
              </div>
              <div className="item">
                <label>Haircut under the nozzle</label>
                <span>
                  <i>from $300</i>
                </span>
              </div>
              <div className="item">
                <label>Boys up to 12 years</label>
                <span>
                  <i>from $300</i>
                </span>
              </div>
              <div className="item">
                <label>Mustache and beard haircut</label>
                <span>
                  <i>from $300</i>
                </span>
              </div>
              <div className="item">
                <label>Men's haircut + beard haircut</label>
                <span>
                  <i>from $300</i>
                </span>
              </div>
              <div className="item">
                <label>Haircut + beard</label>
                <span>
                  <i>from $300</i>
                </span>
              </div>
              <div className="item">
                <label>Head shave</label>
                <span>
                  <i>from $300</i>
                </span>
              </div>
              <div className="item">
                <label>Royal shave</label>
                <span>
                  <i>from $300</i>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="products" className="d-none">
          Products
        </section>
        <section id="about" className="background-white d-none">
          about
        </section>
        <section id="contact">
          <div className="container">
            <form name="contact" netlify className="col-8">
              <p>
                <label>
                  Name <input type="text" name="name" />
                </label>
              </p>
              <p>
                <label>
                  Email <input type="email" name="email" />
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
