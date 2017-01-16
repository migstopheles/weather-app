Weather Forecast App
===

For the sake of expediency, this app was bootstrapped from [`create-react-app`](https://github.com/facebookincubator/create-react-app). It allowed me to start developing right away, without having to spend time configuring build tools and test runners.

Under the hood, `create-react-app` uses webpack for development and build configuration, and [`jest`](https://github.com/facebook/jest) for testing.

* Clone the repo and run `npm install` to get started
* To run the app from source locally, run `npm start` from the command line. This will open the app in a browser on `http://localhost:3000`, with live reloading enabled (thanks to `create-react-app`);
* To run the test suites, `npm test` from the command line will execute all the test files in the app.
* To create a deployable build of the app, `npm run build` will create a 'build' folder in the project root, containing all the assets (minified and concatenated where possible) as well as an asset manifest file (thanks again to `create-react-app`);

## The weather app

The app currently allows a free text search for a city, and will display as many days forecast as the API returns. Given that the API returns multiple forecasts for a day, I decided to show one forecast for each day after searching (taking the middle-most forecast). Given more time, I would have extended the view to show the full forecast after tapping on an individual day (potentially in a modal or accordion-style dropdown).

The layout is designed for small screen devices, and remains readable at larger sizes, but ideally would have layout tweaks at certain breakpoints to aid readability.

Some basic features are also yet to be added, for example a loading indicator or error states, but actions exist that would make creating them fairly trivial.

## Folder structure

The folder structure here probably OTT for the size of app this is, but I chose it show a layout I've used in the past that scales very well for large apps. Code is split across concerns at the top level, separating view from app state from services (api in this case), and so on.

In each folder, where appropriate, code is divided across domain entities. Here, forecasts and locations are separate entities with their own components and state management. This can scale to many tens of entity types and still remain conceptually very clear and easy to follow.

## Testing

Coverage isn't exhaustive here, but there is a mix of regular unit tests for state concerns, and enzyme-based component tests to cover views. Tests are limited strictly to the concerns of the module, making sure not to test any side effects of imported dependencies (this is where jest's automatic mocking works well).

## App state

The app state is handled using `redux` and connected to the view via `react-redux`.

State is laid out as follows:

```js
{
	entities: {
		locations: {
			byId,
			currentId
		},
		forecasts: {
			byCityId
		}
	}
}
```

This structure is probably too complicated for an app this size, but it does scale well in my experience. The core idea is to hold a normalised graph of domain entities, which can then be hydrated and cached in selectors, keeping the state as lean and as flexible as possible.

In a more complex app, I would have a `views` tree alongside `entities`, allowing me to keep my view state separate from domain entities - there is a good argument here for holding `currentId` in view state rather than entity state, for example.

## Views

Views are split into components and containers. Components are kept as "dumb" as possible, relying only on data passed in via props. When a component needs access to the app state for data, a container will wrap it with a connection to the store, bringing together the relevant selectors and the view component while keeping each agnostic of the other (and therefore more flexible and easily testable).