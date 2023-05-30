const AboutUs = {
    async render() {
      return `
      <section class="about-therathings">
      <div class="therathings-logo">
        <img src="therathings.png" alt="logo therathings">
      </div>
      <div class="therathings-description">
        <h1>Tentang therathings</h1>
        <p>therathings adalah sebuah website yang dibangun untuk memberikan informasi mengenai resep dan detail kandungan 
        bahan dan produk makanan untuk membantu mengatur dan memenuhi kebutuhan nutrisi. Food Intake diharapkan mampu  
        membantu pengguna merencanakan asupan makanan yang dibutuhkan.
        </p>
        </div>
    </section>
  
    <section class="about-team">
      <div class="team-description">
        <h1>Team Kami</h1>
        <p>Kami adalah sekelompok mahasiswa - mahasiswi Indonesia yang berfokus dalam dunia software developer 
        khususnya dalam bidang Front-End dan Back End. Misi kami kali ini adalah untuk membantu sesama terutama 
        masyarakat disekitar kami. Harapan utama dibuatnya therathings adalah agar dapat membantu masyarakat dalam 
        memberikan referensi menu makanan kepada masyarakat yang tidak hanya memberikan resep, namun juga kandungan 
        dan gizi dari menu makanan tersebut.
     </p> 
      </div>
      <div class="team-profile">
        <div class="card-profile">
          <img src="/user/yoga.png" alt="Seoarang mahasiswa">
          <h1>Yoga Tirta Permana</h1>
          <h2>Full-Stack</h2>
          <a href="https://www.linkedin.com/in/yoga-tirta-permana/"><button>Connect</button></a>
        </div>
  
        <div class="card-profile">
          <img src="/user/raehan.png" alt="Seoarang mahasiswa">
          <h1>Raehan Ramadhan</h1>
          <h2>Full-Stack</h2>
          <a href="#"><button>Connect</button></a>
        </div>
        
        <div class="card-profile">
          <img src="/user/putri.jpg" alt="Seoarang mahasiswa">
          <h1>Nur Rahma Utami Putri</h1>
          <h2>Full-Stack</h2>
          <a href="#"><button>Connect</button></a>
        </div>
  
        <div class="card-profile">
          <img src="/user/ipeh.png" alt="Seoarang mahasiswa">
          <h1>Hannifah Sri Rinjani</h1>
          <h2>Full-Stack</h2>
          <a href="#"><button>Connect</button></a>
        </div>
      </div>
    </section>
          `;
    },
  };
  
  export default AboutUs;
  