/* eslint-disable no-shadow */
import dataEksplorasi from '../../data/data-eksplorasi';

const Explore = {
  async render() {
    return `
      <section class="hero">
        <h1>Explore</h1>
        <p>Telusuri dan pilih makanan kesukaanmu pada restaurant leftover food</p>
      </section>
      <section class="content-explore"></section>
    `;
  },

  async afterRender() {
    const container = document.querySelector('.content-explore');

    const fetchData = (data) => {
      data.forEach((data) => {
        const card = `
          <div class="card-explore">
            <a href="${`/#/detail-explore/${data.id}`}">
              <img class="desc-explore" data-id="${data.id}" src="${data.gambar}" alt="${data.id}" loading="lazy"/>
            </a>
            <div class="description-explore">
              <a href="${`/#/detail-explore/${data.id}`}">
                <h2 class="name-explore" data-id="${data.id}">${data.nama}</h2>
              </a>
              <p class="desc-explore" data-id="${data.id}">${data.deskripsi}</p>
              <p class="tag-explore" ><i class="fas fa-tag"></i> ${data.kategori}</p>
            </div>
          </div>
        `;
        container.innerHTML += card;
      });
    };

    fetchData(dataEksplorasi);
  },
};

export default Explore;
