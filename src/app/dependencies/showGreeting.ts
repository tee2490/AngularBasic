export function showGreetingMessage() {
  const currentHour = new Date().getHours();
  let greetingMsg = '';

  if (currentHour >= 0 && currentHour < 12) {
    greetingMsg = 'Good Morning';
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingMsg = 'Good afternoon';
  } else {
    greetingMsg = 'Good evening';
  }
  return greetingMsg;
}
