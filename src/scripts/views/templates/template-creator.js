/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable radix */
import CONFIG from '../../globals/config';

const createFoodItemTemplate = (food) => `
  <div class="food-item">
    <a href="${`/#/detail/${food.id}`}">
      <img src="${food.image}" class="food-item-image" alt="${food.title}" crossorigin="anonymous">
    </a>

    <div class="food-item-main">
      <div class="food-item-info">
        <ul>
          <li><i class="fa-solid fa-heart-pulse icon"></i>${food.healthScore}%</li>
          <li class="food-item-info-text">Healthy</li>
        </ul>

        <ul class="food-item-info-mid">
          <li><i class="fa-regular fa-clock icon"></i>${food.readyInMinutes}</li>
          <li class="food-item-info-text">Minutes</li> 
        </ul>

        <ul>
          <li><i class="fa-solid fa-bowl-food icon"></i>${food.servings}</li>
          <li class="food-item-info-text">Portions</li>
        </ul>
      </div>
      <h5 class="food-item-title"><a href="${`/#/detail/${food.id}`}">${food.title}</a></h5>
      <p class="food-item-summary">${food.summary}</p>
    </div>
  </div>
`;

const createFoodDetailTemplate = (food) => `
  <h1 class="food-title">${food.title}</h1>
  <img class="food-image" src="${food.image}" alt="${food.title}" crossorigin="anonymous">

  <div calss="food-information">
    <div id="foodSource" class="food-source-name"></div>
    <p class="food-source">From <a href="${food.sourceUrl}">${food.sourceUrl.split('/')[2]}</a></p>

    <div class="food-type">
      ${food.dishTypes.map((name) => `
        <li class="food-type-list">#${name}</li>
      `).join('')}
    </div>
    <div id="saveButtonContainer" class="food-action"></div>
  </div>

  <div class="food-fact">
    <h4>
      <i class="fa-solid fa-chart-bar icon-header"></i> Menu Statistic
    </h4>
    <div class="food-fact-item">
      <div>
        <li class="food-fact-value"><i class="fa-solid fa-heart-pulse icon"></i></li>
        <li class="food-fact-title">${food.healthScore}% Healthy Food</li>
      </div>
      <div>
        <li class="food-fact-value"><i class="fa-solid fa-clock icon"></i></li>
        <li class="food-fact-title">Ready In ${food.readyInMinutes} Minutes</li>
      </div>
      <div>
        <li class="food-fact-value"><i class="fa-solid fa-bowl-food icon"></i></li>
        <li class="food-fact-title">Fit for ${food.servings} Portions</li>
      </div>
      <div>
        <li class="food-fact-value"><i class="fa-solid fa-scale-balanced icon"></i></li>
        <li class="food-fact-title">${food.weightWatcherSmartPoints} Weight Score</li>
      </div>
    </div>
  </div>

  <div class="food-nutrition">
    <h4><i class="fa-brands fa-nutritionix icon-header"></i> Menu Nutritions</h4>
    <div class="food-brackdown-title">
      <li><i class="fas fa-circle icon-protein"></i> Proteins</li>
      <li><i class="fas fa-circle icon-fat"></i> Fats</li>
      <li><i class="fas fa-circle icon-carbs"></i> Carbohydrats</li>
    </div>
    <div class="food-brackdown">
      <li class="percentProtein" style="width:${parseInt(food.nutrition.caloricBreakdown.percentProtein)}%;"> 
        ${parseInt(food.nutrition.caloricBreakdown.percentProtein)}%
      </li>
      <li class="percentFat" style="width:${parseInt(food.nutrition.caloricBreakdown.percentFat)}%;">
        ${parseInt(food.nutrition.caloricBreakdown.percentFat)}%
      </li>
      <li class="percentCarbs" style="width:${parseInt(food.nutrition.caloricBreakdown.percentCarbs)}%;">
        ${parseInt(food.nutrition.caloricBreakdown.percentCarbs)}%
      </li>
    </div>
    <div class="food-nutrition-list">
      <table>
        ${food.nutrition.nutrients.map((nutrient) => `
          <tr>
            <td>${nutrient.name}</td>
            <td>${parseInt(nutrient.amount)} ${nutrient.unit}</td>
            <td>${parseInt(nutrient.percentOfDailyNeeds)}%</td>
          </tr>
        `).join('')}
      </table>
    </div>
    <div class="food-nutrition-label">
      <img class="lazyload" data-src="${CONFIG.BASE_URL}recipes/${food.id}/nutritionLabel.png?${CONFIG.API_KEY}" alt="Nutrition Label" crossorigin="anonymous">
    </div>
  </div>

  <div class="food-recipe">
    <h4>
      <i class="fa-solid fa-pepper-hot icon-header"></i> Menu Ingredients
    </h4>
    <p>
      ${food.extendedIngredients.map((ingredient) => `
        <p>${ingredient.original}</p>
      `).join('')}
    </p>
    <img class="food-ingredient-image lazyload" data-src="${CONFIG.BASE_URL}recipes/${food.id}/ingredientWidget.png?${CONFIG.API_KEY}" alt="Ingredients" crossorigin="anonymous">
    
    <h4>
      <i class="fa-solid fa-kitchen-set icon-header"></i> Cook Equipments
    </h4>
    <img class="food-equipments lazyload" data-src="${CONFIG.BASE_URL}recipes/${food.id}/equipmentWidget.png?${CONFIG.API_KEY}" alt="Equipments" crossorigin="anonymous">

    <h4>
      <i class="fa-solid fa-newspaper icon-header"></i> Menu Instructions
    </h4>
    <p>
      ${food.analyzedInstructions.map((instruction) => `
        <ol>${instruction.steps.map((step) => `
          <li>${step.step}</li>`).join('')}
        </ol>
      `).join('')}
    </p>
  </div>

  <div class="food-summary">
    <h4>
      <i class="fa-solid fa-lightbulb icon-header"></i> Menu Summary
    </h4>
    <p>${food.summary}</p>
  </div>
