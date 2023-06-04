const Home = {
  async render() {
    return `
      <section class="first-main">  
        <div class="tagline">
          <h2>Welcome To TheRathings</h2>
          <h1>Eat Healthy, Eco-Friendly</h1>
          <p>
            Telusuri TheRathings Dan Temukan Informasi Mengenai Restaurant<br>
            Leftover Food Dan Juga Resep Makanan Yang Sehat Dan Bergizi.
          </p>
          <button onclick="window.location.href='#about'">
            Telusuri Sekarang <i class="fas fa-play-circle"></i>
          </button>
        </div>
        <div class="tagline-img">
          <picture>
            <source media="(min-width: 600px; max-width: 900px)" srcset="./img/first-main.png"/>
            <img src='./img/first-main.png' alt="Makanan Sehat"></img>
          </picture>
        </div>
      </section>
  
      <section class="second-main" id="about">
        <div class="tagline-heading">
          <h1>Kenalan sama <span>TheRathings</span> yuk!</h1>
        </div>
        <div class="tagline-why">
          <div class="img-container">
          <!-- <iframe width="500" height="300" src="https://www.youtube.com/embed/IoCVrkcaH6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
            <picture>
              <source media="(min-width: 600px; max-width: 900px)" srcset="./img/second-main.png"/>
              <img src='./img/second-main.svg' alt="Second Main"></img>
            </picture>
          </div>
          <p><strong>TheRathings</strong> layaknya pecinta makanan sehat yang mengembangkan 
            website dengan fitur untuk memanfaatkan leftover food dari restoran food-chain 
            dengan menambahkan fitur tambahan seperti mencari resep makanan dari bahan 
            makanan yang tersedia dan juga terdapat informasi mengenai data-data 
            nutrisi dari masing-masing resep makanan tersebut.
          </p>
          <button onclick="window.location.href='#/about'">
            Lihat Lebih Lanjut <i class="fas fa-plus-circle"></i>
          </button>
        </div>
      </section>
  
      <section class="third-main" id="foodthings">
        <div class="tagline-heading">
          <h1>Telusuri berbagai<span> Resep<br>Makanan</span> Sehat!</h1>
          <p>Yuk, telusuri rekomendasi Makanan sehat dan bergizi versi The Rathings sesuai jenis makanan untuk menu makanan mu hari ini. <br>Keep healthy and eco-friendly!</p>
          <button onclick="window.location.href='#/foodthings'">
          Telusuri Sekarang <i class="fas fa-play-circle"></i>
          </button>
        </div>
        <div class="tagline-img">
          <picture>
            <source media="(min-width: 600px; max-width: 900px)" srcset="./img/third-main.png"/>
            <img src='./img/third-main.svg' alt="Third Main"></img>
          </picture>
        </div>
      </section>
  
      <section class="fourth-main" id="explore">
        <div class="tagline-heading">
          <h1>Yuk! <span>Explore</span> restaurant <br><span> food waste</span> disekitarmu</h1>
          <p>Explore pemanfaatan leftover food menjadi makanan lezat cepat saji untuk mengurangi limbah makanan sisa</p>
          <button onclick="window.location.href='#/explore'">
          Telusuri Sekarang <i class="fas fa-play-circle"></i>
          </button>        
        </div>
        <div class="tagline-img">
          <picture>
            <source media="(min-width: 700px; max-width: 900px)" srcset="./img/four-main.png"/>
            <img src='./img/four-main.svg' alt="Four Main"></img>
          </picture>
        </div>
      </section>
  
      <section class="fifth-main">
        <div class="tagline-heading">
          <h1>Periksa <span>Label Nutrisi</span></h1>
          <p>Mungkin sedikit menakutkan untuk mengetahui berapa banyak kalori atau berapa banyak gula dalam makanan favoritmu, 
          tetapi pastikan kamu memeriksa <span>Label Nutrisi</span> sebelum membuat makanan yang kamu suka.</p>
        </div>
        <picture>
          <source media="(max-width: 650px)" srcset="./img/nutrition-label-small.jpg"/>
          <img class="lazyload" data-src='./img/nutrition-label-large.jpg' alt="Lutrition Label"></img>
        </picture>    
      </section>

      <section class="main-galery">
        <div class="galery-heading">
          <h1>Gallery</h1>
        </div>
        <div class="galery-grid">
        <picture class="galery-img-1">
              <source media="(max-width: 650px)" srcset="./img/food-3-small.jpg"/>
              <img src='./img/food-3-large.jpg' alt="Kumpulan buah dan sayuran"></img>
          </picture>
          <picture class="galery-img-2">
              <source media="(max-width: 650px)" srcset="./img/food-4-small.jpg"/>
              <img src='./img/food-4-large.jpg' alt="Kumpulan buah dan sayuran"></img>
          </picture>
          <picture class="galery-img-3 image-grid-col-2">
              <source media="(max-width: 650px)" srcset="./img/food-5-small.jpg"/>
              <img src='./img/food-5-large.jpg' alt="Kumpulan buah dan sayuran"></img>
          </picture>
          <picture class="galery-img-4 image-grid-col-2">
              <source media="(max-width: 650px)" srcset="./img/food-6-small.jpg"/>
              <img src='./img/food-6-large.jpg' alt="Kumpulan buah dan sayuran"></img>
          </picture>
          <picture class="galery-img-5">
              <source media="(max-width: 650px)" srcset="./img/food-7-small.jpg"/>
              <img src='./img/food-7-large.jpg' alt="Kumpulan buah dan sayuran"></img>
          </picture>
        </div>
      </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
