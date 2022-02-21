//? EVENT PROPERTIES AND METHODS
//* bubbles - Returns whether or not a specific event is a bubbling event
//* cancelBubble - Sets or returns whether the event should propagate up the hierarchy or not
//* cancelable - Returns whether or not an event can have its default action prevented
//* composed - Returns whether the event is composed or not
//* createEvent() - Creates a new event
//* composedPath() - Returns the event's path
//* currentTarget - Returns the element whose event listeners triggered the event
//* defaultPrevented - Returns whether or not the preventDefault() method was called for the event
//* eventPhase - Returns which phase of the event flow is currently being evaluated
//* isTrusted - Returns whether or not an event is trusted
//* preventDefault() - Cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur
//* stopImmediatePropagation() - Prevents other listeners of the same event from being called
//* stopPropagation() - Prevents further propagation of an event during event flow
//* target - Returns the element that triggered the event
//* timeStamp - Returns the time (in milliseconds relative to the epoch) at which the event was created
//* type - Returns the name of the event

//? EVENT TYPES
//* abort - The event occurs when the loading of a media is aborted
//* afterprint - The event occurs when a page has started printing
//* beforeprint - The event occurs when a page is about to be printed
//* beforeunload - The event occurs before the document is about to be unloaded
//* canplay - The event occurs when the browser can start playing the media (when it has buffered enough to begin)
//* canplaythrough - The event occurs when the browser can play through the media without stopping for buffering
//* change - The event occurs when the content of a form element, the selection, or the checked state have changed (for <input>, <select>, and <textarea>)
//* error - The event occurs when an error occurs while loading an external file
//* fullscreenchange - The event occurs when an element is displayed in fullscreen mode
//* fullscreenerror - The event occurs when an element can not be displayed in fullscreen mode
//* input - The event occurs when an element gets user input
//* invalid - The event occurs when an element is invalid
//* load - The event occurs when an object has loaded
//* loadeddata - The event occurs when media data is loaded
//* loadedmetadata - The event occurs when meta data (like dimensions and duration) are loaded
//* message - The event occurs when a message is received through the event source
//* offline - The event occurs when the browser starts to work offline
//* online - The event occurs when the browser starts to work online
//* open - The event occurs when a connection with the event source is opened
//* pause - The event occurs when the media is paused either by the user or programmatically
//* play - The event occurs when the media has been started or is no longer paused
//* playing - The event occurs when the media is playing after having been paused or stopped for buffering
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
//* submit - The event occurs when a form is submitted
//* suspend - The event occurs when the browser is intentionally not getting media data
//* timeupdate - The event occurs when the playing position has changed (like when the user fast forwards to a different point in the media)
//* toggle - The event occurs when the user opens or closes the <details> element
//* unload - The event occurs once a page has unloaded (for <body>)
//* waiting - The event occurs when the media has paused but is expected to resume (like when the media pauses to buffer more data)

// -----------------------------------------------

//? All event objects in the DOM are based on the Event Object.
//? Therefore, all other event objects (like MouseEvent and KeyboardEvent) has access to the Event Object's properties and methods.
