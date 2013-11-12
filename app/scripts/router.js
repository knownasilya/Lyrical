App.Router.map(function () {
  this.route('songs');  
  this.resource('song', { path: 'song/:song_id' }, function () {
    this.route('play');
  });
});
