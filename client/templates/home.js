Template.home.created = function(){
	console.log('Created the home template');
};

Template.home.rendered = function(){
	console.log('Rendered the home template');
    
};

Template.home.destroyed = function(){
	console.log('Destroyed the home template');
};

Template.home.helpers({
	exampleHelper: function(){
	//	return 'This text came from a helper with some <strong>HTML</strong>.';
	// if you use the version below, you can change the triple stache with two {{exampleHelper}} in your home.html
	return new Spacebars.SafeString('This text came from a helper with some <strong>HTML</strong>.');
	},

	// Setting the data context for a template
	dataContextHelper: function(){
		return {
			someText: 'This data was set using a helper of the parent template.',
			someNested: {
				text: 'That comes from "someNested.text"'
			}
		};
	},
    
    postsList: function(){
        return [
            {
                title: 'My Second Entry',
                description: 'Borem sodum color sit amet, consetetur sadipscing elitr.',
                author: 'Fabian Vogelsteller',
                timeCreated: moment().subtract(7,'days').unix()
            },
            
            {
                title: 'My First Entry',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
                author: 'Fabian Vogelsteller',
                timeCreated: moment().subtract(7,'days').unix()
            }
        ];
    }
});

