$(function() {
    describe('RSS Feeds', function() {
         //checks that RSS feeds list is defined 
         //checks that there is atleast one defined feed item 
        it('RSS Feed List Has been defined this is not an empty string', function() {    
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        //checks that each feed items' URL is defined
        //checks that there is content within each URL string
         it('Each RSS Feed item has a defined URL property that is not an empty string', function(){
            allFeeds.forEach(function(feedItem){
                expect(feedItem.url).toBeDefined();
                expect(feedItem.url.length).not.toBe(0);
            }); 
         });
         //checks that each feed item has a name defined 
         //checks that there is content within each name string
        it('Each RSS Feed item has a defined name property that is not an empty string', function(){
            allFeeds.forEach(function(feedItem){
                expect(feedItem.name).toBeDefined();
                expect(feedItem.name.length).not.toBe(0);
            });
        });
    });

    describe('The menu', function() {
        //reference to clickable menu link 
        var $menuLink = $('.menu-icon-link');
        //checks that the body has the class menu-hidden applied to it meaning menu will be hidden 
        it('When the page loads the menu on the left is hidden', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);  
        });
        //triggers a click event on the menu, checks to see if the menu is visible 
        //triggers another click event, checks to see if the menu is hidden 
        it('When the Menu button is clicked, the menu becomes visible. when the menu button is clicked again it is hidden', function(){
            //click to show
            $menuLink.trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false); 
            //click to hide
            $menuLink.trigger('click');
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
        it('The Feed loads on the page. The number of feeds that appear on the page is atleast one', function(){
            var articlesCount = $('.entry').length;
            expect(articlesCount).not.toBe(0);
        });
    }); 
    
    describe('New Feed Selection', function() {
        //ensure loadFeed has been run on the second element before checking - async
       	var currentEntryList; 
        beforeEach(function(done){
        	//save current state of list entries 
        	currentEntryList = $('.feed').text(); 
            loadFeed(1, function(){ 	
                done(); 
            });
        });
        it('When another RSS feed is selected from the menu the feed refreshes and shows different content', function(){
            expect($('.feed').text()).not.toBe(currentEntryList);
        });
    }); 
}());
