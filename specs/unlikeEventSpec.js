/* eslint-disable no-undef */
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteEventIdb from '../src/scripts/data/favoriteevent-idb';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="bookmarkButtonContainer"></div>';
};

describe('Unliking A Event', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteEventIdb.putEvent({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteEventIdb.deleteEvent(1);
  });

  it('should display unlike widget when the event has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#bookmarkButtonContainer'),
      event: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unlike this event"]'))
      .toBeTruthy();
  });

  it('should not display like widget when the event has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#bookmarkButtonContainer'),
      event: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this event"]'))
      .toBeFalsy();
  });

  it('should be able to remove liked event from the list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#bookmarkButtonContainer'),
      event: {
        id: 1,
      },
    });

    document.querySelector('[aria-label="unlike this event"]').dispatchEvent(new Event('click'));

    expect(await FavoriteEventIdb.getAllEvents()).toEqual([]);
  });

  it('should not throw error if the unliked event is not in the list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#bookmarkButtonContainer'),
      event: {
        id: 1,
      },
    });

    // hapus dulu film dari daftar film yang disukai
    await FavoriteEventIdb.deleteEvent(1);

    // kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="unlike this event"]').dispatchEvent(new Event('click'));

    expect(await FavoriteEventIdb.getAllEvents()).toEqual([]);
  });
});
