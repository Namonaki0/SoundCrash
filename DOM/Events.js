//? EVENTS
//* abort - The event occurs when the loading of a media is aborted
//* afterprint - The event occurs when a page has started printing, or if the print dialogue box has been closed
//* animationend - The event occurs when a CSS animation has completed
//* animationiteration - The event occurs when a CSS animation is repeated
//* animationstart - The event occurs when a CSS animation has started
//* beforeprint - The event occurs when a page is about to be printed
//* beforeunload - The event occurs before the document is about to be unloaded
//* blur - The event occurs when an element loses focus
//* canplay - The event occurs when the browser can start playing the media (when it has buffered enough to begin)
//* canplaythrough - The event occurs when the browser can play through the media without stopping for buffering
//* change - The event occurs when the content of a form element, the selection, or the checked state have changed (for <input>, <select>, and <textarea>)
//* click - The event occurs when the user clicks on an element
//* contextmenu - The event occurs when the user right-clicks on an element to open a context menu
//* copy - The event occurs when the user copies the content of an element
//* cut - The event occurs when the user cuts the content of an element
//* dblclick - The event occurs when the user double-clicks on an element
//* drag - The event occurs when an element is being dragged
//* dragend - The event occurs when the user has finished dragging an element
//* dragenter - The event occurs when the dragged element enters the drop target
//* dragleave - The event occurs when the dragged element leaves the drop target
//* dragover - The event occurs when the dragged element is over the drop target
//* dragstart - The event occurs when the user starts to drag an element
//* drop - The event occurs when the dragged element is dropped on the drop target
//* durationchange - The event occurs when the duration of the media is changed
//* ended - The event occurs when the media has reach the end (useful for messages like "thanks for listening")
//* error - The event occurs when an error occurs while loading an external file
//* focus - The event occurs when an element gets focus
//* focusin - The event occurs when an element is about to get focus
//* focusout - The event occurs when an element is about to lose focus
//* fullscreenchange - The event occurs when an element is displayed in fullscreen mode
//* fullscreenerror - The event occurs when an element can not be displayed in fullscreen mode
//* hashchange - The event occurs when there has been changes to the anchor part of a URL
//* input - The event occurs when an element gets user input
//* invalid - The event occurs when an element is invalid
//* keydown - The event occurs when the user is pressing a key
//* keypress - The event occurs when the user presses a key
//* keyup - The event occurs when the user releases a key
//* load - The event occurs when an object has loaded
//* loadeddata - The event occurs when media data is loaded
//* loadedmetadata - The event occurs when meta data (like dimensions and duration) are loaded
//* loadstart - The event occurs when the browser starts looking for the specified media
//* message - The event occurs when a message is received through the event source
//* mousedown - The event occurs when the user presses a mouse button over an element
//* mouseenter - The event occurs when the pointer is moved onto an element
//* mouseleave - The event occurs when the pointer is moved out of an element
//* mousemove - The event occurs when the pointer is moving while it is over an element
//* mouseover - The event occurs when the pointer is moved onto an element, or onto one of its children
//* mouseout - The event occurs when a user moves the mouse pointer out of an element, or out of one of its children
//* mouseup - The event occurs when a user releases a mouse button over an element
//* offline	- The event occurs when the browser starts to work offline
//* online - The event occurs when the browser starts to work online
//* open - The event occurs when a connection with the event source is opened
//* pagehide - The event occurs when the user navigates away from a webpage
//* pageshow - The event occurs when the user navigates to a webpage
//* paste - The event occurs when the user pastes some content in an element
//* pause - The event occurs when the media is paused either by the user or programmatically
//* play - The event occurs when the media has been started or is no longer paused
//* playing - The event occurs when the media is playing after having been paused or stopped for buffering
//* popstate - The event occurs when the window's history changes
//* progress - The event occurs when the browser is in the process of getting the media data (downloading the media)
//* ratechange - The event occurs when the playing speed of the media is changed
//* resize - The event occurs when the document view is resized
//* reset - The event occurs when a form is reset
//* scroll - The event occurs when an element's scrollbar is being scrolled
//* search - The event occurs when the user writes something in a search field (for <input="search">)
//* seeked - The event occurs when the user is finished moving/skipping to a new position in the media
//* seeking - The event occurs when the user starts moving/skipping to a new position in the media
//* select - The event occurs after the user selects some text (for <input> and <textarea>)
//* show - The event occurs when a <menu> element is shown as a context menu
//* stalled - The event occurs when the browser is trying to get media data, but data is not available
//* storage - The event occurs when a Web Storage area is updated
//* submit - The event occurs when a form is submitted
//* suspend - The event occurs when the browser is intentionally not getting media data
//* timeupdate - The event occurs when the playing position has changed (like when the user fast forwards to a different point in the media)
//* toggle - The event occurs when the user opens or closes the <details> element
//* touchcancel - The event occurs when the touch is interrupted
//* touchend - The event occurs when a finger is removed from a touch screen
//* touchmove - The event occurs when a finger is dragged across the screen
//* touchstart - The event occurs when a finger is placed on a touch screen
//* transitionend - The event occurs when a CSS transition has completed
//* unload - The event occurs once a page has unloaded (for <body>)
//* volumechange - The event occurs when the volume of the media has changed (includes setting the volume to "mute")
//* waiting - The event occurs when the media has paused but is expected to resume (like when the media pauses to buffer more data)
//* wheel - The event occurs when the mouse wheel rolls up or down over an element

