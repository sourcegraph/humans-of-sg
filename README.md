# Humans of Sourcegraph

Humans of Sourcegraph is currently being built as an internal tool with a similar purpose that our handbook team page currently has, but provides more ways in which you can visualize all of us who work here (Humans of Sourcegraph) as well as easily see what team each of us is apart of, who we work with, how our organizations break down, who we've recently added to the team, and get to know more about each other.

## Growth of Humans of Sourcegraph

As this project grows, we expect to be able to:

- Bios will likely be collected during onboarding using Bamboo, from there the bios will be imported into Humans of Sourcegraph, and you will be able to view and edit your bio from this page.
- Explore how to integrate HoSG into our handbook and allow for a public version
- Add custom fields to bamboo/onboarding like the ability for individuals to add #hashtags and more that can display in their profile on Humans of Sourcegraph
- Add an 'Explore' section, where you can search for employees by location, #hashtags (interests), and more.

## Visions

- Make the site more 'profile like'
- Add to the Sourcegraph repository
- Add Sourcegraph components

## Development

If you are a Sourcegraph employee who wishes to contribute to this project, log into [Bamboo](https://sourcegraph.bamboohr.com/home), select your icon in the top right and choose API keys from the dropdown. From there you'll be able to Add New Key.

Once you have your API key, fork and clone the repository and add a file titled .env.local with the following variables:

API_KEY=

OKTA_CLIENTID=

OKTA_CLIENTSECRET=

OKTA_DOMAIN=

NEXTAUTH_URL=http://localhost:3000
