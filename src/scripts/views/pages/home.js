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
                <img src='./img/second-main.png' alt="Second Main"></img>
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
    
        <section class="third-main">
          <div class="tagline-heading">
            <h1>Rekomendasi Berdasarkan<br><span>Tipe Makanan</span></h1>
            <p>Food Intake memberikan rekomendasi sesuai tipe makanan untuk menu makanan mu hari ini. <br>Keep healthy!</p>
          </div>
          <div class="third-main-grid">
            <li>
              <a href="#/foodthings">
              <picture>
                <source type="image/webp" srcset="./img/food-type/1.webp">
                <source type="image/png" srcset="./img/food-type/1.png">
                <img class="lazyload" data-src="./img/food-type/1.png" alt="main course">
              </picture>
              </a>
            </li>
            <li>
              <a href="#/foodthings">
              <picture>
                <source type="image/webp" srcset="./img/food-type/2.webp">
                <source type="image/png" srcset="./img/food-type/2.png">
                <img class="lazyload" data-src="./img/food-type/2.png" alt="breakfast">
              </picture>
              </a>
            </li>
            
            <li>
              <a href="#/foodthings">
              <picture>
                <source type="image/webp" srcset="./img/food-type/3.webp">
                <source type="image/png" srcset="./img/food-type/3.png">
                <img class="lazyload" data-src="./img/food-type/3.png" alt="Dessert menu">
              </picture>
              </a>
            </li>
            <li>
              <a href="#/foodthings">
              <picture>
                <source type="image/webp" srcset="./img/food-type/4.webp">
                <source type="image/png" srcset="./img/food-type/4.jpg">
                <img class="lazyload" data-src="./img/food-type/4.png" alt="Snack menu">
              </picture>
              </a>
            </li>
            <li>
              <a href="#/foodthings">
              <picture>
                <source type="image/webp" srcset="./img/food-type/5.webp">
                <source type="image/png" srcset="./img/food-type/5.png">
                <img class="lazyload" data-src="./img/food-type/5.png" alt="Salad menu">
              </picture>
              </a>
            </li>
            <li>
              <a href="#/foodthings">
              <picture>
                <source type="image/webp" srcset="./img/food-type/6.webp">
                <source type="image/png" srcset="./img/food-type/6.jpg">
                <img class="lazyload" data-src="./img/food-type/6.png" alt="Drink menu">
              </picture>
              </a>
            </li>
          </div>
        </section>
    
        <section class="fourth-main">
          <div class="tagline-heading">
            <h1>Personalisasikan Dengan <br><span>Filter Nutrisi</span></h1>
            <p>Pastikan kamu memilih makanan sesuai dengan kebutuhan nutrisi dan mengatur pola makan yang sesuai. 
            Tujuannya adalah untuk meningkatkan kualitas hidup, mencegah komplikasi, mempertahankan gula darah, dan mempertahankan berat badan ideal.</p>
            <p>Sebelum memilih makananmu, yuk cek kebutuhan kalori terlebih dahulu!</p>
            <button onclick="window.open('https://gendhismanis.id/kalkulatorkalori.html', '_blank')">Kalkulator Kalori</button>
          </div>
          <picture>
            <source media="(max-width: 650px)" srcset="./img/information-small.jpg"/>
            <img class="lazyload" data-src='./img/information-large.png' alt="Food Information"></img>
          </picture>    
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
