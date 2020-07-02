function getDb(storageName) {
    let db;
    const config = {
        DB_NAME: 'database',
        ...storageName,
    };

    return new Promise((resolve, reject) => {
        if (db && db.config.STORAGE_NAME === storageName.STORAGE_NAME) {
            return resolve(db);
        }

        const request = window.indexedDB.open(config.DB_NAME, window.localStorage.versionDatabase);

        request.onerror = e => reject({ status: 'Error opening db', message: e });
        request.onsuccess = e => {
            db = e.target.result;
            db.__proto__.config = config;
            resolve(db);
        };
        request.onupgradeneeded = e => {
            db = e.target.result;
            db.createObjectStore(config.STORAGE_NAME, { keyPath: 'id', autoIncrement: true });
        };
    });
}

export default getDb;
