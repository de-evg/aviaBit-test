export const adaptServerToClient = (flight) => ({
  ...flight,
  dateFlight: new Date(flight.dateFlight),
});
