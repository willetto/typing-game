# Typing Game Project

Project from [Modern Angular Bootcamp on Udemy](https://www.udemy.com/course/the-modern-angular-bootcamp/).

### What I Changed/Added

- Instead of using Bulma, I used Open Props as my CSS framework. I wanted practice using a different framework, and wanted it to look unique.
- I added a `Reset` button. Right now it just refreshes the page, but I want to make it reset the state of the page with a new random string.

### What I Learned

- To get the event from the DOM in Angular, you have to pass in `$event` to the function, and define the target `const target = event.target as HTMLInputElement;` so you can access the methods.
- How to use `*ngFor` to loop over an array and generate elements without hard coding.
