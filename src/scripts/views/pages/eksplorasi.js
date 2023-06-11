/* eslint-disable eqeqeq */
import dataEksplorasi from '../../data/data-eksplorasi';
import UrlParser from '../../routes/url-parser';

const Eksplorasi = {
  async render() {
    return ` 
      <style>
        .breadcumb {
          margin-top: -3rem;
          box-sizing: border-box;
          padding: 1rem;
          border-radius: 1em;
          animation: slide_left 0.5s linear forwards;
          overflow: hidden;
        }
        .breadcumb p {
          animation: slide_left 0.45s linear forwards;
        }
        
        h2, h3 {
          color: var(--main-color);
        }

        h2 {
          line-height: 120%;
          margin-bottom: 1rem;
        }
        
        .breadcumb span {
          font-weight: bold;
        }
        .detailCard {
          width: 85%;
          max-width: 1800px;
          margin: 2.3rem auto;
          box-sizing: border-box;
          font-size: 1.2rem;
          line-height: 150%;
          opacity: 0;
          animation: slide_up .5s linear forwards;
        }
        
        .detailCard i {
          margin-right: 0.27rem;
        }
        
        .detailCard ul {
          margin-left: 2rem;
          line-height: 200%;
        }
        
        .detailCard .flex {
          margin-top: 2rem;
          display: flex;
          justify-content: center;
          box-shadow: 0 0.4rem 0.9rem 0 rgba(0, 0, 0, 0.15);
          border-radius: 1em;
        }
        
        .detailCard .imgCard {
          flex: 1;
          box-sizing: border-box;
          height: auto;
        }
        .detailCard .imgCard img {
          width: 100%;
          height: 100%;
          background-color: #8f8c8c;
          filter: contrast(1.2);
          object-fit: cover;
          border-radius: 1em 0 0 1em;
          opacity: 0;
          animation: fade_in .5s linear forwards;
          animation-delay: .5s;
        }
        
        @keyframes fade_in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .detailCard section {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
        }
        
        .flex section {
          padding: 1rem;
        }
        
        .flex section > div {
          margin-left: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          opacity: 0;
          animation: slide_right 0.5s linear forwards;
          animation-delay: 1s;
          overflow: hidden;
        }
        @keyframes slide_right {
          0% {
            transform: translatex(100px);
            opacity: 0;
          }
          100% {
            transform: translatex(0px);
            opacity: 1;
          }
        }
        
        .tag {
          margin-top: 1em;
        }
        .descriptionCard {
          padding: 1rem;
          margin: 2.7rem;
        }
        
        /* manfaat */
        .wrapFlex {
          opacity: 0;
          animation: slide_bottom 0.5s linear forwards;
          animation-delay: 1.6s;
        }
        .detailCard .wrapFlex {
          display: flex;
          margin-bottom: 5rem;
        }
        .wrapFlex .imgWrap {
          flex: 1;
          width: 100%;
        }
        .wrapFlex .imgWrap img {
          height: 230px;
        }
        .wrapFlex .manfaat {
          flex: 1;
        }
        
        /* resep */
        .resep {
          opacity: 0;
          animation: slide_up 0.5s linear forwards;
          animation-delay: 2.5s;
        }
        .resep section {
          padding: 2rem;
          margin-top: 1em;
          border-radius: 1em;
          box-shadow: 0 0.4rem 0.9rem 0 rgba(0, 0, 0, 0.15);
          box-sizing: border-box;
        }
        .resep h2 {
          text-align: center;
          margin: 1em 0;
        }
        
        .sumber {
          margin-top: 1rem;
          color: silver;
          font-style: italic;
          font-size: 0.8rem;
          text-align: center;
          box-sizing: border-box;
        }
        .sumber span {
          text-transform: none !important;
          font-weight: bold;
          box-sizing: border-box;
        }
        @media only screen and (max-width: 768px) {
          .bradcumb {
            margin-top: 2rem;
          }
          .descriptionCard {
            padding: 0;
            margin: 0;
          }
          h2 {
            font-size: 1.4rem;
          }
          .flex section {
            padding: 0;
          }
          .flex section > div {
            margin: 1em;
          }
          .flex .tags {
            position: relative;
            top: -10px;
          }
          .wrapFlex .imgWrap img {
            height: 200px;
        
          }
          section .detailCard {
            width: 95%;
            padding: 1rem;
            font-size: 1rem;
          }
          .detailCard .flex {
            margin-top: 2rem;
            flex-direction: column;
          }
          .detailCard .flex .tag {
            padding-bottom: 1rem;
          }
          .detailCard .wrapFlex {
            flex-direction: column;
            margin-bottom: 3rem;
          }
          .detailCard .imgCard img {
            border-top-right-radius: 1em;
            border-top-left-radius: 1em;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            animation: slide_up 0.75s linear forwards;
          }
          .manfaat {
            margin-top: 3rem;
          }
          .resep section {
            padding: 1rem;
          }
        }      
      </style>

      <section class="content"></section>
    `;
  },

  async afterRender() {
    const container = document.querySelector('.content');
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const showData = (data) => {
      // fungsi mem filter data
      const filteredData = data.filter((d) => d.id == url.id);

      filteredData.forEach((resto) => {
        const content = `
          <section class="detailCard">
            <section class="breadcumb">
              <p>
                <a href="/#/explore">Explore</a> /
                <span>${resto.nama}</span>
              </p>
            </section>

            <div class="flex">
              <div class="imgCard">
                <img src="${resto.gambar}" alt="" />
              </div>

              <section>
                <div class="title">
                  <h2>${resto.nama}</h2>
                </div>

                <div class="tags">
                  <p>${resto.deskripsi}</p>
                  <p class="tag">
                    <i class="fas fa-tag"></i>
                    <span>${resto.kategori}</span>
                  </p>
                </div>
              </section>
            </div>

            <div class="descriptionCard">
              <div class="wrapFlex">
                <div class="manfaat">
                  <h3><i class="fas fa-plus-square"></i> Manfaat</h3>
                  <ul>${resto.manfaat}</ul>
                </div>
                <div class="imgWrap">
                  <img src="./img/detail-eks-ilus.png" alt="" />
                </div>
              </div>

              <div class="resep">
                <section>
                  <h2><i class="fas fa-check-double"></i> Mari buat sendiri</h2>
                  <div class="bahan">
                    <h3><i class="fas fa-clipboard"></i> Bahan - Bahan</h3>
                    <ul>${resto.bahan}</ul>
                  </div>
                  <div class="prosedur">
                    <h3><i class="fas fa-book-open"></i> langkah - langkah</h3>
                    <ul>${resto.prosedur}</ul>
                  </div>
                  <div class="sumber">
                    (sumber :
                      <span>${resto.sumber}</span>
                    )
                  </div>
                </section>
              </div>
            </div>
          </section>
        `;
        container.innerHTML += content;
      });
    };

    showData(dataEksplorasi);
  },
};

export default Eksplorasi;
