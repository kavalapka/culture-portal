# RSSchool Culture Portal

###Task
https://github.com/rolling-scopes-school/tasks/blob/2018-Q3/tasks/codejam-culture-portal.md

##How to run project:
####npm install
Install packages

####npm start
Start project in develop mode

####npm build
Build production version

##Worklog


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
