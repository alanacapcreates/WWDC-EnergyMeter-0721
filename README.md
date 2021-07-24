# WWDC-EnergyMeter-0721

## Main Objective

The goal of this challenge is to create an enerygy meter that adjusts depending on user input.

## Stretch Goal

Reduce the energy over time + change the theme

## My Take

- I liked the idea of a "Mood Meter", so that was the inital goal. To make it more fun, I incorporated emojis in a switch statement, that updated according to the current meter value.
- For the stretch goal, I had an automatic timer counting down from 10 at 2 second intervals.
- Instead of an text input element for user input, I updated my design to use buttons to both increase and decrease the meter.
- To keep the app engaging, I added a transition effect that changed the emoji y-postion to match the height of the meter value.

## Additional Styling

While working on this challenge, I read a lot on how the <meter> element works, and how to style it accordingly.
 
Supplemental styling on my <meter> element includes:
  - Changing the background color to a gradient fill instead of a solid color for each checkpoint (optimum-value, suboptimum-value, even-less-good-value)
  - Rotating the meter to have a vertical orientation as opposed to the standard horizontal
  - Creating a neumorphic design consisting of an inset box-shadow property, and a outer drop shadow effect
