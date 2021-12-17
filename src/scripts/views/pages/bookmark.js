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
    console.log(homepages);
    const eventContainer = document.querySelector('.card-list');
    homepages.forEach((events) => {
      eventContainer.innerHTML += createEventItemTemplate(events);
    });
  },
};

export default Bookmark;
