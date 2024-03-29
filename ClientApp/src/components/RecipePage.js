import React, { Component } from 'react';
import '../styles/RecipePage.css'

export class RecipePage extends Component {

  render() {
    return (
      <div class="container recipe-page">
        <div class="row header">
          <div class="header-info col-md-10">
            <div class="title">
              Жареный рис по-японски
            </div>
            <div class="row-data">
              <div class="author-data">
                <div class="data-icon">
                  <img class="img-responsive" src="images/author-small.svg"/>
                </div>
                <div class="data-text">
                  <div class="data-subtitle">
                    Джон Смит
                  </div>
                  <div class="data-info">
                    15 марта 2022
                  </div>
                </div>
              </div>
              <div class="prep-time-info">
              <div class="data-icon">
                  <img class="img-responsive" src="images/timer.svg"/>
                </div>
                <div class="data-text">
                <div class="data-subtitle">
                  Время подготовки
                </div>
                <div class="data-info">
                  15 минут
                </div>
                </div>
              </div>
              <div class="cook-time-info">
                <div class="data-icon">
                  <img class="img-responsive" src="images/timer.svg"/>
                </div>
                <div class="data-text">
                <div class="data-subtitle">
                  Время приготовления
                </div>
                <div class="data-info">
                  15 минут
                </div>
                </div>
              </div>
              <div class="tags">
                <div class="data-icon">
                  <img class="img-responsive" src="images/fork-knife.svg"/>
                </div>
                <div class="data-text">
                <div class="data-info">
                  <ul class="tags-list">
                    <li class="tag badge bg-success">Курица</li>
                    <li class="tag badge bg-success">Рис</li>
                    <li class="tag badge bg-success">Яйцо</li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div class="header-buttons col-md-2">
            <button class="like-button">
              <img class="img-responsive like-button-img" src="images/like.svg"/>
            </button>
            <button class="follow-button">
              <img class="img-responsive follow-button-img" src="images/add-friend.png"/>
            </button>
          </div>
        </div>
        <div class="row main-description">
          <div class="main-description-img col-md-9">
            <img class="main-img" src="images/rice-main.png"/>
          </div>
          <div class="main-description-ingredients col-md-3">
            <div class="ingredients-title">Ингредиенты</div>
            <div class="ingredients-list">
              <div class="ingredient-row">
                <div class="ingredient-text">
                  Рис
                </div>
                <div class="ingredient-count">
                  200г
                </div>
              </div>
              <div class="ingredient-row">
                <div class="ingredient-text">
                  Яйца
                </div>
                <div class="ingredient-count">
                  2шт
                </div>
              </div>
              <div class="ingredient-row">
                <div class="ingredient-text">
                  Курица
                </div>
                <div class="ingredient-count">
                  300г
                </div>
              </div>
              <div class="ingredient-row">
                <div class="ingredient-text">
                  Соль
                </div>
                <div class="ingredient-count">
                  20г
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="recipe-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div class="row">
          <div class="recipe-instruction col-8">
            <div class="recipe-instruction-title">Рецепт</div>
            <div class="recipe-instruction-steps">
              <div class="recipe-instruction-step">
                  <div class="step-description">
                    <div class="step-text">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </div>
                    <img class="img-responsive step-img" src="images/recipe-step-img.png"/>
                  </div>
              </div>
              <div class="recipe-instruction-step">
                  <div class="step-description">
                    <div class="step-text">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </div>
                    
                  </div>
              </div>
              <div class="recipe-instruction-step">
                  <div class="step-description">
                    <div class="step-text">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </div>
                    
                  </div>
              </div>
            </div>
          </div>
          <div class="other-recipe col-4">
            <div class="other-recipe-title">Другие рецепты</div>
            <div class="short-recipe-info row">
              <div class="col-5">
                <img class="img-responsive short-recipe-img" src="images/recipe-img2.png"/>
              </div>
              <div class="col-7 short-recipe-text">
                <div class="short-recipe-title">Chicken Meatball with Creamy Chees...</div>
                <div class="short-recipe-author">Джон Смит</div>
              </div>
            </div>
            <div class="short-recipe-info row">
              <div class="col-5">
                <img class="img-responsive short-recipe-img" src="images/recipe-img3.png"/>
              </div>
              <div class="col-7 short-recipe-text">
                <div class="short-recipe-title">The Creamiest Creamy Chicken an...</div>
                <div class="short-recipe-author">Джон Смит</div>
              </div>
            </div>
            <div class="short-recipe-info row">
              <div class="col-5">
                <img class="img-responsive short-recipe-img" src="images/pancakes-main.png"/>
              </div>
              <div class="col-7 short-recipe-text">
                <div class="short-recipe-title">The Best Easy One Pot Chicken and Rice</div>
                <div class="short-recipe-author">Джон Смит</div>
              </div>
            </div>
          </div>
        </div>
        <div class="test"></div>
      </div>
    );
  }
}
