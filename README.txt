How to Successfully Run the Program. 

1. Launch the Index.html file in a web browser - preferably Google Chrome

2. On page load you will notice a page with the title CSS Tricks, a menu option next to it, and several RSS Feed items below it. 

3. At the bottom of the page you’ll notice the number of specs and the failures count

4. there is, in this case currently 7 specs, and 0 failures. all of the specs have been run. 

5. you can run individual specs by clicking on other headers 

-> are defined : checks to ensure RSS feeds exist in the file structure.
-> has URL : check to ensure each feed item has a defined URL that isn’t an empty string 
-> has name : checks to ensure each feed item has a defined name that isn’t an empty string 

-> Menu Hidden : ensures on page load the menu is hidden 
-> Hide/Show Menu : triggers a click event on the menu icon then checks to see that the menu is visible. It then triggers another click event on the menu icon to see that the menu has hidden itself again. 

-> load feeds completes work : waits until the feed loads on the page then checks to ensure there is at least 1 feed item. 

- Load feed content changes : loads a new feed from the menu list, waits for it to load then checks to see that it is different content from the last. 