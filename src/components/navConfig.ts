export const navSections = [
  { id: 'photos', label: 'Our Story' },
  { id: 'save-the-date', label: 'Save the Date' },
  { id: 'location', label: 'Venue' },
  { id: 'registry', label: 'Registry' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'menu', label: 'Menu' },
  { id: 'rsvp', label: 'RSVP' },
];

const NAVBAR_HEIGHT = 88;

export function getNavOffset() {
  return NAVBAR_HEIGHT;
}