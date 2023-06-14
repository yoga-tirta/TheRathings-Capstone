/* eslint-disable eqeqeq */
import FavoriteFoodIdb from '../../data/bookmark-food-idb';
import { createBookmarkItemTemplate } from '../templates/template-creator';

const Bookmark = {
  async render() {
    return `
      <section class="hero">
        <h1>Bookmark</h1>
        <p>Pilih dan simpan resep favoritmu</p>
      </section>

      <div class="bookmark-continer">
        <h2>
          <i class="fa-solid fa-bookmark fa-flip icon-title"></i> Bookmarked Recipes <i class="fa-solid fa-bookmark fa-flip icon-title"></i>
        </h2>
        <div class="bookmark-message"></div>
          <div class="food-content bookmark-content">
            <div class="food-content-item">
            <div id="foods" class="foods"></div>
          </div>
      </div>
    `;
  },

  async afterRender() {
    const foods = await FavoriteFoodIdb.getAllFoods();
    const foodsContainer = document.querySelector('#foods');
    if (foods == 0) {
      document.querySelector('.bookmark-message').innerHTML += '<h4><i class="fa-regular fa-folder-open"></i> Bookmark Not Found !</h4>';
    } else {
      foods.forEach((food) => {
        foodsContainer.innerHTML += createBookmarkItemTemplate(food);
      });
    }
  },
};

export default Bookmark;
