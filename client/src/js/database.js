import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// export const putDb = async (content) => console.error('putDb not implemented');

export const putDb = async (content) => {
  console.log('PUT in the database.')
  const jateDb = await openDB('jate', 1);
  console.log(1);
  const tx = jateDb.transaction('jate', 'readwrite');
  console.log(err);
  const store = tx.objectStore('jate');
  console.log(3);
  const request = store.put({ id: 1, value: content });
  console.log(4);
  const result = await request;
  console.log('putDb', result);
  // return result;
};

// TODO: Add logic for a method that gets all the content from the database
// export const getDb = async () => console.error('getDb not implemented');

export const getAllDb = async () => {
  console.log('GET from the database');
  const jateDb = await openDB('jate', 1);
  console.log(5);
  const tx = jateDb.transaction('jate', 'readonly');
  console.log(6);
  const store = tx.objectStore('jate');
  console.log(7);
  const request = store.get(1);
  console.log(8);
  const result = await request;
  console.log('getDb', result);
  return result?.value;
};

initdb();
