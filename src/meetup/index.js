const fetch = require('node-fetch');
const t = require('tcomb');
const fs = require('fs');
const path = require('path');
const meetupApiKey = process.env.MEETUP_API_KEY;

if (meetupApiKey === undefined) {
    throw new Error('Must provide MEETUP_API_KEY env variable');
}

const Group = t.struct({
    id: t.Number,
    name: t.String,
    join_mode: t.maybe(t.String),
    group_lat: t.Number,
    group_lon: t.Number,
    urlname: t.String,
    who: t.String,
    created: t.Number,
}, 'Group');

const Venue = t.struct({
    id: t.Number,
    name: t.String,
    lat: t.Number,
    lon: t.Number,
    address1: t.maybe(t.String),
    address2: t.maybe(t.String),
    address3: t.maybe(t.String),
    city: t.String,
    country: t.String,
    localized_country_name: t.String,
}, 'Venue');

const Event = t.struct({
    id: t.String,
    created: t.Number,
    name: t.String,
    duration: t.maybe(t.Integer),
    status: t.String,
    time: t.Number,
    updated: t.Number,
    utc_offset: t.Integer,
    event_url: t.String,
    description: t.maybe(t.String),
    visibility: t.String,
    yes_rsvp_count: t.Integer,
    maybe_rsvp_count: t.Integer,
    waitlist_count: t.Integer,
    headcount: t.Integer,
    rsvp_limit: t.maybe(t.Integer),
    venue: t.maybe(Venue),
    group: Group,
}, 'Event');

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
        console.log(response.status);
        console.log(response.headers);
    }

    if (200 !== response.status) {
        throw new Error('Request failed: ' + response);
    }

    const json = await response.json();

    return json.results
        .filter(item => {
            return 'public_limited' !== item.visibility;
        })
        .map(item => {
            return new Event(item);
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
