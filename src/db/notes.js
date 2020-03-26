const config = {
    DB_NAME: 'notes_db',
    STORAGE_NAME: 'notes',
    DB_VERSION: 1,
};

let db;

export default {
    async getDb() {
        return new Promise((resolve, reject) => {
            if (db) {
                return resolve(db);
            }

            const request = window.indexedDB.open(config.DB_NAME, config.DB_VERSION);
            request.onerror = e => {
                console.error('Error opening db', e);
                reject('Error');
            };
            request.onsuccess = e => {
                db = e.target.result;
                console.warn('success');
                resolve(db);
            };
            request.onupgradeneeded = e => {
                let db = e.target.result;
                db.createObjectStore(config.STORAGE_NAME, { keyPath: 'id', autoIncrement: true });
            };
        });
    },
    async deleteNote(note) {
        const db = await this.getDb();
        return new Promise(resolve => {
            const trans = db.transaction([config.STORAGE_NAME], 'readwrite');
            trans.oncomplete = () => {
                resolve();
            };
            const store = trans.objectStore(config.STORAGE_NAME);
            store.delete(note.id);
        });
    },
    async getNotes() {
        let db = await this.getDb();
        return new Promise(resolve => {
            let trans = db.transaction([config.STORAGE_NAME], 'readonly');
            trans.oncomplete = () => {
                resolve(notes);
            };
            const store = trans.objectStore(config.STORAGE_NAME);
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
        let db = await this.getDb();
        console.log(note, 'transaction');

        return new Promise(resolve => {
            let trans = db.transaction([config.STORAGE_NAME], 'readwrite');

            trans.oncomplete = () => {
                resolve();
            };

            let store = trans.objectStore(config.STORAGE_NAME);

            store.put(note);
        });
    },
};
