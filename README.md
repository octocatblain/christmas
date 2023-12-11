# New Years Countdown🎉

### Jingle Bells, Code Spells : ALX Holiday Challenge Project

![ALX_Holiday_Challenge_banner](/assets/images/ALX_Holiday_Challenge_banner.png)

## Challenge Description

Create the most imaginative and festive holiday wish using your software engineering skills! Whether it's a mock website, a cool automation script, or any other tech marvel, we want to see your creativity shine through your code.

## Tech Used👨‍💻

- HTML
- CSS
- JavaScript

## Features🕛

- JS Timer

## Description

This project features a JavaScript countdown timer set to expire on January 1st, 2024, at midnight (00:00:00). The code utilizes JavaScript to calculate and display the remaining time in days, hours, minutes, and seconds.

### Code Explanation📓

- The countdown date is set to **January 1st, 2024, 00:00:00** using the following constant:

```
const countdownDate = new Date("2024-01-01T00:00:00").getTime();
```

- The `updateCountdown` built-in Javascript function calculates the time remaining in days, hours, minutes, and seconds by comparing the current time with the countdown date. The results are then displayed in an HTML element with the id _`timer`_:

```
function updateCountdown() {
  // ... (code for calculating days, hours, minutes, and seconds)

  document.getElementById(
  "timer"
  ).innerHTML = `${days}D: ${hours}H: ${minutes}M: ${seconds}S`;
  }
```

- Finally, the `setInterval` function is calls the `updateCountdown` function every second, ensuring that the countdown is dynamically updated:

```
  setInterval(updateCountdown, 1000);
```

## Contribution📚

1. Fork the Repository:

Fork the repository to your own GitHub account by clicking the "Fork" button at the top of this page.
Clone the Repository:

Clone the forked repository to your local machine using the following command:
`git clone https://github.com/octocatblain/new-years-countdown.git`

2. Create a New Branch:

Create a new branch for your contribution using a descriptive branch name.
css: `git checkout -b <your-feature-branch>`

3. Make Changes:

Implement your changes or add new features.

3. Test Changes:

Ensure that your changes work as intended and do not introduce any errors. 4. Commit Changes:

Commit your changes with a clear and concise commit message. `git commit -m "Your descriptive commit message here"`

5. Push Changes:

Push your changes to your forked repository on GitHub.
`git push origin your-feature-branch`

6. Create a Pull Request (PR):

- Go to the original repository on GitHub.

- Click on the **"New Pull Request"** button.
  Provide a meaningful title and description for your pull request.
- Submit the pull request.

7. Celebrate Your Contribution😇

_Once your pull request is accepted and merged, your contribution will be part of something big😆._

🍀Thank you for your valuable contribution!

## Author🖊️

- [Blain Muema](https://github.com/octocatblain)
