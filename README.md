# Use a Service to Manage Favorite Movies

## Challenge Description

In this challenge, I'll enhance the application by implementing functionality to manage favorite movies. The desired features include:

- **Adding a Favorite:** Click on a "star" icon (☆) to mark a movie as a favorite.
- **Displaying Favorites:** Highlight favorite movies by displaying their "star" icon coloured (⭐).
- **Removing a Favorite:** Click the "star" icon (⭐) again to remove a movie from the favorites list.

## Requirements

To achieve the above functionality, follow these steps:

1. **Create the `favorites.service.ts` File:**
   - Store the list of current favorite movies using localStorage.
   - **Implement `setFavorite` and `deleteFavorite` Method:** Create a method to add and remove a movie from the favorites list.

2. **Implement `isFavorite(movie)` Method:**
   - This method should return a boolean indicating whether a given movie is in the favorites list.

3. **Update `movie-item.component.ts`:**
   - Add necessary actions to:
     - Pass information about a movie's favorite status.
     - Emit an event when the "star" icon is clicked.
   - **CSS Class:** Use the `active` CSS class to change the "star" icon from ☆ to ⭐ when a movie is marked as a favorite, and remove the class to revert the icon.

4. **Modify `app.component.ts`:**
   - Handle interactions with `favorites.service.ts`.
   - Pass favorite status information to `movie-item.component.ts`.


## Finished Steps
- **Persistent Storage:**  
  The system leverages the browser's `localStorage` to store the list of favorite movies, ensuring that the favorite status persists across user sessions.

- **Addition and Removal of Favorites:**  
  A toggle functionality is provided—clicking on the star icon will add a movie to the favorites list if it's not already marked as a favorite, or remove it if it is.

- **Favorite Status Verification:**  
  A dedicated method checks whether a given movie is in the favorites list, allowing the UI to display the correct star icon based on its status.

- **Interactive UI with Dynamic Icons:**  
  FontAwesome icons are used to represent the favorite state:
  - An outlined star (☆) indicates a non-favorite movie.
  - A filled star (⭐) signifies that the movie is marked as a favorite.
  This dynamic visual feedback is triggered immediately upon user interaction.

- **Reactive Data Binding:**  
  By employing Angular's Signals, the system ensures that any change in the favorites list is automatically and efficiently reflected in the UI, providing a seamless user experience.

## Example of Finished Application

For reference, here's an example demonstrating the expected functionality upon completing this challenge:

![Finished app in this challenge](https://images.certificates.dev/chapter51-screenshot.gif)
