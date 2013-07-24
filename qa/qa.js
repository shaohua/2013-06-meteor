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

  Template.user.current_user = function () {
    var user = Users.findOne(Session.get("current_user"));
    return user && user.name;
  };

  Template.user.events({
    'click .add_user' : function (){
      var new_user_name = $('.new_user_name').val();
      Users.insert(
        {name:new_user_name},
        function(error, result){
          if(error){
            console.log("Error inserting: ", error);
          } else {
            console.log(result, result._id);
            Session.set("current_user", result);
            console.log(Session.get("current_user"));
          }
        }
      );
      console.log(Users.find().fetch());
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
