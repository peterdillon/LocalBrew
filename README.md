# LocalBrew

Using the https://www.openbrewerydb.org/ database endpoints to createa a unique UI for searching local breweries.

# If you see ERRORS like code: 'ERR_OSSL_EVP_UNSUPPORTED'
check version of node (current build uses 20.11.1)
run: export NODE_OPTIONS=--openssl-legacy-provider
then: ng serve

# Other Details
The app uses:
- primeng
- @ng-web-apis/geolocation
- ng-http-loader

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

# View Live App
[View Live Firebase App](https://localbrew-f26a9.web.app/)

## Standard Angular Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
