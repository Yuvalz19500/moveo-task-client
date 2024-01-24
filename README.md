# MoveoTaskClient

## Task
Tom is Josh’s mentor for JS, but while Covid is still out there he prefers to do remote sessions.
Tom wants to share with Josh a piece of code, observe him while he is writing and changing the code in real time.


Help Tom creating an online coding web application with the following pages and features :

Login page :
Implement basic authentication (username and password)
Lobby page (protected for mentors only) :
The page should contain the title “Choose code block” and a list of at least 4 items which represents code blocks, each item can be represented by a name (for example - “Async case”)
Clicking on an item should open a modal to choose a student (from users table) and generate a unique link (based on uuid) for you and the student which will take you both to the code block page.(this should be saved as a new session in DB).
The student link should contain the param ‘student_login’ so we can first let him login and validate he is the correct user. (if not, show error “wrong user”.

Code block page :
Mentor can access the page without authentication, student have to go through authentication to validate he is the correct user.
The mentor will see the code block he choose with a read only mode
The student will see the code block with the ability to change the code
The mentor will see the code changes in real time
Use highlightjs to highlight the syntax
Support JS code only

General guidelines:

DB entities (user and code blocks) should be created manually, no need for API or UI.
a code block should have the fields ‘title’ and ‘code’
A session should have the fields ‘uuid’ (unique), ‘user’, ‘codeblock_id’
Add clear comments to the code where needed.
This task involves client server and DB, you can use any framework/language you want.

Deploy the project and supply the url and credentials for a mentor.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
