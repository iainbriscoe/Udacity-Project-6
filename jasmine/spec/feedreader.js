$(function() {
    describe('RSS Feeds', function() {
         //checks that RSS feeds list is defined 
         //checks that there is atleast one defined feed item 
        it('are defined', function() {    
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        //checks that each feed items' URL is defined
        //checks that there is content within each URL string
         it('has URL', function(){
            allFeeds.forEach(function(feedItem){
                expect(feedItem.url).toBeDefined();
                expect(feedItem.url.length).not.toBe(0);
            }); 
         });
         //checks that each feed item has a name defined 
         //checks that there is content within each name string
        it('has name', function(){
            allFeeds.forEach(function(feedItem){
                expect(feedItem.name).toBeDefined();
                expect(feedItem.name.length).not.toBe(0);
            });
        });
    });

    describe('The menu', function() {
        //reference the menu element
        var menu = document.getElementById('menu');
        //reference to clickable menu link 
        var menuLink = document.getElementById('menu-icon-link');

        //checks that the body has the class menu-hidden applied to it meaning menu will be hidden 
        it('Menu Hidden', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);  
        });
        //triggers a click event on the menu, checks to see if the menu is visible 
        //triggers another click event, checks to see if the menu is hidden 
        it('Hide/Show Menu', function(){
            //click to show
            $(menuLink).trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false); 
            //click to hide
            $(menuLink).trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true); 
        });
    }); 
    
    describe('Initial Entries', function() {
        //ensure loadFeed has been run on the first element before checking - async
        beforeEach(function(done){
            loadFeed(0, function(){
                done(); 
            });
        });
        //checks to see that there are aricles displayed on the page 
        it('load feed completes work', function(){
            var articlesCount = $('.entry').length;
            expect(articlesCount).not.toBe(0);
        });
    }); 
    
    describe('New Feed Selection', function() {
        //save current state of list entries 
        var currentEntryList = $('.entry'); 
        //ensure loadFeed has been run on the second element before checking - async
        beforeEach(function(done){
            loadFeed(1, function(){
                done(); 
            });
        });
        //checks to see that $('.entry') contains new content
        it('Load Feed content Changes', function(){
            expect($('.entry')).not.toBe(currentEntryList);
        });
    }); 
}());
