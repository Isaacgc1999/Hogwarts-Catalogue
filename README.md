# Create Pipes to Improve Budget and Duration Formatting

## Challenge Description
In this challenge, we want to display movie budgets as follows using a custom pipe:
- If the budget is "175", render it as "$175 million"
- If the budget is a range such as "175-200", render it as "$175 to $200 million"
We also want to create another custom pipe to format the movie duration so that "92" is displayed as "1h 32min".

## Requirements
- Edit the provided `src/pipes/money.pipe.ts`
- Implement the `transform` method to format input values as defined in the challenge description:
   - If the budget is "175", render it as "$175 million"
   - If the budget is a range such as "175-200", render it as "$175 to $200 million"
- Add your pipe to the template of `movie-item.component.ts` and ensure the movie budgets are displayed as required.
- Edit the provided `src/pipes/duration.pipe.ts`
- Implement the `transform` method to format input values as defined in the challenge description:
   - "92" must be displayed as "1h 32min"
- Add your pipe to the template of `movie-item.component.ts` and ensure the movie durations are displayed as required.

## Finished Steps
- Edited `money.pipe.ts` to format the movie budget as "$175 million" or "$175 to $200 million".
- Edited `duration.pipe.ts` to convert minutes into a formatted duration, e.g., "1h 32min".
- Applied the pipes in the `movie-item.component.ts` template to display the correctly formatted budget and duration.
- Verified that movie budgets and durations are displayed as required.

## Example of Finished Application

![Finished app in this challenge](https://images.certificates.dev/chapter42-screenshot.png)
