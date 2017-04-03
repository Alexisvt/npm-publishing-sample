# Sample about how to publish javascript package on npm

Steps to create a package

1. Create a git repo and inside of it
1. Init a node package using `npm init` command
1. Define the value for the `main` property inside the package.json
1. Make sure to install on the `dependency` property only the stuff that the app needs
1. Test you package before publishing using something like [jest](https://www.npmjs.com/package/jest) and make sure all your test pass!.
1. use npm [link](https://docs.npmjs.com/misc/developers#link-packages) command to test your package locally.
1. Include an [.npmignore](https://docs.npmjs.com/misc/developers#publish-your-package) file to avoid the user install unnecessary files.
