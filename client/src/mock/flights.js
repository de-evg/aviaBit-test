const FLIGHT_COUNT = 500;

const FlightDate = {
  START: 2010,
  END: 2022
};

const FlightNumber = {
  START: 1000,
  END: 5000
};

const PlaneType = [
  'B-757-200',
  'B-757-300',
  'B-767-200',
  'B-767-300',
  'A-380',
  'A-350'
];

const PlaneNumber = {
  START: 100,
  END: 999
};

const TimeFlight = {
  START: 14400,
  END: 36000
};

const Time = {
  PREFLIGHT: 3600,
  POSTFLIGHT: 3600,
  MOVE_ON_GROUND: 1800
};

const generateRandomDate = (start, end) => {
  return new Date(start + Math.random() * (end - start), generateRandomNumber(0, 11) , generateRandomNumber(1, 30));
};

const generateRandomNumber = (start, end) => {
  return Math.floor(start + Math.random() * (end - start));
};

const isNightFlying = () => Math.random() > 0.5;

const generateTimes = () => {
  const work = generateRandomNumber(TimeFlight.START, TimeFlight.END);
  const block = work - Time.PREFLIGHT - Time.POSTFLIGHT;
  const flight = block - Time.MOVE_ON_GROUND;

  let night = 0;
  let biologicalNight = 0;
  if (isNightFlying()) {
    night = flight - generateRandomNumber(0, flight);
    biologicalNight = night;
  }

  return {work, block, flight, night, biologicalNight}
};

const generateFlight = () => {
  const time = generateTimes();
  return {
    'dateFlight': generateRandomDate(FlightDate.START, FlightDate.END),
    'flight': generateRandomNumber(FlightNumber.START, FlightNumber.END),
    'plnType': PlaneType[generateRandomNumber(0, PlaneType.length)],
    'pln': `${generateRandomNumber(PlaneNumber.START, PlaneNumber.END)}AK`,
    'timeFlight': time.flight,
    'timeBlock': time.block,
    'timeNight': time.night,
    'timeBiologicalNight': time.biologicalNight,
    'timeWork': time.work,
    'type': Math.random() > 0.5,
    'takeoff': {
      'name': 'Томск(Богашево)',
      'lat': 56.38333333,
      'long': 85.2
    },
    'landing': {
      'name': 'Нячанг(Камрань Интл)',
      'lat': 11.99805555,
      'long': 109.21944444
    }
  };
};

export const generateFlights = () => {
  const flights = [];
  for (let index = 0; index < FLIGHT_COUNT; index++) {
    flights.push(generateFlight());
  }
  return flights;
;}
