# Create a Component Driven by Inputs

## Challenge Description
In this challenge, we display multiple instances of our `MovieItemComponent`.

## Requirements
- Inject `MoviesService` into the `AppComponent`
- Retrieve a Signal of all movies from that service.
- Use the @for block to repeat `MovieItemComponent` as many times as needed

  ## Finished Steps
- Injected the MovieService into the AppComponent.
- Created a new movies field of type signal to store data from the service.
- Passed the movie catalog to the ItemComponent via the @Input() property.
- Iterated and processed the received movie data efficiently.
- Displayed the list of movies.

## Example of Finished Application

![Finished app in this challenge](https://images.certificates.dev/chapter12-screenshot.png)

