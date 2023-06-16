/* eslint-disable eqeqeq */
import dataEksplorasi from '../../data/data-eksplorasi';
import UrlParser from '../../routes/url-parser';

const DetailExplore = {
  async render() {
    return ` 
      <section class="content-detail-explore"></section>
    `;
  },

  async afterRender() {
    const container = document.querySelector('.content-detail-explore');
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const showData = (data) => {
      // fungsi mem filter data
      const filteredData = data.filter((d) => d.id == url.id);

      filteredData.forEach((resto) => {
        const content = `
          <section class="card-detail-explore">
            <section class="breadcumb-detail-explore">
              <p>
                <a href="/#/explore">Explore</a> /
                <span>${resto.nama}</span>
              </p>
            </section>

            <div class="flex-detail-explore">
              <div class="img-card-detail-explore">
                <img src="${resto.gambar}" alt="" />
              </div>

              <section>
                <div class="title-detail-explore">
                  <h2>${resto.nama}</h2>
                </div>

                <div class="tags-detail-explore">
                  <p>${resto.deskripsi}</p>
                  <p class="tag-detail-explore">
                    <i class="fas fa-tag"></i>
                    <span>${resto.kategori}</span>
                  </p>
                </div>
              </section>
            </div>

            <div class="description-card-detail-explore">
              <div class="wrap-flex-detail-explore">
                <div class="manfaat-detail-explore">
                  <h3><i class="fas fa-plus-square"></i> Berkontibusi pada Perubahan</h3>
                  <ul>${resto.manfaat}</ul>
                </div>
                <div class="img-wrap-detail-explore">
                  <img src="./img/detail-explore.png" alt="" />
                </div>
              </div>

              <div class="resep-detail-explore">
                <section>
                  <h2><i class="fas fa-check-double"></i>Temukan dan Nikmati</h2>
                  <div class="bahan-detail-explore">
                    <h3><i class="fas fa-clipboard"></i> Menu Sisa Makanan</h3>
                    <ul>${resto.bahan}</ul>
                  </div>
                  <div class="prosedur-detail-explore">
                    <h3><i class="fas fa-book-open"></i>Informasi Restaurant</h3>
                    <ul>${resto.prosedur}</ul>
                  </div>
                  <div class="sumber-detail-explore">
                    (sumber :
                      <a href="${resto.sumber}">
                        <span>${resto.sumber}</span>
                      </a>
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

export default DetailExplore;
