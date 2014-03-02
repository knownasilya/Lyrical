/**
 * SongController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  index: function (req, res) {
    Song.find().then(function (songs) {
      res.json({ songs: songs });
    });
  },
  
  search: function (req, res) {
    Song.find({ title: req.query.title }).then(function (songs) {
      return res.json({ songs: songs });
    }, function (error) {
      return res.send(error, 500);
    });
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to SongController)
   */
  _config: {}

    
};
