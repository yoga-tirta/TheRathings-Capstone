const dataEksplorasi = [
  {
    id: '1',
    nama: 'JCO',
    kategori: 'Donut',
    gambar: './img/explore/jco.webp',
    bahan: [
      'Donat Coklat Tiramisu, Donat Matcha Green Tea, Donat Caramel Crunch, Donat Ceese Me Up, Donat Peanut Butter Heaven, Donat Straberry Bliss, Donat Almond Crunch, Donat Cookies and Cream',
    ],
    prosedur: [
      'Nama Restaurant: JCO',
      'Alamat: Jalan Raya Kebon Jeruk No. 123, Jakarta Barat',
      'Jam Operasional: Senin - Minggu, pukul 07.00 - 21.00',
      'Instagram: @jcoindonesia',
      'Facebook: facebook.com/jcoindonesia',
      'Nomor Kontak: 457-999-123',
      'Layanan Servis: Pesan Antar (Delivery)',
    ],
    deskripsi:
      'J.CO adalah restoran asal Indonesia yang mengkhususkan dalam donat, kopi, dan yogurt beku',
    manfaat: [
      'Jadilah bagian dari gerakan mengurangi pemborosan makanan! Manfaatkan bahan terbuang, ciptakan hidangan istimewa, dan selamatkan lingkungan. Hubungi layanan kami untuk memulai sekarang!',
    ],
    sumber: 'https://m.jcodonuts.com/id',
  },
  {
    id: '2',
    nama: 'Pizza Hut',
    kategori: 'Pizza',
    gambar: './img/explore/pizza.png',
    bahan: [
      'Pizza Margherita, Chicken Wings, dan Spaghetti Bolognese',
    ],
    prosedur: [
      'Nama Restaurant: Pizza Hut',
      'Alamat: Jalan Raya Pizzasana No.123, Kota Surabaya',
      'Jam Operasional: Senin - Minggu, pukul 07.00 - 21.00',
      'Instagram: @pizzahut',
      'Facebook: facebook.com/pizzahutindonesia',
      'Nomor Kontak: 137-8989-123',
      'Layanan Servis: Pesan Antar (Delivery)',
    ],
    deskripsi:
      'Pizza Hut adalah sebuah waralaba restoran cepat saji yang menyajikan berbagai macam pizza dengan beragam topping dan saus yang lezat.',
    manfaat: [
      'Temukan potensi tak terbatas dari food waste! Bukti­kan kreativitasmu dengan menciptakan hidangan tak terlupakan. Bergabunglah dengan kami dalam menjadikan food waste sebagai keajaiban kuliner. Hubungi layanan kami sekarang!',
    ],
    sumber: 'https://www.pizzahut.co.id/',
  },
  {
    id: '3',
    nama: 'KFC',
    kategori: 'Chicken',
    gambar: './img/explore/kfc.png',
    bahan: [
      'Ayam Goreng Crispy, Twister, Zinger Burger, Hot Wings, Chicken Popcorn, Mashed Potato, Coleslaw, Biscuit, Soft Drink',
    ],
    prosedur: [
      'Nama Restaurant: KFC',
      'Alamat: Jalan A. Yani No. 3, Jakarta Selatan',
      'Jam Operasional: Senin - Minggu, pukul 07.00 - 21.00',
      'Instagram: @kfcindonesia',
      'Facebook: facebook.com/kfcindonesia',
      'Nomor Kontak: 666-019-555',
      'Layanan Servis: Drive-Thru',
    ],
    deskripsi:
      'Kentucky Fried Chicken, adalah sebuah jaringan restoran cepat saji yang terkenal dengan ayam gorengnya yang lezat dan resep rahasia bumbu yang khas.',
    manfaat: [
      'Ayo bergabung dalam gerakan mengurangi pemborosan makanan! Jadilah agen perubahan dan tunjukkan bahwa kreativitasmu dapat menyelamatkan lingkungan. Segera hubungi layanan kami untuk memulai petualangan kuliner yang menakjubkan!',
    ],
    sumber: 'https://kfcku.com/',
  },
  {
    id: '4',
    nama: 'McDonalds',
    kategori: 'Burger',
    gambar: './img/explore/mcd.png',
    bahan: [
      'Cheeseburger, McChicken, Filet-O-Fish, Apple Pie, McNuggets, Soft Serve Cone, Big Mac',
    ],
    prosedur: [
      'Nama Restaurant: McDonalds',
      'Alamat: Jalan Kayu Manis No. 12, Banjarmasin',
      'Jam Operasional: Senin - Minggu, pukul 07.00 - 21.00',
      'Instagram: @mcdindonesia',
      'Facebook: facebook.com/mcdindonesia',
      'Nomor Kontak: 745-145-863',
      'Layanan Servis: Pesan Antar (Delivery)',
    ],
    deskripsi:
      'McDonalds adalah sebuah waralaba restoran cepat saji global yang sajikan berbagai macam burger, seperti Big Mac, Cheeseburger, dan Quarter Pounder, dengan variasi pilihan topping dan saus.',
    manfaat: [
      'Ubah food waste menjadi peluang kuliner yang luar biasa! Jadilah bagian dari gerakan kami untuk mengurangi pemborosan makanan. Tunjukkan kreativitasmu, selamatkan lingkungan, dan buat hidangan tak terlupakan. Segera hubungi layanan kami untuk memulai perjalananmu!',
    ],
    sumber: 'https://mcdonalds.co.id/',
  },
  {
    id: '5',
    nama: 'Burger King',
    kategori: 'Burger',
    gambar: './img/explore/burger.png',
    bahan: [
      'Whopper, Cheeseburger, Chicken Royale, Bacon King, French Fries, Chicken Tenders',
    ],
    prosedur: [
      'Nama Restaurant: Burger King',
      'Alamat: Jalan Patimura No. 6 , Malang',
      'Jam Operasional: Senin - Minggu, pukul 07.00 - 21.00',
      'Instagram: @burgerkindonesia',
      'Facebook: facebook.com/burgerkingindonesia',
      'Nomor Kontak: 137-8989-123',
      'Layanan Servis: Pesan Antar (Delivery)',
    ],
    deskripsi:
      'Burger King adalah sebuah waralaba restoran cepat saji dengan menu burger yang lezat dan variasi topping yang kaya.',
    manfaat: [
      'Jangan biarkan makanan terbuang sia-sia! Bergabunglah dalam gerakan kami untuk mengurangi pemborosan makanan. Manfaatkan bahan-bahan terbuang dan hasilkan hidangan istimewa. Hubungi layanan kami sekarang dan mulailah berkontribusi!',
    ],
    sumber: 'https://www.bk.com/',
  },
  {
    id: '6',
    nama: 'Sushi Tei',
    kategori: 'Sushi',
    gambar: './img/explore/sushi.png',
    bahan: [
      'Salmon Sashimi, Tuna Roll, California Roll, Gyoza, Miso Soup, Sake (Salmon) Nigiri',
    ],
    prosedur: [
      'Nama Restaurant: Sushi Tei',
      'Alamat: Jalan Hiu Putih No. 01, Jakarta Barat',
      'Jam Operasional: Senin - Minggu, pukul 07.00 - 21.00',
      'Instagram: @Suhsiteindonesia',
      'Facebook: facebook.com/sushiteindonesia',
      'Nomor Kontak: 137-8989-123',
      'Layanan Servis: Drive-Thru',
    ],
    deskripsi:
      'Sushi Tei adalah sebuah restoran Jepang yang terkenal dengan hidangan sushi dan makanan Jepang lainnya.',
    manfaat: [
      'Bersama-sama, kita dapat membuat perbedaan! Bergabunglah dalam gerakan mengurangi pemborosan makanan. Ciptakan hidangan istimewa dari bahan-bahan terbuang dan buktikan bahwa kreativitasmu dapat menyelamatkan lingkungan. Hubungi layanan kami sekarang dan jadilah bagian dari perubahan!',
    ],
    sumber: 'https://www.sushitei.co.id/',
  },
];

export default dataEksplorasi;
