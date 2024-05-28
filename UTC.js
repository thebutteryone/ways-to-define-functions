const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const randomString = () => Math.random().toString(36).slice(2);
const fullName = name || 'buddy';