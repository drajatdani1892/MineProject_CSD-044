import favoriteEventidb from '../../data/favoriteevent-idb';
import { createEventItemTemplate } from '../templates/template-creator';

const Bookmark = {
  async render() {
    return `
    <div class "container">
      <div class="search-and-title">
                  <div class="title-page">
                      <h2 id="textBlog" tabindex="0">Bookmark</h2>
                  </div>
              </div>
      <div class="card-list"></div>
    </div>
    `;
  },

  async afterRender() {
    document.title = 'Mine APP | Bookmark';
    const homepages = await favoriteEventidb.getAllEvents();
    const eventContainer = document.querySelector('.card-list');
    if (homepages.length > 0) {
      homepages.forEach((events) => {
        eventContainer.innerHTML += createEventItemTemplate(events);
      });
    } else {
      this._renderEmpty();
    }
  },

  _renderEmpty() {
    const mainContent = document.querySelector('#mainContent');
    mainContent.innerHTML += `
      <p tabindex="0" class="alert d-flex justify-content-center align-items-center" style="font-weight: bold;border-bottom-color:#2E4C6D;">Data Kosong</p>
    `;
  },
};

export default Bookmark;
