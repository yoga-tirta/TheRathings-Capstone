/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
import dataEksplorasi from '../../data/data-eksplorasi';
import { createFoodItemTemplate, createSkeletonItemTemplate } from '../templates/template-creator';

const Explore = {
  async render() {
    return `
       <style>
        section.content {
          width: 80%;
          max-width: 1200px;
          padding: 1em;
          display: flex;
          margin: 2rem auto;
          flex-wrap: wrap;
          justify-content: space-evenly;
        }
        
        .card {
          width: 310px;
          background-color: white;
          margin: 1em;
          box-sizing: border-box;
          box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px;;
          padding: 1.4rem;
          border-radius: 0.5rem;
          cursor: pointer;
          overflow: hidden;
        }
        
        @keyframes slide_top {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }
          100% {
            transform: translateY(0px);
            opacity: 1;
          }
        }
        
        .card:hover {
          box-shadow: 0 0.4rem 0.9rem 0 rgba(0, 0, 0, 0.15);
          transform: scale(1.03);
        }
        .card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-top-right-radius: 0.5rem;
          border-top-left-radius: 0.5rem;
          background-color: #8f8c8c;
          filter: contrast(1.2);
          transition: 0.3s ease-in;
          opacity: 0.8;
        }
        
        .card img:hover {
          opacity: 1;
        }
        
        .card p {
          margin-bottom: 1em;
          font-size: 1rem;
          line-height: 150%;
          letter-spacing: 1.2px;
        }

        .card h2 {
          color: var(--main-color);
        }
        
        p.tag {
          color: silver;
        }
        @media only screen and (max-width: 768px) {
          h2.name {
            font-size: 1.4rem;
          }
          .content {
            width: 100%;
          }
          .card {
            width: 320px;
          }
        }
      </style>

      <section class="hero">
        <h1>Explore</h1>
        <p>Telusuri dan pilih makanan kesukaanmu pada restaurant leftover food</p>
      </section>
      <section class="content"></section>
    `;
  },

  async afterRender() {
    const container = document.querySelector('.content');

    const fetchData = (data) => {
      data.forEach((data) => {
        const card = `
          <div class="card">
            <img class="desc" data-id="${data.id}" src="${data.gambar}" alt="${
  data.id
}" loading="lazy"/>
            <div class="description">
              <a href="${`/#/detail_blog/${data.id}`}">
                <h2 class="name" data-id="${data.id}">${data.nama}</h2>
              </a>
              <p class="desc" data-id="${data.id}">${data.deskripsi}</p>
              <p class="tag" ><i class="fas fa-tag"></i> ${data.kategori}</p>
              
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
