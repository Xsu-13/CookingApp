import React, { Component } from 'react';
import { Search } from "./Search";
import '../styles/Home.css'

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <div class="header">
          <div class="greetings">
            <div class="greetings-title">Здравствуйте, Ксения</div>
            <div class="greetings-subtitle">Что будем готовить сегодня?</div>
          </div>
          <Search/>
        </div>
      </div>
    );
  }
}
