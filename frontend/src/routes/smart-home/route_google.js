const fetch = require('node-fetch');
const fs = require('fs').promises;

module.exports = {
  // the all function returns an array of all of the 'request' objects of a route.
  // In this route, we're only returning one.
  // if all() is ommited, an array of [{slug: 'route-name'}] will be set.
  all: async () => [{ slug: 'smart-home' }],
  // the permalink function takes a 'request' object and returns a relative permalink.
  // In this case "/simple/"
  // If permalink() is ommited, ({request}) => `/${request.slug}/` will be placed as the default.
  permalink: ({ request }) => `/${request.slug}/`,
  data: async ({ request }) => {
    // The data function populates an object that will be in available in our Svelte template under the 'data' key.
    const id = process.env.GOOGLE_ID;
    const url = 'https://spreadsheets.google.com/feeds/list/' + id + '/1/public/values?alt=json';
    const deviceList = await fetch(url).then(res => res.json());
    let rows = [];
    for (let i = 0; i < deviceList.feed.entry.length; i++) {
      let entry = deviceList.feed.entry[i];
      let keys = Object.keys(entry);
      let newRow = {};
      for (let j = 0; j < keys.length; j++) {
        let gsxCheck = keys[j].indexOf('gsx$');
        if (gsxCheck > -1) {
          let key = keys[j];
          let name = key.substring(4);
          let content = entry[key];
          let value = content.$t;
          if (!isNaN(value)) {
              value = Number(value);
          }
          newRow[name] = value;
        }
      }
      rows.push(newRow);
    }
    return {
      devices: rows
    };
  },
  template: 'SmartHome.svelte'
};
