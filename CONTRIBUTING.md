# Contributing to Lightence

👍🎉 First off, thanks for taking the time to contribute! 🎉👍

Before submitting your contribution though, please make sure to take a moment and read through the following guidelines.

* [Code of Conduct](CODE_OF_CONDUCT.md)

## Pull Request Guidelines

* The `main` branch is just a snapshot of the latest stable release. **Do not submit PRs against the `main` branch.**
* Atomic code contribution looks something like this:
    * Checkout from upstream `develop`.
    * Work on your fork in dedicated branch.
    * When you're ready to show results - create PR against upstream `develop` and add a developer for review. You can ping said developer to speed things up ;).
* It's OK to have multiple small commits as you work on the PR - we will let GitHub automatically squash it before merging.

* Good stuff to add in your pull request:
    * If your PR fully resolves existing issue, add `(fix #xxxx[,#xxx])` (#xxxx is the issue id) so that GitHub will close the issue once it's up on `main`. You have to add that to the body of PR, won't work in header :).
    * Provide detailed description of the issue in the PR if it's not done in the issue.
    * If you're working on visual changes - provide before/after screenshot. That speeds up review immensely.

### Branches

* Upstream branches (**altence/lightence-admin**):
    * `main` - stable snapshot from `develop`. Releases and hotfixes only. **Do not submit PR's to `main`!**
    * `develop` - main development branch.

* Local branches
    * For local branches naming stick to [commit message convention](https://www.conventionalcommits.org/en/v1.0.0/). So for feature branch that adds tabs name would be `feat/tabs`.

### For core contributors

* Keep amount of local branches minimal.
* Always link PR to issue (via `fix #123`).
* For small issues you may push to `develop` branch directly while adding (`fix #123`) to commit message.
* Create single PR for one issue. If we have several PRs - move all the code into a single one and close the rest. If one PR covers several issues - either split it in several PRs or mark one of the issues as duplicate.
* Be sure to have only one person assigned per issue.
* We use [yarn](https://yarnpkg.com/lang/en/) for package management.
* Be proactive. If you think something is wrong - create an issue or discuss.

#### Before release workflow
* Update package versions to the newest ones. Update lock files (for both `npm` and `yarn`)

## Windows

Lightence can be developed on Windows, however a few potential gotchas need to be kept in mind:

1. Regular Expressions: Windows uses `\r\n` for line endings, while Unix based systems use `\n`. Therefore, when working on Regular Expressions, use `\r?\n` instead of `\n` in order to support both environments. The Node.js [`os.EOL`](https://nodejs.org/api/os.html#os_os_eol) property can be used to get an OS-specific end-of-line marker.
2. Paths: Windows systems use `\` for the path separator, which would be returned by `path.join` and others. You could use `path.posix`, `path.posix.join`, etc... and the [slash](https://ghub.io/slash) module, if you need forward slashes - like for constructing URLs - or ensure your code works with either.
3. Bash: Not every Windows developer has a terminal that fully supports Bash, so it's generally preferred to write scripts in JavaScript instead of Bash.
4. Filename too long error: There are 260 characters limit for a filename when Git is compiled with `msys`. While the suggestions below are not guaranteed to work and could possibly cause other issues, a few workarounds include:
  - Update Git configuration: `git config --system core.longpaths true`
  - Consider using a different Git client on Windows

## Getting Help
##### You can ask any questions here
[<img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white">](mailto:lightence.admin@altence.com)
[<img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white">](https://twitter.com/altence_team)
[<img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white">](https://discord.gg/YBSrDrGe)
[<img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white">](https://www.facebook.com/groups/altence)
