
== Contributing with Git

IMPORTANT: Use terminal git, not the bloated GUI version.

The workflow is as follows:

. Update (or clone) the local repo
. Create new local issue branch
. Hack away
. Commit and push to a new server branch
. Create pull request
. (Solve feedback)
. Delete local branch

If you don't have git and/or hub, run in Powershell with admin rights:

[source, powershell]
----
Set-ExecutionPolicy AllSigned
----

then

[source, powershell]
----
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
choco install git hub -y
----
Else, download https://git-scm.com/downloads[git] and https://github.com/github/hub/releases[hub]

. Clone if this is the first time modifying the codebase.
+
[source, powershell]
----
git clone https://github.com/Mauville/SuaderoSolar.git
cd SuaderoSolar
git fetch origin
git checkout -b dev origin/dev
----
+
. Create new feature branch
+
[source, powershell]
----
git checkout -b {your-name}
----
+
. Begin making changes. . Once finished, add changes and create a commit.
IMPORTANT: Create a lot of commits between medium changes such as functions and big control structures.
+
IMPORTANT: The commit message (the string between the quotes) should describe what you did.
+
[source, powershell]
----
git add *
git commit -m 'COMMIT MESSAGE'
----
+
. Push & create a pull request with necessary info.
+
NOTE: You can get the branch name using `git branch`
+
[source, powershell]
----
git push --set-upstream origin {BRANCH_NAME}
hub pull-request -m "{Main Feature}" -m "{Description of feature}" -b Mauville:dev
----
+
At this point, you should wait for feedback. If there are changes to make, add, commit and push again but do not create another PR.
+
. If your changes got accepted and merged into `dev`, delete your feature branch from local so next time you work you start clean.
+
[source, powershell]
----
git checkout dev
git branch -d <branch name>
----
+
. When you are ready to tackle another issue, be sure to get the latest changes before you create a new feature branch from `dev` (This means starting from Step 2.
+
[source, powershell]
----
git pull
----

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

