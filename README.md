# Neighbourhood Map React
* This single page app was bootstrapped with create-react app and uses the Google Maps and Foursquare APIs to display a list of museums in central Manhattan.

## Features
* By default, 10 museum markers are displayed on the map. Click on the dropdown menu to change this setting to either '5' or '20'.
* Clicking on any marker or on museum name in the sidebar will show more detailed information such as opening hours, the museum's url and a short description
* The list of museums can be narrowed down without reloading by typing into the input field in the sidebar
* The app uses a service worker for offline usage, is fully responsible for mobile devices, and follows accessibility best practices

## How run this app
* To run this app on your local machine, either git clone the this repository or download it as a zip file.
* Navigate to the root folder of this repository and install all dependencies with `npm install` (see  http://blog.npmjs.org/post/85484771375/how-to-install-npm)
* Start your development server with `npm start`

## Credits & Helpful Links
* For styling the Google Map component, I have used the following settings from snazzymaps, with my own modifications:
https://snazzymaps.com/style/28442/monomap
* For rendering Google Maps as a React component, I have used the google-react-map library:
https://github.com/google-map-react/google-map-react
* I found the following video series useful for working with the Foursquare API:
https://www.youtube.com/playlist?list=PLgOB68PvvmWCGNn8UMTpcfQEiITzxEEA1

## Licence
Copyright 2019 Sebastian Gertz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
