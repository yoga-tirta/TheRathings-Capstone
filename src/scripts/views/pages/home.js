const Home = {
  async render() {
    return `
      <section class="first-main" id="home">  
        <div class="tagline">
          <h2>Welcome To <span>therathingss</span></h2>
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
          <p>Team <strong>TheRathings</strong> Terdiri Dari Mahasiswa Dan Mahasiswi Yang Berfokus Dalam Dunia Teknologi Informasi, Khususnya Dalam Bidang Front-End Dan Back End Website Developer. .
          </p>
          <button onclick="window.location.href='#/about'">
          Telusuri Sekarang <i class="fas fa-play-circle"></i>
          </button>        
        </div>
        <div class="tagline-img">
          <picture>
            <source media="(min-width: 700px; max-width: 900px)" srcset="./img/second-main.png"/>
            <img src='./img/second-main.svg' alt="Second Main"></img>
          </picture>
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
            <source media="(min-width: 700px; max-width: 900px)" srcset="./img/fourth-main.png"/>
            <img src='./img/fourth-main.svg' alt="Fourth Main"></img>
          </picture>
        </div>
      </section>
 
      <section class="fifth-main">
        <div class="tagline-heading">
          <h1>Pelajari 3  <span>Tips</span> simple</h1>
        <div class="box">
        <i class="fas fa-utensils"></i>
        <div class="content">
          <h2>Planning</h2>
          <p>Buatlah perencanaan makanan sebelumnya untuk menghindari membeli atau memasak terlalu banyak makanan.</p>
        </div>
      </div>
      <div class="box">
        <i class="fas fa-users"></i>
        <div class="content">
          <h2>Kreatifity</h2>
          <p>Gunakan kreativitas untuk menciptakan hidangan baru dengan bahan-bahan yang tersisa.</p>
        </div>
      </div>
      <div class="box">
        <i class="fas fa-user-clock"></i>
        <div class="content">
          <h2>Reuse</h2>
          <p>Sisa makanan setelah makan, simpanlah dengan benar dan manfaatkan kembali nanti. Gunakan wadah kedap udara atau bungkus makanan dengan rapat untuk menjaga kesegaran.</p>
        </div>
      </div>
          </div>   
      </section>

      <section class="main-galery">
        <div class="galery-heading">
          <h1>Rekomendasi <span>Galeri</span></h1>
        </div>
        <div class="galery-grid">
          <picture class="galery-img-1">
            <source media="(max-width: 650px)">
            <iframe src="https://www.youtube.com/embed/KIKAhhO4xQA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <picture class="galery-img-2">
              <source media="(max-width: 650px)">
              <iframe src="https://www.youtube.com/embed/KZf9_GdDff0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </picture>
          <picture class="galery-img-3 image-grid-col-2">
              <source media="(max-width: 650px)">
              <iframe src="https://www.youtube.com/embed/G-K8zF-wkhU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </picture>
          <picture class="galery-img-4 image-grid-col-2">
              <source media="(max-width: 650px)" srcset="./img/food-6-small.jpg"/>
              <iframe src="https://www.youtube.com/embed/pexOIlhT0v0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </picture>
          <picture class="galery-img-5">
              <source media="(max-width: 650px)" srcset="./img/food-7-small.jpg"/>
              <iframe src="https://www.youtube.com/embed/6ajmuRg2o3Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </picture>
          <picture class="galery-img-6">
              <source media="(max-width: 650px)" srcset="./img/food-7-small.jpg"/>
              <iframe src="https://www.youtube.com/embed/91wUWR_wnsY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          </picture>
        </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
