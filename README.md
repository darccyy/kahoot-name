# Kahoot Name

Kahoot renaming server

# Usage

(Firefox)

1. Install [Redirector](https://addons.mozilla.org/en-US/firefox/addon/redirector/)
2. Click the Redicector button (Addon) -> 'Edit Redirects'
3. 'Create new redirect'
4. 'Example URL': `https://apis.kahoot.it/namerator`
5. 'Include Pattern': `https://apis.kahoot.it/namerator`
6. 'Redirect to': `https://kahootname.herokuapp.com/name/<NAME>` with `<NAME>` being the custom name
7. Click 'Show advanced options'
8. Make sure 'XMLHttpRequests (Ajax)' is checked
9. Click Save

It should automatically change the name once you spin