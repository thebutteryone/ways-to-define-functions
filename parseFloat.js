console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);