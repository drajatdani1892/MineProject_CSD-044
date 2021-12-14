import FavoriteEventIdb from '../data/favoriteevent-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, event }) {
    this._likeButtonContainer = likeButtonContainer;
    this._event = event;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._event;

    if (await this._isEventExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isEventExist(id) {
    const event = await FavoriteEventIdb.getEvent(id);
    return !!event;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteEventIdb.putEvent(this._event);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteEventIdb.deleteEvent(this._event.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
