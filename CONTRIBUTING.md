# Contributing

## Summary

- [Branch naming guidelines](#branch-naming-guidelines)
- [Adding new fake last names](#adding-new-fake-last-names)

## Branch naming guidelines

Before creating a branch, make sure you are working to solve an existing issue. If there is no issue, create one.

Your branch name should follow the following template:

```
<issue-id>-<kebab-cased-issue-title>
```

For example, if you are creating a pull request to solve the issue #18 with title "Adding test to check if there is no duplicate last names", your branch must be named

```
18-adding-test-to-check-if-there-is-no-duplicate-last-names
```

## Adding new fake last names

**Prerequisites**

- A fake last name dataset you want to add that comply with GPL-3.0 license.

**Conventions**

- Follow the existing rules (quotes, line endings, ...) in the files you edit.

**Contributing**

1. Fork this project
2. Create a branch named accordingly to our [branch naming guideline](#branch-naming-guidelines)
2. Go to the directory: `cd last-names-en`
3. Edit the file "src/index.ts" and add your fakes last names
4. On top of the `const lastNames`, add a link to the source of the last names you added in comment
5. Build the project: `npm install && npm run build`
6. Run the test (they must pass): `npm run test`
7. Commit and push the changes to the remote branch you created
8. Go in the github repository of the original project, and create a pull request from your branch to the master branch
