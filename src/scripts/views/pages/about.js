const About = {
  async render() {
    return `
      <section class="about-therathings">
        <div class="therathings-logo">
          <img src="./favicon.png" alt="logo therathings">
        </div>
        <div class="therathings-description">
          <h1>Tentang TheRathings</h1>
          <p>Anda saat ini sedang mengakses Website TheRathings. TheRathings dibangun dan dirancang oleh empat orang dengan visi untuk membantu mengelola permasalahan leftover food (makanan sisa). TheRathings juga memberikan rekomendasi tentang gaya hidup yang sehat dengan fokus pada pemilihan makanan dan minuman yang sehat.</p>
        </div>
      </section>

      <section class="about-team">
        <div class="team-description">
          <h1>The Team</h1>
          <p>Team kami terdiri dari mahasiswa dan mahasiswi yang berfokus dalam dunia Teknologi Informasi, khususnya dalam bidang Front-End dan Back End Website Developer. Misi kami adalah untuk membantu sesama terutama masyarakat yang ada disekitar kami. Harapan kami dengan dibuatnya Website TheRathings adalah agar dapat membantu masyarakat dalam memberikan referensi tentang Gaya Hidup yang sehat dengan fokus pada pemilihan makanan dan minuman yang sehat untuk dikonsumsi.</p> 
        </div>
        <div class="team-profile">
          <div class="card-profile">
            <img src="./img/team/yoga-tirta-permana.png" alt="Yoga Tirta">
            <h1>Yoga Tirta Permana</h1>
            <h2>Full-Stack Web Developer</h2>
            <a href="https://www.linkedin.com/in/yoga-tirta-permana/"><button>LinkedIn</button></a>
          </div>

          <div class="card-profile">
            <img src="./img/team/raehan-ramadhan.png" alt="Raehan">
            <h1>Raehan Ramadhan</h1>
            <h2>Full-Stack Web Developer</h2>
            <a href="https://www.linkedin.com/in/raehan-ramadhan/"><button>LinkedIn</button></a>
          </div>
          
          <div class="card-profile">
            <img src="./img/team/putri.png" alt="Utami Putri">
            <h1>Nur Rahma Utami Putri</h1>
            <h2>Full-Stack Web Developer</h2>
            <a href="#"><button>LinkedIn</button></a>
          </div>

          <div class="card-profile">
            <img src="./img/team/haniffah-sri-rinjani.png" alt="Haniffah">
            <h1>Haniffah Sri Rinjani</h1>
            <h2>Full-Stack Web Developer</h2>
            <a href="#"><button>LinkedIn</button></a>
          </div>
        </div>
      </section>
    `;
  },
};

export default About;
