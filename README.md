# Humans of Sourcegraph

Humans of Sourcegraph is currently being built as an internal tool with a similar purpose that our handbook team page currently has, but provides more ways in which you can visualize all of us who work here (Humans of Sourcegraph) as well as easily see what team each of us is apart of, who we work with, how our organizations break down, who we've recently added to the team, and get to know more about each other.

## Growth of Humans of Sourcegraph

As this project grows, we expect to be able to...

- Bios will likely be collected during onboarding using Bamboo. From there, the bios will be accessed via the API and display in Humans of Sourcegraph with the possility of editing right from the page.
- Add additional custom fields to bamboo to be collected typically during onboarding. Example: A custom `#hashtags` field where individuals can list their interests the wish to share with the company.
- Add an 'Explore' section, where you can search for employees by `location`, `#hashtags` (#cooking, #hiking) and more... (possibly add an #EngineeringMentor hashtag to help facilitate exisiting company efforts like pairing mentees and mentors)
- Internal built in blog? [Beam](https://planetscale.com/blog/introducing-beam)
- Explore how to integrate HoSG into our handbook and allow for a public version

## To do

- Make the site more 'profile like'
- Add to the Sourcegraph repository
- Add Sourcegraph designs and components

## Development

If you are a Sourcegraph employee who wishes to contribute to this project, log into [Bamboo](https://sourcegraph.bamboohr.com/home), select your icon in the top right and select choose API keys from the dropdown. From there you'll be able to Add New Key for yourself.

Once you have your API key, fork and clone the repository and add a file titled .env.local using the template found in .env.sample.

Look for a note in 1Password titiled "TITLE" in order to retrieve the secret values.
