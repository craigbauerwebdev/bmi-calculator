# bmi-calculator
BMI App for get fit dude site. To be added as a widget on page and sidebar.

- Used create-react-app to build dev environment with webpack, babel, sass and othe npm packages
- export build folder to root directory where external page exists
- run script to append scripts to body found in assets-manifest.json file
- in package.json added "postbuild": "rm -rf ../build && mv build ../" -- to remove build before creating new build

Now I can run the build and the rest is hands off. This allows me to use all my tooling for daev and have my react app automatically work in my existing website. For more complicated setups I would move each build to it's own sub folder top better manage them.

This is the best setup I can think of for using react applications in an existing website. 

If anyone knows a better way I would love it if you forked this repo and added your way.
