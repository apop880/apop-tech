const fetch = require('node-fetch');

module.exports = {
  // the all function returns an array of all of the 'request' objects of a route.
  // In this route, we're only returning one.
  // if all() is ommited, an array of [{slug: 'route-name'}] will be set.
  all: async () => [{ slug: 'projects', hero: true }],
  // the permalink function takes a 'request' object and returns a relative permalink.
  // In this case "/simple/"
  // If permalink() is ommited, ({request}) => `/${request.slug}/` will be placed as the default.
  permalink: ({ request }) => `/${request.slug}/`,
  data: async ({ request, helpers }) => {
    // The data function populates an object that will be in available in our Svelte template under the 'data' key.
    const token = process.env.STRAPI_TOKEN;
    const url = 'http://localhost:1337/projects';
    const projects = await fetch(url, {headers: {'Authorization': token, 'accept': 'application/json'}})
    .then(res => res.json())
    .then(json => json.Project);

    for(const project of projects) {
      project.Description = await helpers.markdownParser.process(project.Description);
    }
    
    return {
      projects: projects
    };

  }
};