`;

const createSimilarFoodItemTemplate = (food) => `
  <div class="aside-food-item">
    <a href="${`/#/detail/${food.id}`}">
      <h5 class="similar-food-item-title">${food.title}</h5>
      <div class="similar-food-item-info">
        <ul class="similar-food-item-info-icon">
          <li class="line"><i class="fa-solid fa-clock icon"></i> ${food.readyInMinutes} minutes</li>
          <li><i class="fa-solid fa-bowl-food icon"></i> ${food.servings} portions</li>
        </ul>
      </div>
    </a>
  </div>
`;

const createVideoFoodItemTemplate = (video) => `
  <div class="aside-food-item video-aside">
    <a class="video-food-item" href="https://www.youtube.com/watch?v=${video.youTubeId}">
    <img class="video-food-item-thumbnail lazyload" data-src="${video.thumbnail}" alt="${food.shortTitle}">
    <div class="video-food-item-content">
        <h5 class="video-food-item-title">${video.shortTitle}</h5>
        <div class="video-food-item-info">
          <ul class="video-food-item-info-icon">
            <li class="line"><i class="fa-solid fa-star-half-stroke icon"></i> ${video.rating}</li>
            <li><i class="fa-regular fa-eye icon"></i> ${video.views}</li>
          </ul>
        </div>
      </div>
    </a>
  </div>
`;

const createBookmarkItemTemplate = (food) => `
  <div class="food-item">
    <a href="${`/#/detail/${food.id}`}">
      <img class="food-item-image" data-src="${food.image}" alt="${food.title}" crossorigin="anonymous">
    </a>

    <div class="food-item-main">
      <div class="food-item-info">
        <ul class="food-item-info-first">
          <li><i class="fa-solid fa-heart-pulse icon"></i> ${food.healthScore}%</li>
          <li class="food-item-info-text">Healthy</li>
        </ul>
        <ul>
          <li><i class="fa-solid fa-bowl-food icon"></i> ${food.servings}</li>
          <li class="food-item-info-text">Portions</li>
        </ul>
      </div>
      <h5 class="food-item-title"><a href="${`/#/detail/${food.id}`}">${food.title}</a></h5>
      <p class="food-item-summary">${food.summary}</p>
    </div>
  </div>
