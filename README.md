# Use the Router to Display Movie Details

## Challenge Description

In this challenge, I'll enhance the application by implementing navigation to display movie details. The desired features include:

- **Navigating to Movie Details:** Clicking on a "Details" button should take the user to a dedicated page showing information about the selected movie.
- **Using Lazy-Loading:** The details page should be loaded dynamically when needed, optimizing performance.

## Requirements

To achieve the above functionality, follow these steps:

1. **Modify `home.component.ts`:**
   - Set `HomeComponent` as the new landing page displaying the list of movies.

2. **Update `app.component.ts`:**
   - Ensure that the component only contains a `<router-outlet />` so the entire application is controlled via the router.

3. **Configure Routing in `app.routes.ts`:**
   - Add a default route (`""`) that directs to `HomeComponent`.
   - Add a route (`"details/:id"`) that lazy-loads `MovieDetailsComponent` to display individual movie details.

4. **Modify `MovieItemComponent`:**
   - Update the "Details" button to use `routerLink` for navigation to the corresponding movie details page.

## Other Considerations

- **Do not remove `data-test` attributes** if they appear in the boilerplate, as they may be used for automated testing.

## Finished Steps

- **Routing Implementation:**  
  The application is now fully controlled by Angular Router, using a `<router-outlet />` for dynamic navigation.

- **Lazy-Loading Optimization:**  
  The `MovieDetailsComponent` is loaded only when required, reducing the initial bundle size and improving performance.

- **Navigation to Details Page:**  
  Clicking on the "Details" button seamlessly navigates to the corresponding movie details page using `routerLink`.

- **Dynamic URL Handling:**  
  The route parameter (`:id`) ensures that the correct movie data is displayed based on the selected movie.

## Example of Finished Application

For reference, here's an example demonstrating the expected functionality upon completing this challenge:

![Finished app in this challenge](https://images.certificates.dev/chapter61-screenshot.gif)