//? PROPERTIES AND METHODS
//* altKey - Returns whether the "ALT" key was pressed when the mouse event was triggered
//* altKey - Returns whether the "ALT" key was pressed when the key event was triggered
//* animationName - Returns the name of the animation
//* bubbles - Returns whether or not a specific event is a bubbling event
//* button - Returns which mouse button was pressed when the mouse event was triggered
//* buttons - Returns which mouse buttons were pressed when the mouse event was triggered
//* cancelable - Returns whether or not an event can have its default action prevented
//* charCode - Returns the Unicode character code of the key that triggered the onkeypress event
//* changeTouches - Returns a list of all the touch objects whose state changed between the previous touch and this touch
//* clientX - Returns the horizontal coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered
//* clientY - Returns the vertical coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered
//* clipboardData - Returns an object containing the data affected by the clipboard operation
//* code - Returns the code of the key that triggered the event
//* composed - Returns whether the event is composed or not
//* ctrlKey - Returns whether the "CTRL" key was pressed when the mouse event was triggered
//* ctrlKey - Returns whether the "CTRL" key was pressed when the key event was triggered
//* currentTarget - Returns the element whose event listeners triggered the event
//* data - Returns the inserted characters
//* dataTransfer - Returns an object containing the data being dragged/dropped, or inserted/deleted
//* defaultPrevented - Returns whether or not the preventDefault() method was called for the event
//* deltaX - Returns the horizontal scroll amount of a mouse wheel (x-axis)
//* deltaY - Returns the vertical scroll amount of a mouse wheel (y-axis)
//* deltaZ - Returns the scroll amount of a mouse wheel for the z-axis
//* deltaMode - Returns a number that represents the unit of measurements for delta values (pixels, lines or pages)
//* detail - Returns a number that indicates how many times the mouse was clicked
//* elapsedTime - Returns the number of seconds an animation has been running
//* elapsedTime - Returns the number of seconds a transition has been running
//* eventPhase - Returns which phase of the event flow is currently being evaluated
//* getTargetRanges() - Returns an array containing target ranges that will be affected by the insertion/deletion
//* getModifierState() - Returns an array containing target ranges that will be affected by the insertion/deletion
//* inputType - Returns the type of the change (i.e "inserting" or "deleting")
//* isComposing - Returns whether the state of the event is composing or not
//* isTrusted - Returns whether or not an event is trusted
//* key - Returns the key value of the key represented by the event
//* key - Returns the key of the changed storage item
//* keyCode - Returns the Unicode character code of the key that triggered the onkeypress event, or the Unicode key code of the key that triggered the onkeydown or onkeyup event
//* location - Returns the location of a key on the keyboard or device
//* lengthComputable - Returns whether the length of the progress can be computable or not
//* loaded - Returns how much work has been loaded
//* metaKey - Returns whether the "META" key was pressed when an event was triggered
//* metaKey - Returns whether the "meta" key was pressed when the key event was triggered
//* MovementX - Returns the horizontal coordinate of the mouse pointer relative to the position of the last mousemove event
//* MovementY - Returns the vertical coordinate of the mouse pointer relative to the position of the last mousemove event
//* newValue - Returns the new value of the changed storage item
//* newURL - Returns the URL of the document, after the hash has been changed
//* offsetX - Returns the horizontal coordinate of the mouse pointer relative to the position of the edge of the target element
//* offsetY - Returns the vertical coordinate of the mouse pointer relative to the position of the edge of the target element
//* oldValue - Returns the old value of the changed storage item
//* oldURL - Returns the URL of the document, before the hash was changed
//* onemptied - The event occurs when something bad happens and the media file is suddenly unavailable (like unexpectedly disconnects)
//* pageX - Returns the horizontal coordinate of the mouse pointer, relative to the document, when the mouse event was triggered
//* pageY - Returns the vertical coordinate of the mouse pointer, relative to the document, when the mouse event was triggered
//* persisted - Returns whether the webpage was cached by the browser
//* preventDefault() - Cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur
//* propertyName - Returns the name of the CSS property associated with the animation or transition
//* pseudoElement - Returns the name of the pseudo-element of the animation or transition
//* region
//* relatedTarget - Returns the element related to the element that triggered the mouse event
//* relatedTarget - Returns the element related to the element that triggered the event
//* repeat - Returns whether a key is being hold down repeatedly, or not
//* screenX - Returns the horizontal coordinate of the mouse pointer, relative to the screen, when an event was triggered
//* screenY - Returns the vertical coordinate of the mouse pointer, relative to the screen, when an event was triggered
//* shiftKey - Returns whether the "SHIFT" key was pressed when an event was triggered
//* shiftKey - Returns whether the "SHIFT" key was pressed when the key event was triggered
//* state - Returns an object containing a copy of the history entries
//* stopImmediatePropagation() - Prevents other listeners of the same event from being called
//* stopPropagation() - Prevents further propagation of an event during event flow
//* storageArea - Returns an object representing the affected storage object
//* target - Returns the element that triggered the event
//* targetTouches - Returns a list of all the touch objects that are in contact with the surface and where the touchstart event occured on the same target element as the current target element
//* timeStamp - Returns the time (in milliseconds relative to the epoch) at which the event was created
//* total - Returns the total amount of work that will be loaded
//* touches - Returns a list of all the touch objects that are currently in contact with the surface
//* transitionend - The event occurs when a CSS transition has completed
//* type - Returns the name of the event
//* url - Returns the URL of the changed item's document
//* which - Returns which mouse button was pressed when the mouse event was triggered
//* which - Returns the Unicode character code of the key that triggered the onkeypress event, or the Unicode key code of the key that triggered the onkeydown or onkeyup event
//* view - Returns a reference to the Window object where the event occurred

// -----------------------------------------------

//? HTML DOM events allow JavaScript to register different event handlers on elements in an HTML document.
//? Events are normally used in combination with functions, and the function will not be executed before the event occurs (such as when a user clicks a button).
