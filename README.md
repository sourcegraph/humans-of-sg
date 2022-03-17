# Humans of Sourcegraph

Humans of Sourcegraph is currently being built as an internal tool with a similar purpose that our handbook team page currently has, but provides more ways in which we can visualize all of us who work here (Humans of Sourcegraph) as well as easily see what team each of us is apart of, who we work with, how our organization breaks down, who we've recently added to the team, and get to know more about each other.

## Growth of Humans of Sourcegraph

As this project grows, I'd love to add these additional features:

- Bios will likely be collected during onboarding using Bamboo. From there, the bios will be accessed via the API and display in Humans of Sourcegraph with the option to edit right from the page.
- Add additional custom fields to bamboo to be filled out during onboarding. Example: A custom `#hashtags` field where individuals can list their interests they wish to share with the company. These hashtag values will be read to the page via Bamboo API but will be able to be edited (or added) using Humans of Sourcegraph.
- Add an 'Explore' section, where you can search for employees by `location`, `#hashtags` (#cooking, #hiking) and more... (possibly add an #EngineeringMentor hashtag to help facilitate exisiting company efforts to pair mentees and mentors)
- Internal built in blog? [Beam](https://planetscale.com/blog/introducing-beam)
- Explore how to integrate HoSG into our handbook and allow for a public version
- Org chart
- 3D Globe to display the Humans of Sourcegraph all over the world

## To do

- Add Sourcegraph designs and components

## Development

If you are a Sourcegraph employee who wishes to contribute to this project, log into [Bamboo](https://sourcegraph.bamboohr.com/home), select your icon in the top right and select choose API keys from the dropdown. From there you'll be able to Add a New Key for yourself.

Once you have your API key, fork and clone the repository and add a file titled .env.local using the template found in .env.sample.

Be sure to install all dependencies with a quick run of `npm install` or `yarn install`

and contact @Adeola via slack for the remaining env values.
