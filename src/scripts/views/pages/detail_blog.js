import dataEksplorasi from '../../data/data-eksplorasi';
import UrlParser from '../../routes/url-parser';

const Detail_Blog = {
  async render() {
    return ` <style>
            .breadcumb {
            margin: 4.3rem 0 1.5rem 0;
            box-sizing: border-box;
            padding: 1rem;
            border-radius: 1em;
            }

            .container .bradcumb p {
            animation: slide_down .2s linear forwards;
            animation-delay: 1s;
            }

            h1 {
            color: var(--darkColor);
            line-height: 120%;
            margin: 1.3rem 0 1.3rem 0;
            }

            .breadcumb span {
            font-weight: bold;
            }
            .container {
            width: 85%;
            max-width: 965px;
            height: auto;
            margin: 2.3rem auto;
            box-sizing: border-box;
            font-size: 1.2rem;
            line-height: 150%;
            }
            .container .imgWrap {
            width: 100%;
            box-sizing: border-box;
            background-color: var(--loading);
            height: 300px;
            margin: auto;
            }
            .container .imgWrap img {
            width: 100%;
            filter: contrast(1.2);
            height: 100%;
            background-position: center;
            object-fit: cover;
            border-radius: 1rem;
            opacity: 0;
            animation: fade_in .3s linear forwards;
            animation-delay: .85s;
            }

            .deskripsi p {
            line-height: 185%;
            animation: slide_up .3s linear forwards;
            animation-delay: 2s;
            }

            .title p {
            font-style: italic;
            margin-bottom: 1rem;
            color: silver;
            }

            .deskripsi ol {
            margin-left: 2rem;
            }

            .deskripsi li span {
            font-weight: bold;
            }

            .sumber {
            margin-top: 1rem;
            color: silver;
            font-style: italic;
            font-size: 0.8rem;
            }
            .sumber span {
            text-transform: none !important;
            font-weight: bold;
            }

            @media only screen and (max-width: 768px) {
            .bradcumb {
                margin-top: 2rem;
            }
            .container {
                padding: 0;
                margin: 0;
            }
            h1 {
                font-size: 1.4rem;
                margin: 0.9rem 0 0.9rem 0;
                line-height: 120%;
                color: var(--darkColor);
            }
            section.container {
                width: 95%;

                font-size: 1rem;
                margin: 0 auto 3rem;
            }
            }

            </style>
       <section class="content"></section>;`;
  },

  async afterRender() {
    const container = document.querySelector('.content');
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const showData = (data) => {
      // fungsi mem filter data
      const filteredData = data.filter((d) => d.id == url.id);

      filteredData.forEach((foods) => {
        const content = `
                  <section class="container">
                  <section class="breadcumb">
                    <p>
                    <a href="../blog.html">blog</a> /
                    <span>
                        ${foods.nama}
                    </span>
                    </p>
                </section>
                  <div class="imgWrap"><img src="${foods.gambar}" alt="" /></div>
                  <div class="title">
                  <h1>
                      ${foods.nama}
                  </h1>
                  <p>
                      <i class="fas fa-calendar-alt"></i>
                      <span>
                      <!-- tanggal -->
                      </span>
                  </p>
                  </div>
                  <div class="deskripsi">
                  <p>
                      ${foods.deskripsi}
                      ${foods.manfaat}
                  </p>
                  <div class="sumber">
                      (sumber :
                      <span>
                      ${foods.sumber}
                      </span>
                      )
                  </div>
                  </div>
                  </section>`;
        container.innerHTML += content;
      });
    };

    showData(dataEksplorasi);
  },
};

// eslint-disable-next-line camelcase
export default Detail_Blog;
