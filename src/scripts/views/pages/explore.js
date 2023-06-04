/* eslint-disable max-len */
const Explore = {
  async render() {
    return `
      <section class="hero">
        <h1>Explore</h1>
        <p>Telusuri dan pilih makanan kesukaanmu pada restaurant leftover food</p>
      </section>

      <section class="content"></section>
    `;
  },
};

// // Data Eksplorasi
// const dataEksplorasi = [
//   {
//     id: '1',
//     nama: 'Omelet',
//     kategori: 'telur',
//     gambar: 'images/foods/omelet.jpeg',
//     bahan: [
//       '2 Butir telur ayam',
//       '2 Sendok makan susu cair',
//       '1 Sendok makan minyak goreng',
//       'Garam dan merica',
//     ],
//     prosedur: [
//       'Pecahkan telur, kemudian tambahkan garam, susu, dan lada. Kocok beberapa menit sampai berbusa',
//       'Panaskan minyak di penggorengan dengan api sedang. Goreng telur sampai setengah matang, lalu kecilkan api',
//       'Masak telur sampai matang lalu sajikan dalam keadaan terlipat',
//       'Demikian cara membuat omelet telur simpel yang empuk dan gurih',
//     ],
//     deskripsi:
//       'Omelet adalah makanan yang terbuat dari telur kocok yang dimasak dengan mentega atau minyak di atas penggorengan',
//     manfaat: [
//       'Membentuk jaringan tubuh dan membantu fungsinya',
//       'Menjaga kesehatan mata',
//       'Menjaga kesehatan otak',
//       'Menurunkan kadar kolesterol jahat',
//       'Membantu menurunkan risiko penyakit jantung',
//       'Membantu menjaga berat badan',
//       'Menguatkan sistem imun',
//     ],
//     sumber: 'https://www.merdeka.com/gaya/',
//   },
//   // Tambahkan objek resep lainnya jika ada
// ];

// // Kode manipulasi elemen HTML
// const container = document.querySelector('.content');

// function setEl(element, content) {
//   element.innerHTML = content;
// }

// function list(data, element) {
//   data.forEach((e) => {
//     const el = `
//     <li>${e}</li>`;
//     element.innerHTML += el;
//   });
// }

// function fetchData(data) {
//   data.forEach((data) => {
//     const card = `
//       <div class="card">
//         <img class="desc" data-id="${data.id}" src="${data.gambar}" alt="${data.id}" loading="lazy"/>
//         <div class="description">
//           <a href="details/detail-index.html">
//             <h2 class="name" data-id="${data.id}">${data.nama}</h2>
//           </a>
//           <p class="desc" data-id="${data.id}">${data.deskripsi}</p>
//           <p class="tag"><i class="fas fa-tag"></i> ${data.kategori}</p>
//         </div>
//       </div>
//     `;

//     container.innerHTML += card;
//   });
// }

// fetchData(dataEksplorasi);
// const id = localStorage.getItem('data-food');
// const hasil = dataEksplorasi[Number(id - 1)];

// const elbahan = document.querySelector('.bahan ul');
// const elmanfaat = document.querySelector('.manfaat ul');
// const elprosedur = document.querySelector('.prosedur ul');
// const breadcumb = document.querySelector('.breadcumb span');
// const eldeskripsi = document.querySelector('.tags p');
// const imgCard = document.querySelector('.imgCard img');
// const tag = document.querySelector('.tag span');
// const title = document.querySelector('.title h2');
// const subtitle = document.querySelector('title');
// const elmSumber = document.querySelector('.sumber span');
// const {
//   bahan, manfaat, prosedur, nama, gambar, deskripsi, kategori, sumber,
// } = hasil;

// imgCard.setAttribute('src', `../${gambar}`);

// setEl(subtitle);
// setEl(title);
// setEl(tag, kategori);
// setEl(eldeskripsi, deskripsi);
// setEl(breadcumb);
// setEl(elmSumber, sumber);

// list(bahan, elbahan);
// list(manfaat, elmanfaat);
// list(prosedur, elprosedur);

// container.onclick = (e) => {
//   if (e.target.className == 'name' || e.target.className == 'desc') {
//     const id = e.target.getAttribute('data-id');
//     localStorage.setItem('data-food', id);
//     window.location.href = 'details/detail-index.html';
//   }
// };

export default Explore;
