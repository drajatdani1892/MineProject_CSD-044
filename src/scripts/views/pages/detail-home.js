import UrlParser from '../../routes/url-parser';
import TheEventDbSource from '../../data/theeventdb-source';
import { createEventDetailTemplate } from '../templates/template-creator';

const DetailHome = {
  async render() {
    return `
    <div class="container">
            <div class="search-and-title">
                <div class="title-page">
                    <h2 id="textDetailEvent" tabindex="0">Detail</h2>
                </div>
            </div>
            <div class="detail-event-container"></div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { event } = await TheEventDbSource.detailHome(url.id);
    console.log(event);
    const eventContainer = document.querySelector('.detail-event-container');
    eventContainer.innerHTML = createEventDetailTemplate(event);
  },
};

export default DetailHome;
