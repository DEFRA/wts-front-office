# Demo
This repo contains a demo application for the [defra-identity-hapi-plugin](https://github.com/DEFRA/defra-identity-hapi-plugin).

To run the demo

1. Clone this repo
    - `git clone https://github.com/DEFRA/defra-identity-hapi-plugin-demo.git`

2. Install plugin dependencies
    - `npm i`

3. Make a copy of `.env.template` call it `.env` 

3. Open `.env` and fill in the missing environment variables

4. Run the demo app
    - `npm start`
    - The debug module is enabled by default in the demo, so you should see some colourful output in your console detailing what the plugin is doing as the application starts
    - The blipp module is also included in the demo, so you should see console output showing all the routes exposed by the demo app, along with their auth config

## Contributing to this project
If you have an idea you'd like to contribute please log an issue.

All contributions should be submitted via a pull request.

Please note that the codebase conforms to the [Jaavascript Standard Style](https://standardjs.com/).

Please make sure to run `npm run lint` before opening any pull requests.

## License

THIS INFORMATION IS LICENSED UNDER THE CONDITIONS OF THE OPEN GOVERNMENT LICENCE found at:

<http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3>

The following attribution statement MUST be cited in your products and applications when using this information.

> Contains public sector information licensed under the Open Government license v3

### About the license

The Open Government Licence (OGL) was developed by the Controller of Her Majesty's Stationery Office (HMSO) to enable information providers in the public sector to license the use and re-use of their information under a common open licence.

It is designed to encourage use and re-use of information freely and flexibly, with only a few conditions.
