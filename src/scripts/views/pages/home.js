/* eslint-disable array-callback-return */
/* eslint-disable no-console */
import TheEventDbSource from '../../data/theeventdb-source';
import { createEventItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
<div class="container">
   <div class="cari d-flex flex-column flex-md-row justify-content-md-between justify-content-center">
      <div class="title">
         <h2 id="textHome" tabindex="0">Home</h2>
      </div>
      <div class="search-section d-flex flex-column flex-md-row align-items-md-end">
         <div class="category-section mr-md-3 mb-3 mb-md-0">
            <label for="validationCustom04" tabindex="0">Category</label>
            <select class="custom-select" id="categorySelect" tabindex="0" required>
               <option selected disabled value="">Select</option>
               <option value="eventName">All</option>
               <option value="artist">Artist</option>
               <option value="genre">Genre</option>
               <option value="venue">Venue</option>
               <option value="eventName">Event Name</option>
            </select>
         </div>
         <div class="search-box mr-md-3 mb-3 mb-md-0">
            <label for="validationCustom05" tabindex="0">Search</label>
            <input type="text" class="form-control" id="searchContent" placeholder="Masukan Kata Kunci" required>
            <div class="invalid-feedback">
               Please provide a valid zip.
            </div>
         </div>
         <button type="button" class="btn btn-primary col-12 col-md-3 btn-search mx-sm-auto">Search</button>
      </div>
   </div>
   <div class="card-list"></div>
</div>
    `;
  },

  async afterRender() {
    document.title = 'Mine APP | Home';
    // search logic
    this._getValue('eventName', '');
    const searchButton = document.querySelector('.btn-search');
    searchButton.addEventListener('click', () => {
      const eventContainer = document.querySelector('.card-list');
      const select = document.getElementById('categorySelect');
      const { value } = select.options[select.selectedIndex];
      const searchInput = document.querySelector('#searchContent').value;
      eventContainer.innerHTML = '';
      const result = this._getValue(value, searchInput);
      console.log(result);
    });
  },
  async _getValue(category, input) {
    const eventContainer = document.querySelector('.card-list');
    const event = await TheEventDbSource.search(category, input);
    if (event.events.length > 0) {
      event.events.forEach((events) => {
        eventContainer.innerHTML += createEventItemTemplate(events);
      });
    } else {
      this._renderEmpty();
    }
  },
  _renderEmpty() {
    const mainContent = document.querySelector('.card-list');
    mainContent.innerHTML += `
      <div class="alert alert-danger" role="alert">
         Data yang anda cari tidak ada!
      </div>
    `;
  },
};

export default Home;
