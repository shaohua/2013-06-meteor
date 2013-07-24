Users = new Meteor.Collection("users");
Questions = new Meteor.Collection("questions");
Answers = new Meteor.Collection("answers");

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to qa.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

  Template.user.events({
    'click .add_user' : function (){
      var new_user_name = $('.new_user_name').val();
      Users.insert({name:new_user_name});
      console.log(Users.find().fetch());
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
