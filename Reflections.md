What did the agent get wrong, or do awkwardly? (2–3 sentences. e.g. it mutated state instead of copying, used a stale/old React idiom, missed an edge case, or over-engineered something simple.)

Explain-every-line check: I can explain every line of the AI-assisted code in this lab and why it's correct. ☐ (Your TA may ask you to walk through any of it.)

## Answer
The agent didn't necessarily get anything wrong or do anything awkwardly because I simply asked it to define and elaborate the difference on having a input value and no input value to update onChange when pressed. It explained that onChange{() => setText(text)} would do nothing and appear frozen. It doesn't collect the user's input and simply sets the state to the already established value in text so in this case and empty string.