/* eslint-disable no-undef */
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteEventIdb from '../src/scripts/data/favoriteevent-idb';

describe('Liking A Event', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="bookmarkButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the event has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#bookmarkButtonContainer'),
      event: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this event"]')).toBeTruthy();
  });

  it('should not show the unbookmark button when the event has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#bookmarkButtonContainer'),
      event: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unlike this event"]')).toBeFalsy();
  });

  it('should be able to like the event', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#bookmarkButtonContainer'),
      event: {
        id: 1,
      },
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const event = await FavoriteEventIdb.getEvent(1);

    expect(event).toEqual({ id: 1 });

    FavoriteEventIdb.deleteEvent(1);
  });

  it('should not add a event again when its already liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#bookmarkButtonContainer'),
      event: {
        id: 1,
      },
    });

    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteEventIdb.putEvent({ id: 1 });
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    // tidak ada film yang ganda
    expect(await FavoriteEventIdb.getAllEvents()).toEqual([{ id: 1 }]);

    FavoriteEventIdb.deleteEvent(1);
  });

  // menggunakan metode xit, bukan it
  xit('should not add a event when it has no id', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#bookmarkButtonContainer'),
      event: {},
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteEventIdb.getAllEvents()).toEqual([]);
  });
});
