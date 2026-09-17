export function formatAvailability(capacity, attendees) {
  const remainingSeats = Math.max(capacity - attendees, 0)

  if (remainingSeats === 0) {
    return '満席'
  }

  if (remainingSeats <= 3) {
    return `残りわずか ${remainingSeats} 席`
  }

  return `残り ${remainingSeats} 席`
}
