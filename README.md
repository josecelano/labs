# Lab #7: Higher Order Components

This lab is split into three parts which can be found in these branches:
- 7-1-hoc
- 7-2-hoc
- 7-3-hoc

# Part 1

Your task in this lab is to create a simple higher order component to set a default property `count` with the value `9`.

You need to fill out the `withDefaultCountPropNine.js`. You can see how this higher order component is used in `index.js`.

```sh
index.js                    # Renders an Counter wrapped by withDefaultCountPropNine
withDefaultCountPropNine.js # This should export the higher order component
```

With `npm start` you can run the application, but it will fail until you implemented `withDefaultCountPropNine`.

## Testing

To make it easier for you to complete this task, we've added snapshot tests verifying that you've arrived at the correct app. This command will run the tests:

```sh
npm run test
```

If you haven't changed anything you should see two test failures saying "Component is not a function"—that's because there's nothing in the `TodoList.js` and `TodoItem.js` files yet! Once you've put components into them you'll see exactly what we're expecting the components to do.

## License

Copyright (C) 2017  Maximilian Stoiber & Nikolaus Graf. You may use this repo for non-commercial use under the GPLv3 license.

```
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
```

(see [LICENSE.md](LICENSE.md) for the full license text)
