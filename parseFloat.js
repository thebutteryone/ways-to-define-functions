const channelName = getChannelName(channel);
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const arrayContains = (arr, element) => arr.includes(element);
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");