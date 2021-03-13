var person = {name: "", picture: ""}

//869168413863969
function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
    //location.replace('/index');
  }
  
  function statusChangeCallback(response) {
    console.log('Facebook login status changed.');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
            // Logged into your app and Facebook.
            console.log('Successfully logged in with Facebook');
            FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
            window.location.href = "/index";
    }
  }

  function changeUser(response) {
      console.log(response);

      person.name = response.name;
      person.picture = response.picture.data.url;

      // $('.facebookLogin').hide();
      // $('#username').text(response.name);
      // $('#profilepic').attr('src', response.picture.data.url)
  }