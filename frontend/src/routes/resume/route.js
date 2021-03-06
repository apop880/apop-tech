const { data } = require('autoprefixer');
const fetch = require('node-fetch');

module.exports = {
  // the all function returns an array of all of the 'request' objects of a route.
  // In this route, we're only returning one.
  // if all() is ommited, an array of [{slug: 'route-name'}] will be set.
  all: async () => [{ slug: 'resume', hero: true }],
  // the permalink function takes a 'request' object and returns a relative permalink.
  // In this case "/simple/"
  // If permalink() is ommited, ({request}) => `/${request.slug}/` will be placed as the default.
  permalink: ({ request }) => `/${request.slug}/`,
  data: async ({ helpers, data }) => {
    // The data function populates an object that will be in available in our Svelte template under the 'data' key.
    const url = 'http://localhost:1337/graphql';

    const resume = await fetch(url, {
      method: 'POST',
      headers: {'Authorization': data.strapiGQLToken, 'Content-Type': 'application/json', 'accept': 'application/json'},
      body: JSON.stringify({
        query: `{
          resume {
            Employer {
              Name
              Dates
              Location
              Roles {
                Name
                Dates
                Description
              }
            }
            Education {
              Degree
              School
              Location
              Year
              Description
            }
            Skills {
              Category
              Skills
            }
            Recognition {
              Award
              Date
            }
          }
        }`
      })
    }).then(res => res.json())
    .then(json => json.data.resume);

    for(const employer of resume.Employer) {
      for(const role of employer.Roles) {
        role.Description = await helpers.markdownParser.process(role.Description);
      }
    }

    for(const education of resume.Education) {
      education.Description = await helpers.markdownParser.process(education.Description);
    }
    
    return {
      resume: resume
    };

  }
};
