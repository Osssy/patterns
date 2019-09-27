import './final.scss';
import { dropdowns } from './scripts/dropdowns.js';
import { readMore } from './scripts/readMore.js';
import { modalShelf } from './scripts/modalShelf.js';

//dropdowns();
const dropdownCommunity = document.querySelector(".dropdown__link-community");
const communityList = document.querySelector(".community__list");

const dropdownBrowse = document.querySelector(".dropdown__link-browse");
const browseList = document.querySelector(".browse__list");

readMore();

modalShelf();

dropdown("dropdownCommunity");
dropdown('dropdownBrowse');