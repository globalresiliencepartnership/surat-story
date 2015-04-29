/*global Grp, Backbone*/
Grp.Views = Grp.Views || {};

(function () {
'use strict';

  Grp.Views.Sidebar = Backbone.View.extend({

    el: '#sidebar',

    template: JST['sidebar.ejs'],

    events: {
      'click #nav-up' : 'navUpBtnClick',
      'click #nav-prev' : 'navPrevBtnClick',
      'click #nav-next' : 'navNextBtnClick',
      'click #nav-about' : 'navAboutBtnClick',
      'click .flood-guage li a' : 'navFloodGuageClick'
    },

    data: null,

    initialize: function() {
    },

    setData: function(data) {
      // Prepare partners.
      var partners = data.partnerslocal.split('; ');
      this.data = data;
      this.data.partners = partners;

      return this;
    },

    render: function() {
      console.log('sidebar data', this.data);
      this.$el.find('.project').html(this.template(this.data));
      this.$el.addClass('revealed');
      this.$el.find('.project-cntrl').addClass('revealed');
      return this;
    },

    ///////////////////////////////////
    /// Event listeners
    
    navUpBtnClick: function(e) {
      e.preventDefault();
      this.$el.find('.project-cntrl').removeClass('revealed');
      this.trigger('nav:up');
    },

    navPrevBtnClick: function(e) {
      e.preventDefault();
      this.trigger('nav:prev');
    },

    navNextBtnClick: function(e) {
      e.preventDefault();
      this.trigger('nav:next');
    },
    
    navAboutBtnClick: function(e) {
      e.preventDefault();
      this.trigger('nav:about');
    },
    
    navFloodGuageClick: function(e) {
       e.preventDefault();
      this.trigger('nav:flood');
    }

  });

})();