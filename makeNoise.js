const repositoryRootPath = path.resolve(__dirname, '..');
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
const resultingPromises = urls.map((url) => makHttpRequest(url));