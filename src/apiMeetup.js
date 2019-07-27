export const getMeetupEvents = () => {
  return fetch(`https://api.meetup.com/Montpellier-PHP-Meetup/events?status=past`)
}
