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
      'click .flood-guage li a[data-layer="floodLayer1"]' : 'navFloodLayer1Click',
      'click .flood-guage li a[data-layer="floodLayer2"]' : 'navFloodLayer2Click',
      'click .flood-guage li a[data-layer="floodLayer3"]' : 'navFloodLayer3Click',
      'click .flood-guage li a[data-layer="floodLayer4"]' : 'navFloodLayer4Click',
      'click .context-layers li a[data-layer="satellite"]' : 'navSatelliteClick',
      'click .context-layers li a[data-layer="streets"]' : 'navStreetsClick',
      'click .context-layers li a[data-layer="zones"]' : 'navZonesClick'
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
    
    navFloodLayer1Click: function(e) {
       e.preventDefault();
       $(e.target).toggleClass('active');
      this.trigger('nav:flood1');
    },
    
    navFloodLayer2Click: function(e) {
       e.preventDefault();
       $(e.target).toggleClass('active');
      this.trigger('nav:flood2');
    },

    navFloodLayer3Click: function(e) {
       e.preventDefault();
       $(e.target).toggleClass('active');
      this.trigger('nav:flood3');
    },
    
    navFloodLayer4Click: function(e) {
       e.preventDefault();
       $(e.target).toggleClass('active');
      this.trigger('nav:flood4');
    },

    navSatelliteClick: function(e) {
       e.preventDefault();
       $(e.target).toggleClass('active');
      this.trigger('nav:satellite');
    },

    navStreetsClick: function(e) {
       e.preventDefault();
       $(e.target).toggleClass('active');
      this.trigger('nav:streets');
    },
    
    navZonesClick: function(e) {
       e.preventDefault();
       $(e.target).toggleClass('active');
      this.trigger('nav:zones');
    }


  });

})();