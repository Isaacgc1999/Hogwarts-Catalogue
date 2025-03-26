# Highlight a Specific Movie in the List on Mouse Over

## Challenge Description
In this challenge, we want to highlight movies on mouse over by changing their background color to `gold`.  
We want to use a custom directive to do so.

## Requirements
- Edit the provided `src/highlight.directive.ts`
- Add a way for the directive to add the CSS class `highlight` to its host element on mouse over (such CSS class is already defined in `styles.css`).
  > 💡 **Hint**: Review our self-study content on host bindings and host listeners.
- Add a way for the directive to remove the CSS class `highlight` from its host element on mouse out.
- Apply the directive on your `MovieItemComponent`.

## Finished Steps
- Edited the `highlight.directive.ts` to include mouse enter and leave event listeners.
- Implemented functionality to add the `highlight` class on mouse over.
- Implemented functionality to remove the `highlight` class on mouse out.
- Applied the `appHighlight` directive to the `MovieItemComponent` template.
- Verified that movie items highlight appropriately on mouse hover.

## Example of Finished Application

![Finished app in this challenge](https://images.certificates.dev/chapter41-screenshot.gif)
