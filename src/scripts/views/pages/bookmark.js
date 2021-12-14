import favoriteEventidb from '../../data/favoriteevent-idb';
import { createEventItemTemplate } from '../templates/template-creator';

const Bookmark = {
  async render() {
    return `
  <div class "container">
       <div class="search-and-title">
                <div class="title-page">
                    <h2 id="textHome" tabindex="0">Home</h2>
                </div>
                <div class="form-row pr-5 search-category-group">
                    <div class="col-md-5 mb-3 search-box">
                        <label for="validationCustom04" tabindex="0">Category</label>
                        <select class="custom-select" id="validationCustom04" tabindex="0" required>
                            <option selected disabled value="">Select</option>
                            <option>All</option>
                            <option>Edm</option>
                            <option>Pop</option>
                            <option>Jazz</option>
                        </select>
                    </div>
                    <div class="col-md-6 mb-3 category-box">
                        <label for="validationCustom05" tabindex="0">Search</label>
                        <input type="text" class="form-control " id="validationCustom05" required>
                        <div class="invalid-feedback">
                            Please provide a valid zip.
                        </div>
                </div>
            </div>
        </div>
        <div class="card-list"></div>
        </div>
    `;
  },

  async afterRender() {
    const homepages = await favoriteEventidb.getAllEvents();
    console.log(homepages);
    const eventContainer = document.querySelector('.card-list');
    homepages.forEach((events) => {
      eventContainer.innerHTML += createEventItemTemplate(events);
    });
  },
};

export default Bookmark;
