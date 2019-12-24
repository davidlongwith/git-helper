(this["webpackJsonpgit-helper"]=this["webpackJsonpgit-helper"]||[]).push([[0],[,,,function(e){e.exports=JSON.parse('[{"name":"Command Line","commands":[{"code":"pwd","description":"print working directory - shows what directory you are in"},{"code":"ls","description":"list the files in this directory"},{"code":"ls -a","description":"list files and show hidden files/folders"},{"code":"cd my-project/","description":"change directories to the my-project directory"},{"code":"cd \\"/c/Program Files/\\"","description":"use double quotes on entire path for names with spaces"},{"code":"cd ../","description":"navigate up one level"},{"code":"cd ~","description":"change directories to your home directory"},{"code":"q","description":"quit/end and return to prompt"},{"code":"ctrl + c","description":"close active server process"}]},{"name":"Git","commands":[{"code":"git --version","description":"check git version"},{"code":"git [command] --help","description":"opens detailed help file in browser"}]},{"name":"Git Config","commands":[{"code":"git config --list","description":"list configuration settings"},{"code":"git config --user.name \\"Dave\\"","description":"set Git username (single repository)"},{"code":"git config --global","description":"option to affect this and all future commits (but not past commits)"},{"code":"git config --global user.name","description":"show global user name"},{"code":"git config --global user.name \\"David Longwith\\"","description":"set Git username for all future commits"},{"code":"git config --global user.email none@none.com","description":"set global email"},{"code":"git config color.ui auto","description":"add color to diff results for readability"},{"code":"git config --system core.longpaths true","description":"allow longer path names (Windows)"}]},{"name":"Git Status","commands":[{"code":"git status","description":"show git repository status"}]},{"name":"Git Log","commands":[{"code":"git log","description":"list all commits for current directory (press \\"q\\" to quit)"},{"code":"git log --stat","description":"gives statistics about which files have changed (\\"q\\" to quit)"},{"code":"git log --graph [branch]","description":"visual representation of the commit history for specified branch(s)"},{"code":"git log --oneline","description":"make things easier to read all on one line"},{"code":"git log -n [quantity]","description":"show specified number of commits"}]},{"name":"Git Init","commands":[{"code":"git init","description":"initialize a git repository in current directory (adds .git hidden folder meta data)"}]},{"name":"Git Clone","commands":[{"code":"git clone [url]","description":"move an entire repository from one computer to another"}]},{"name":"Git Add","commands":[{"code":"git add [file]","description":"add file to track with next commit (relative to current directory, adds to staging area)"},{"code":"git add .","description":"add everything to staging area"}]},{"name":"Git Diff","commands":[{"code":"git diff","description":"show changes in working directory compared to staging area"},{"code":"git diff --staged","description":"compare staging area to repository commit"},{"code":"git diff [id] [id]","description":"compare two commits by id (can use first 4 characters instead of whole thing)"}]},{"name":"Git RM","commands":[{"code":"git rm [file]","description":"removes the file from working directory and stages deletion"}]},{"name":"Git Commit","commands":[{"code":"git commit","description":"commit to repository (opens default text editor for message/details input)"},{"code":"git commit -m \\"Commit Message\\"","description":"commit to repository with message from the command line"}]},{"name":"Git Show","commands":[{"code":"git show [commit id]","description":"show changes introduced to a commit (without knowing what the parent is)"}]},{"name":"Git Reset","commands":[{"code":"git reset","description":"move file in commit staging area back to working directory (undo a git add)"},{"code":"git reset --hard","description":"discards any changes in both the working directory and staging area"},{"code":"git reset --hard [commit_id]","description":"reset head back to desired commit, discarding all commits after this one"}]},{"name":"Git Checkout","commands":[{"code":"git checkout [commit id]","description":"switch to another commit in current branch"},{"code":"git checkout [branch]","description":"switch to most recent commit on specified branch \\"git checkout master\\""},{"code":"git checkout -b [new_branch_name]","description":"shortcut command for creating and switching to a new branch with checkout"}]},{"name":"Git Branch","commands":[{"code":"git branch","description":"list branches and star selected (use checkout to switch)"},{"code":"git branch [myNewBranch]","description":"create a new branch"},{"code":"git branch -d [branch name]","description":"delete branch label (make sure commits are reachable by another branch label first)"}]},{"name":"Git Merge","commands":[{"code":"git merge [branch(s)]","description":"create a new commit merging selected branches (currently checked out branch is always included)"},{"code":"git merge --abort","description":"restore files to their state before starting the merge"}]},{"name":"Git Remote","commands":[{"code":"git remote","description":"show all remotes"},{"code":"git remote -v","description":"verbose, show more information (url\'s for push/pull)"},{"code":"git remote add [name] [url]","description":"add repository on GitHub as a remote (standard to use \\"origin\\" as name when using single remote)"},{"code":"git remote rm [remote]","description":"remove specified remote"}]},{"name":"Git Push","commands":[{"code":"git push","description":"uploads all local branch commits to GitHub"},{"code":"git push [remote] [branch]","description":"\\"git push origin master\\" sends the master branch to the remote named origin on GitHub"},{"code":"git push -u [remote] [branch]","description":"set upstream tracking reference (links local and remote allowing argument-less commands such as git pull)"}]},{"name":"Git Pull","commands":[{"code":"git [remote] [branch]","description":"download the specified branch to local repository (Github > Local)"}]},{"name":"Git Fetch","commands":[{"code":"git fetch [remote]","description":"downloads all history from remote tracking branches"}]},{"name":"Git GC","commands":[{"code":"git gc","description":"manually run garbage collection process"}]}]')},function(e,t,o){e.exports=o(11)},,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var i=o(0),n=o.n(i),c=o(2),r=o.n(c),a=(o(9),o(10),function(e){var t=e.code,o=e.description;return n.a.createElement("div",{className:"command"},n.a.createElement("div",{className:"command-code"},n.a.createElement("code",null,t)),n.a.createElement("div",{className:"command-descrip"},n.a.createElement("p",null,o)))}),s=function(e){var t=e.name,o=e.commands;return n.a.createElement("section",{id:t.toLowerCase().replace(/ /g,"-"),className:"command-group"},n.a.createElement("h2",null,t),n.a.createElement("div",null,o.map((function(e,t){return n.a.createElement(a,Object.assign({key:t},e))}))))};var d=function(e){var t=e.commandData;return n.a.createElement("div",{className:"app"},n.a.createElement("header",{className:"app-header"},n.a.createElement("h1",null,"Git Helper")),n.a.createElement("div",{className:"commands"},t.map((function(e,t){return n.a.createElement(s,Object.assign({key:t},e))}))))},m=o(3);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(d,{commandData:m}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.dcf0fbbc.chunk.js.map