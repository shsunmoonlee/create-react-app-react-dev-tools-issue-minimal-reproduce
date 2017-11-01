# create-react-app react-dev-tools issue minimal reproduce
I'm using original create-react-app config with 'NODE_PATH=src' inside .env file.
When I run 'yarn build && serve -s build' with react dev tools on, it does not show 'HomePage'. When I run 'yarn start' in local development mode, it shows 'Homepage' and there is no issue.

Using the same architecture, I still get this error in production, 'yarn build && serve -s build' version of my project with react-dev-tools on. It runs fine when I turn off react-dev-tools. My production code runs on local development mode without problem even with react-dev-tools on.
`Uncaught TypeError: Cannot read property 'mountComponent' of undefined error when running create-react-app`

### Three testings I've done.
`yarn start` localhost:3000
`yarn build & serve -s build` localhost:5000
https://react-ticket-app.firebaseapp.com/


I've posted this issue.
https://github.com/facebookincubator/create-react-app/issues/3335

https://stackoverflow.com/questions/46966129/uncaught-typeerror-cannot-read-property-mountcomponent-of-undefined-error-whe

Thank you for your help!


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
