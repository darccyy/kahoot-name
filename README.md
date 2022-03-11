# Kahoot Name

Kahoot renaming API.
Use Redirector addon to use custom name for Kahoot generated name.

Hosted on Heroku with Express Node JS.
In the future it will most likely be moved to a new domain.

# Usage

## Kahoot

1. Install **Redirector** addon on [Firefox](https://addons.mozilla.org/en-US/firefox/addon/redirector/) or [Chrome](https://chrome.google.com/webstore/detail/redirector/ocgpenflpmgnfapjedencafcfakcekcd)
2. Click the Redirector button (Addon) -> 'Edit Redirects'
3. 'Create new redirect'
4. 'Example URL': `https://apis.kahoot.it/namerator`
5. 'Include Pattern': `https://apis.kahoot.it/namerator`
6. 'Redirect to': `https://kahootname.herokuapp.com/name/<NAME>` with `<NAME>` being the name you want (Refer to (API Usage)[#api-usage])
7. Click 'Show advanced options'
8. Make sure 'XMLHttpRequests (Ajax)' is checked
9. Click Save

It should automatically change the name once you spin

## API Usage

Domain: `https://kahootname.herokuapp.com/` (Returns `200`)

Fetch name: `./name/<NAME>` (If no name is given, default will be used)

# Issues
[Create an issue](https://github.com/darccyy/kahoot-name/issues/new)