import getDb from './config/db';

const storageName = { STORAGE_NAME: 'notes' };
export default {
    async deleteNote(note) {
        const db = await getDb(storageName);
        return new Promise(resolve => {
            const trans = db.transaction([db.config.STORAGE_NAME], 'readwrite');
            trans.oncomplete = () => {
                resolve();
            };
            const store = trans.objectStore(db.config.STORAGE_NAME);
            store.delete(note.id);
        });
    },
    async getNotes() {
        let db = await getDb(storageName);
        return new Promise(resolve => {
            let trans = db.transaction([db.config.STORAGE_NAME], 'readonly');
            trans.oncomplete = () => {
                resolve(notes);
            };
            const store = trans.objectStore(db.config.STORAGE_NAME);
            const notes = [];
            store.openCursor().onsuccess = e => {
                const cursor = e.target.result;

                if (cursor) {
                    notes.push(cursor.value);
                    cursor.continue();
                }
            };
        });
    },
    async saveNote(note) {
        let db = await getDb(storageName);
        return new Promise(resolve => {
            let trans = db.transaction([db.config.STORAGE_NAME], 'readwrite');

            trans.oncomplete = () => resolve();

            let store = trans.objectStore(db.config.STORAGE_NAME);

            store.put(note);
        });
    },
};
