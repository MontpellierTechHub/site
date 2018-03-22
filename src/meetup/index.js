const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const meetupApiKey = process.env.MEETUP_API_KEY;

if (meetupApiKey === undefined) {
  throw new Error('Must provide MEETUP_API_KEY env variable');
}

const findUpcomingEvents = async () => {
  const groupIds = [
    '19967941', // Big-Data-Science-Montpellier
    '23234614', // Functional-Programming-Montpellier
    '18458103', // HumanTalks-Montpellier
    '19224279', // JUG-Montpellier
    '26413943', // Meetup-Python-Montpellier
    '15351542', // MontpellierJS
    '19216572', // Montpellier-Android-User-Group
    '17056242', // Montpellier-CPP
    '18724486', // Montpellier-PHP-Meetup
  ];

  const url = `https://api.meetup.com/2/events?group_id=${groupIds.join()}&status=upcoming&page=100&key=${meetupApiKey}`;
  const response = await fetch(url);

  if (429 === response.status) {
    throw new Error(`Rate limit exceeded:
    x-meetup-request-id': ${response.headers.get('x-meetup-request-id')}
    x-ratelimit-limit': ${response.headers.get('x-ratelimit-limit')}
    x-ratelimit-remaining': ${response.headers.get('x-ratelimit-remaining')}
    x-ratelimit-reset': ${response.headers.get('x-ratelimit-reset')}`);
  }

  if (200 !== response.status) {
    const body = await response.text();
    throw new Error(`Request failed: ${response.status} ${response.statusText}
    x-meetup-request-id': ${response.headers.get('x-meetup-request-id')}
    ${body}`);
  }

  const json = await response.json();

  return json.results
    .filter(item => {
      return 'public_limited' !== item.visibility;
    });
};

findUpcomingEvents().then(events => {
  fs.writeFile(
    path.join(__dirname, '../assets/events.json'),
    JSON.stringify(events),
    (err) => {
      if (err) throw err;
      console.log('Done.');
    }
  );
});
