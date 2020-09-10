As there are some bugs about using Google API, it is still not working right now. The problem is related to the google service account auth.

To test the API, for windows user, firstly download the service account private json key in the computer. Then, set the environment variable GOOGLE_APPLICATION_CREDENTIALS be the key path.

The code is mainly stored in the src/App.js

#Command to run application

> npm start