`;

const createSaveButtonTemplate = () => `
  <button class="food-button-like" id="saveButton">
    <i class="fa-regular fa-bookmark icon"></i> Save Recipe
  </button>
`;

const createSavedButtonTemplate = () => `
  <button class="food-button-like" id="saveButton">
    <i class="fa-solid fa-bookmark icon"></i> Unsave Recipe
  </button>
`;

// ==================== SKELETON UI =========================
const createSkeletonItemTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i++) {
    template += `
      <div class="food-item">
      <img class="food-item-image skeleton lazyload" data-src="./skeleton.png" alt="Food Image" crossorigin="anonymous">
        <div class="food-item-info">
          <ul class="skeleton">
            <li><i>??%</i></li>
            <li class="food-item-info-text">Healthy</li>
          </ul>
          <ul class="food-item-info-mid skeleton">
            <li><i>??</i></li>
            <li class="food-item-info-text">Minutes</li> 
          </ul>
          <ul class="skeleton">
            <li><i>??</i></li>
            <li class="food-item-info-text">Portions</li>
          </ul>
        </div>
          <h5 class="skeleton">Lorem ipsum dolor sit amet.</h5>
          <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur.</p>
      </div>
    `;
  }

  return template;
};

const createSkeletonDetailTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i++) {
    template += `
      <h2 class="food-title skeleton">Lorem ipsum dolor sit amet.</h2>
      <img class="food-image lazyload" data-src="./skeleton.png" alt="Food Image" crossorigin="anonymous">
    
      <div class="food-information skeleton">
        <p class="food-source skeleton">from www.therathings.com</p>
        <p class="food-type skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <div id="saveButtonContainer" class="food-action skeleton"></div>
      </div>
    
      <div class="food-fact skeleton">
        <h4 class="skeleton"></h4>
        <table>
          <tr>
            <td class="food-fact-value skeleton">Icon</td>
            <td class="food-fact-value skeleton">Icon</td>
            <td class="food-fact-value skeleton">Icon</td>
            <td class="food-fact-value skeleton">Icon</td>
          </tr>
          <tr>
            <td class="food-fact-title"><i class="skeleton"></i>??% Healthy Food</td>
            <td class="food-fact-title"><i class="skeleton"></i>Ready In ?? Minutes</td>
            <td class="food-fact-title"><i class="skeleton"></i>Fit for ?? Portions</td>
            <td class="food-fact-title"><i class="skeleton"></i>?? Weight Score</td>
          </tr>
        </table>
      </div>
    `;
  }
  return template;
};

const createSkeletonBookmarkTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i++) {
    template += `
      <div class="food-item">
        <img class="food-item-image lazyload" data-src="./skeleton.png" alt="Food Image" crossorigin="anonymous">
        <div class="bookmark-item-info">
          <ul class="bookmark-item-info-icon">
            <li class="skeleton">Logo</li>
            <li class="skeleton">Healthy</li>
            <li class="skeleton">??</li>
          </ul>
          <ul>
            <li class="skeleton">Logo</li>
            <li class="skeleton">Portions</li>
            <li class="skeleton">??</li>
          </ul>
        </div>
        <div class="food-item-content">
        <h5 class="skeleton">Lorem ipsum dolor sit amet.</h5>
        <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur.</p>
        </div>
      </div>
    `;
  }

  return template;
};

export {
  createFoodItemTemplate,
  createFoodDetailTemplate,
  createSimilarFoodItemTemplate,
  createVideoFoodItemTemplate,
  createBookmarkItemTemplate,
  createSaveButtonTemplate,
  createSavedButtonTemplate,
  createSkeletonItemTemplate,
  createSkeletonBookmarkTemplate,
  createSkeletonDetailTemplate,
};
