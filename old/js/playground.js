// Get an Instagram API client.
var instagram = new Instagram("b358e59ac462441ab17ab1a0b03fbab8");

// Make sure the current user has been authenticated to Instagram.
// If the user is not authenticated, the browser will be redirected to
// Instagram's authentication page, then redirected back to this page.
if (!instagram.authenticate()) {
  return;
}

// Get the most recent images of the current user, preloaded.
instagram.getLikes('self', function (images) {
  for (var i = 0, len = images.length; i < len; i++) {
    var img = document.createElement('img');
    img.src = images[i].imageUrl;
    document.body.appendChild(img);
    console.log(img);
  }
}, true);
