This package catches errors thrown by Internet Explorer's getBoundingClientRect method.

This method patches the getBoundingClientRect method when you include it. I only include this on my polyfills bundle as I don't want to mess with other browsers getBoundingClientRect method.

To use

```
yarn add catch-ie-get-bounding-client-rect-errors
```

```
import 'catch-ie-get-bounding-client-rect-errors';
```
