/*global Grp, Backbone*/
Grp.Views = Grp.Views || {};

(function () {
'use strict';

  Grp.Views.AboutModal = Backbone.View.extend({

    el: '#about',

    template: JST['about-modal.ejs'],

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html(this.template());

      this.$el.find('[data-hook="close-modal"]').on('click', this.hideModal.bind(this));
      return this;
    },

    showModal: function() {
      this.$el.find('.modal').addClass('revealed');
    },

    hideModal: function(e) {
      if (e) {
        e.preventDefault();
      }
      this.$el.find('.modal').removeClass('revealed');
    },

  });

})();