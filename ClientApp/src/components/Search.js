import React, { Component } from 'react';
import '../styles/Search.css'

export class Search extends Component {

  render() {
    return (
      <div class="search-tab">
        <div class="search-textarea">
            <input class="form-control search-input" type="text" placeholder="Найти рецепт" aria-label="default input example"/>
        </div>
        <button class="search-button">
            <img class="img-responsive" src='images/search-setting-button.svg'/>
        </button>
      </div>
    );
  }
}