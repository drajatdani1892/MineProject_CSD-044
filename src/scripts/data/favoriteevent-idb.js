import {
  openDB,
} from 'idb';
import CONFIG from '../globals/config';

const {
  DATABASE_NAME,
  DATABASE_VERSION,
  OBJECT_STORE_NAME,
} = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id',
    });
  },
});

const FavoriteEventIdb = {
  async getEvent(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllEvents() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putEvent(event) {
    if (!event.hasOwnProperty('id')) {
      return;
    }

    return (await dbPromise).put(OBJECT_STORE_NAME, event);
  },
  async deleteEvent(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteEventIdb;
