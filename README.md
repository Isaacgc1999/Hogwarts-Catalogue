# Create a Component Driven by Inputs

## Challenge Description
In this challenge, we will create a movie item component that receives `Movie` information as an input.

## Requirements
- Open `src/movie-item/movie-item.component.ts`
- Add a required input of type `Movie`
- Update the provided HTML template to render the movie:
  - Title
  - Release date (no formatting needed)
  - Budget --> Formatting: ($ {value} million - for instance: $ 50 million)
  - Duration --> Formatting: ({value} min - for instance: 152 min)
- Update `src/app.component.html` to pass the sample `movie` as an input
- Ensure your component is displayed properly on the screen

## Finished Steps
- Added an @Input() field to reference the movies.
- Developed two Custom Pipes named "MoneyPipe" and "DurationPipe" to format the budget and duration fields.
- Changed the html template in order to recieve both the data and the pipes.
## Example of The Finished Component

![Finished app in this challenge](https://images.certificates.dev/chapter11-screenshot.png)
