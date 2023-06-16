const About = {
  async render() {
    return `
      <section class="hero" id="gabung">
        <h1>About TheRathings</h1>
        <p>ketahui tentang latar belakang TheRathings</p>
      </section>
    
      <section class="about-therathings">
        <div class="therathings-logo">
          <img src="./favicon.png" alt="logo therathings">
        </div>
        <div class="therathings-description">
          <h1>About TheRathings</h1>
          <p>Anda saat ini sedang mengakses Website TheRathings. TheRathings dibangun dan dirancang oleh empat orang dengan visi untuk membantu mengelola permasalahan 
          leftover food (makanan sisa). TheRathings juga memberikan rekomendasi tentang gaya hidup yang sehat dengan fokus pada pemilihan makanan dan minuman yang sehat.</p>
        </div>
      </section>

      <section class="about-team">
        <div class="team-description">
          <h1>Our Best Team</h1>
          <p>Team <b>TheRathings</b> terdiri dari empat mahasiswa berpengalaman yang berasal dari empat universitas berbeda diseluruh Indonesia. Kami akan terus berinovasi 
          dan selalu berusaha untuk melakukan yang terbaik dengan semangat juang yang tinggi demi menciptakan lingkungan yang baik dengan terobosan baru yang kita ciptakan!
        </div>
        <div class="team-profile">
          <div class="card-profile">
            <img src="./img/team/yoga-tirta-permana.png" alt="Yoga Tirta">
            <h1>Yoga Tirta Permana</h1>
            <h2>Full-Stack Web Developer</h2>
            <div class="team-icon">
              <a href="https://www.linkedin.com/in/yoga-tirta-permana/"><i class="fa-brands fa-linkedin"></i></a>
              <a href="https://github.com/yoga-tirta"><i class="fa-brands fa-square-github"></i></a>
              <a href="https://www.instagram.com/hi.yogatirta/"><i class="fa-brands fa-square-instagram"></i></a>
            </div>
          </div>

          <div class="card-profile">
            <img src="./img/team/raehan-ramadhan.png" alt="Raehan">
            <h1>Raehan Ramadhan</h1>
            <h2>Full-Stack Web Developer</h2>
            <div class="team-icon">
              <a href="https://www.linkedin.com/in/raehan-ramadhan/"><i class="fa-brands fa-linkedin"></i></a>
              <a href="https://github.com/raehanrmdhn25"><i class="fa-brands fa-square-github"></i></a>
              <a href="https://www.instagram.com/raehanramadhan_/"><i class="fa-brands fa-square-instagram"></i></a>
          </div>
          </div>
          
          <div class="card-profile">
            <img src="./img/team/putri.png" alt="Utami Putri">
            <h1>Nur Rahmah Utami Putri</h1>
            <h2>Full-Stack Web Developer</h2>
            <div class="team-icon">
              <a href="https://www.linkedin.com/in/utamiputri117/"><i class="fa-brands fa-linkedin"></i></a>
              <a href="https://github.com/uputri"><i class="fa-brands fa-square-github"></i></a>
              <a href="https://www.instagram.com/utamixputri/"><i class="fa-brands fa-square-instagram"></i></a>
          </div>
          </div>

          <div class="card-profile">
            <img src="./img/team/haniffah-sri-rinjani.png" alt="Haniffah">
            <h1>Haniffah Sri Rinjani</h1>
            <h2>Full-Stack Web Developer</h2>
            <div class="team-icon">
              <a href="https://www.linkedin.com/in/haniffahsr"><i class="fa-brands fa-linkedin"></i></a>
              <a href="https://github.com/haniffahsr"><i class="fa-brands fa-square-github"></i></a>
              <a href="https://www.instagram.com/ooyyfaa/"><i class="fa-brands fa-square-instagram"></i></a>
          </div>
          </div>
        </div>
      </section>
    `;
  },
};

export default About;
