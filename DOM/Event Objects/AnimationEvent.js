//? PROPERTIES AND METHODS
//* animationName - Returns the name of the animation
//? The animationName property returns the name of the animation, when an animation event occurs.
//? The name of the animation is the value of the animation-name CSS property.
// -----------------------------------------------

//* elapsedTime - Returns the number of seconds an animation has been running
//? The elapsedTime property returns the number of seconds an animation has been running, when an animation event occurs.
//? Note: The return value is not affected if the animation is paused (by using the animation-delay CSS property).
//? Note: For the animationstart event, this property always returns "0".
// -----------------------------------------------

//* pseudoElement - Returns the name of the pseudo-element of the animation

//? EVENT TYPES
//* animationend - The event occurs when a CSS animation has completed
//? The animationend event occurs when a CSS animation has completed.
// -----------------------------------------------

//* animationiteration - The event occurs when a CSS animation is repeated
//? The animationiteration event occurs when a CSS animation is repeated.
//? If the CSS animation-iteration-count property is set to "1", meaning that the animation will only be played one time, the animationiteration event does not occur. The animation needs to run more than once for this event to fire.
// -----------------------------------------------

//* animationstart - The event occurs when a CSS animation has started
//? The animationstart event occurs when a CSS animation has started to play.

//? When a CSS animation plays, there are three events that can occur:
//? animationstart - occurs when the CSS animation has started
//? animationiteration - occurs when the CSS animation is repeated
//? animationend - occurs when the CSS animation has completed

// -----------------------------------------------

//? AnimationEvent OBJECT
//? Events that occur when a CSS animation runs, belongs to the AnimationEvent Object.
//? The AnimationEvent inherits all the properties and methods from The Event Object
