## type
- The type of event (e.g., "click", "mouseover", etc.)

## timestamp
- The timestamp of when the event occurred

## defaultPrevented
- A boolean indicating whether the event's default action was prevented

## target
- The element that triggered the event

## toElement
- The element that the mouse pointer is moving towards (only applicable for mouseover and mouseout events)

## srcElement
- An alias for target (older browsers)

## currentTarget
- The element that is currently handling the event (may not be the same as target if the event has bubbled up the DOM tree)

## clientX and clientY
- The coordinates of the mouse pointer relative to the client area of the window (i.e., the area inside the browser window)

## screenX and screenY
- The coordinates of the mouse pointer relative to the entire screen

## altKey, ctrlKey, and shiftKey
- Booleans indicating whether the corresponding modifier key was pressed during the event

## keyCode
- The code of the key that was pressed (only applicable for keyboard events)