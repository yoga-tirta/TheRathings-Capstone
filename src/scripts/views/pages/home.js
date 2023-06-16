const Home = {
  async render() {
    return `
      <section class="first-main" id="home">
        <div class="tagline">
          <h2>Welcome To <span>TheRathings</span></h2>
          <h1>Eat Healthy, Eco-Friendly</h1>
          <p>
            Telusuri TheRathings Dan Temukan Informasi Mengenai Restaurant<br>
            Leftover Food Dan Juga Resep Makanan Yang Sehat Dan Bergizi.
          </p>
          <button onclick="location.href='#about'">
            Telusuri Sekarang <i class="fas fa-play-circle"></i>
          </button>
        </div>
        <div class="tagline-img">
          <picture>
            <source media="(min-width: 750px; max-width: 900px)" srcset="./img/home/first-main.png"/>
            <img src='./img/home/first-main.png' alt="Makanan Sehat"></img>
          </picture>
        </div>
      </section>

      <section class="second-main" id="about">
        <div class="tagline-heading">
          <h1>Kenalan sama <span>TheRathings</span> yuk!</h1>
          <p>
            Team <b>TheRathings</b> terdiri dari empat mahasiswa berpengalaman 
            yang berasal dari empat universitas berbeda diseluruh Indonesia. 
            Kami akan terus berinovasi dan selalu berusaha untuk melakukan yang terbaik!
          </p>
          <button onclick="location.href='#/about'">
          Selengkapnya <i class="fa fa-arrow-right"></i>
          </button>
        </div>
        <div class="tagline-img">
          <picture>
            <source media="(min-width: 750px; max-width: 900px)" srcset="./img/home/second-main.png"/>
            <img src='./img/home/second-main.svg' alt="Second Main"></img>
          </picture>
        </div>
      </section>
  
      <section class="third-main" id="foodthings">
        <div class="tagline-heading">
          <h1>Telusuri berbagai<span> Resep<br>Makanan</span> Sehat!</h1>
          <p>
            Yuk, kita cari rekomendasi Makanan sehat versi <b>TheRathings</b> berdasarkan resep 
            yang kamu inginkan! Gunakan fitur <b>filter</b> untuk mengatur kandungan makanan pada resepmu.
            <br>Let's Eat healthy and Eco-friendly folks!
          </p>
          <button onclick="location.href='#/foodthings'">
          Selengkapnya <i class="fa fa-arrow-right"></i>
          </button>
        </div>
        <div class="tagline-img">
          <picture>
            <source media="(min-width: 750px; max-width: 900px)" srcset="./img/home/third-main.png"/>
            <img src='./img/home/third-main.svg' alt="Third Main"></img>
          </picture>
        </div>
      </section>
  
      <section class="fourth-main" id="explore">
        <div class="tagline-heading">
          <h1>Yuk! <span>Explore</span> restaurant <br><span> food-waste</span> disekitarmu</h1>
          <p>
            Mari kita eksplorasi restaurant disekitar kita yang menerapkan pemanfaatan leftover 
            food menjadi makanan lezat cepat saji untuk mengurangi limbah makanan di bumi!
            <br>Dengan ini kita bisa mengurangi dampak dari bahaya food-waste terhadap alam.
          </p>
          <button onclick="location.href='#/explore'">
          Selengkapnya <i class="fa fa-arrow-right"></i>
          </button>
        </div>
        <div class="tagline-img">
          <picture>
            <source media="(min-width: 750px; max-width: 900px)" srcset="./img/home/fourth-main.png"/>
            <img src='./img/home/fourth-main.svg' alt="Fourth Main"></img>
          </picture>
        </div>
      </section>

      <section class="fifth-main">
        <h1>Pelajari <span>3 Tips</span> simple</h1>
        <div class="benefit">
          <div class="box">
            <i class="fa-solid fa-utensils"></i>
            <div class="content">
              <h2>Planning</h2>
              <p>Buatlah perencanaan makanan sebelumnya untuk menghindari membeli atau memasak terlalu banyak makanan.</p>
            </div>
          </div>
          <div class="box">
            <i class="fa-solid fa-lightbulb"></i>
            <div class="content">
              <h2>Creativity</h2>
              <p>Gunakan kreativitas kalian dalam menciptakan hidangan baru dengan bahan - bahan yang tersisa dari hidangan sebelumnya.</p>
            </div>
          </div>
          <div class="box">
            <i class="fa-solid fa-recycle"></i>
            <div class="content">
              <h2>Reuse</h2>
              <p>Manfaatkan kembali. Gunakan wadah kedap udara atau bungkus makanan dengan rapat untuk menjaga kesegaran.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="sixth-main" id="home">
        <div class="tagline">
          <h1>Apa itu <span>Food wastage</span>?</h1>
          <p>
            <b>Food wastage</b> system dirancang untuk mengurangi jumlah <br>
            limbah makanan yang dihasilkan oleh bisnis dan rumah tangga. <br>
            Sistem ini biasanya melibatkan praktik seperti pengomposan, <br>
            daur ulang, dan pencernaan anaerobik.<br>
          </p>
        </div>
        <div class="tagline-img">
          <picture>
            <source media="(min-width: 750px; max-width: 900px)" srcset="./img/home/sixth-main.png"/>
            <iframe src="https://www.youtube.com/embed/IoCVrkcaH6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
