import UrlParser from '../../routes/url-parser';
import TheEventDbSource from '../../data/theeventdb-source';
import { createEventDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

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
             <div id="bookmarkButtonContainer"></div>      
      </div>
    `;
  },

  async afterRender() {
    document.title = 'Mine APP | Detail Home';

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { event } = await TheEventDbSource.detailHome(url.id);
    const eventContainer = document.querySelector('.detail-event-container');
    eventContainer.innerHTML = createEventDetailTemplate(event);

    const bookmarkButtonContainer = document.querySelector('#bookmarkButtonContainer');
    bookmarkButtonContainer.innerHTML = createLikeButtonTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#bookmarkButtonContainer'),
      event: {
        id: event.id,
        eventName: event.eventName,
        deskripsi: event.deskripsi,
        images: event.images,
      },
    });
  },
};

export default DetailHome;
