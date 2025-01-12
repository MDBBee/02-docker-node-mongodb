const keyValueDb = process.env.KEY_VALUE_DB;
const keyValueUser = process.env.KEY_VALUE_USER;
const keyValuePassword = process.env.KEY_VALUE_PASSWORD;

console.log('🔥🔥🔥🔥999Initializing: mongoinit');
console.log('✅✅✅✅✅✅✅', keyValueDb);

db = db.getSiblingDB(keyValueDb);

db.createUser({
  user: keyValueUser,
  pwd: keyValuePassword,
  roles: [
    {
      role: 'readWrite',
      db: keyValueDb,
    },
  ],
});
