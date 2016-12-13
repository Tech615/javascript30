/**
 * REQUIREMENTS
 *  Set rotation point to clock face center (defautls to hand center)
 *  Set orientation to 12 o'clock position (defaults to 9 o'clock)
 *  Transitions time frame should be 0.05s
 *  Have fun with the cubic-bezier() function
 *  Once pre second update the display for the clock
 *  Each update should position all 3 hands relative to the current time
 *
 * EXTRA CREDIT
 *  Shorten the hour hand so it is visually distinct from the minute hand
 *  Prevent or reduce display bug transitioning to "zero" values
 *  Update the position of the hour hand more often than once per hour
 */

// Collect our baby hands… I mean clock hands
// https://www.youtube.com/watch?v=71iZieJWmmk
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
// Update the clock display based on current Date()
function tick() {
  const now = new Date();
  secondHand.style.transform = `rotate(${secDeg(now)}deg)`;
  minHand.style.transform = `rotate(${minDeg(now)}deg)`;
  hourHand.style.transform = `rotate(${hourDeg(now)}deg)`;
}

/**
 * @param value An int, such as the current count of seconds
 * @param base  An intA numberAn int, such as 60 seconds in a trip around a
 *  clock face
 * @return An int as a degree value for positioning our clock hands
 */
function toDeg(value, base) {
  return ((value / base) * 360) + 90;
}
/**
 * @param now A Date object
 * @return An int as a degree value for positioning our second hand
 *
 * New values once per second
 */
function secDeg(now) {
  return (toDeg(now.getSeconds(), 60) +
  ((now.getMinutes() + now.getHours()) * 360));
}
/**
 * @param now A Date object
 * @return An int as a degree value for positioning our minute hand
 *
 * New values once per minute
 */
function minDeg(now) {
  return (toDeg(now.getMinutes(), 60) + (now.getHours() * 360));
}
/**
 * @param now A Date object
 * @return An int as a degree value for positioning our hour hand
 *
 * New values once per every 5 minutes
 */
function hourDeg(now) {
  return (toDeg(now.getHours() + Math.floor(now.getMinutes() / 5), 60));
}

// Call tick() once per second
setInterval(tick, 1000);
// Start things off with our first clock tick
tick();

/* CSS changes look like:
.hand {
  width:50%;
  height:6px;
  background:black;
  position: absolute;
  top:50%;
  transform-origin: 100%;
  transform: rotate(90deg);
  transition: all 0.05s;
  transition-timing-function: cubic-bezier(0,1.73,.21,1.24);
}

.hour-hand {
  width: 30%;
  left: 20%;
}
 */
