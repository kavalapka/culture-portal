# RSSchool Culture Portal

### Task https://github.com/rolling-scopes-school/tasks/blob/2018-Q3/tasks/codejam-culture-portal.md

## How to run project:
#### npm install
Install packages

#### npm start
Start project in develop mode

#### npm build
Build production version
 
 
# Worklogs

***kavalapka***

| time spent| feature |
|-----------| --------|
| 5h | Video Button component |
| 3h | prepare Author's data to work with Video component |
| 3h | Exhibition componet |
| 3h | prepare Author's data to work with Exhibition component |
| 1h | deploy to gh-pages|
| non-feature but important|
| 2h | github teamwork cheatsheet |
| 20h| routing with language in URL|
| 2h | Photo component |
| 5h | RnD Netlify cms |

 
***juliastetskaya***

| time spent| feature |
|-----------| --------|
| 2h | collecting information about the photographer |
| 3h | put content in json |
| 2h | put content in js files |
| 5h | studying and implication of the translation module |
| 3h | add Photograph of the Day |
| 18h | studying and attempt to the implication Netlify cms |
| 1h | Map component completion |
| 7h | checking PRs other team members |
 
 
***slayer110***

| time spent| feature |
|-----------| --------|
| 1h | collecting information about the photographer |
| 15h |studying of the Google Map module for react |  |
| 1h | implication of the Google Map module for react |
| 2h | bug fixes and adjustments |


***feodorius***

| time spent| feature |
|-----------| --------|
| 1h | collecting info about the photographer |
| 12h | searhing react-bootstrap slider, studying and implementation |
| 3h | styling and fixing the gallery section problems |
| 1h | collecting info for portal description |
| 3h | implementation of portal description |
| 4h | collecting info for quotes of main slider, implementation of main slider |
| 2h | minor styling fixes in components |

# Evaluation

Total result - **220** / **240**

### Min scope - **40** / **40**
- [x] **10** Main page + page with a list of authors + author's page (only html);
- [x] **10** Page with list of authors contains search widget;
- [x] **20** Portal has two languages;

### Normal scope - **130** / **130**
- [x] **10** Author's page contains timeline;
- [x] **10** Author's page contains video overlay;
- [x] **20** Author's page contains photo gallery;
- [x] **10** Author's page contains map (geowidget);
- [x] **40** Project is made using react (max 40 - if all widgets are done in React);
- [x] **20** Design;
- [x] **20** material-ui / bootstrap is used 

### Extra scope - **50**  / **70**
- [x] **10** Confidence of the project presentation;
- [x] **30** Project is made using gatsbyjs;
- [ ] **20** contentful / netlify cms is used for content management
- [x] **10** Portal has third language;


# Contributing

## Work with local branch

* `git co master`
* `git pull -r`
* `git co -b my-new-branch`

![](https://i.imgur.com/hREp2sG.png)

do any changes you need

* `git add`
* `git ci -m "feat: my new feature"`
* `git fetch && git merge origin/master` 
**NOTE**: fix conflicts here before submiting merge request
* `git push origin --set-upstream my-new-branch`
![](https://i.imgur.com/0w58vo8.png)

## Create PR
![](https://i.imgur.com/di3vBuL.png)
* create PR to master
* add teammate to reviewers
* send him/her your PR as a link
![](https://i.imgur.com/VBlaXjq.png)
![](https://i.imgur.com/iRVClVU.png)
* receive __Approve__
  * merge your branch to master
  * delete branch
  
![](https://i.imgur.com/604Sxw2.png)
![](https://i.imgur.com/nIU4QSV.png)
* receive __Improvement Request__ with comments
  * fix remarks
  * push changes to your branch
  * write to reviewer to recheck

## Receive Approve Request
* check code, code style in changes
* check out `my-new-branch` to local
* run and check if everything works fine and feature works
* press Approve if it's __OK__ and write to teammate
* if it's __NOT OK__ write comments on github PR
  * write to teammate and ask to fix 
