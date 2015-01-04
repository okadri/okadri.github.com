OkProjects.directive("slideBg", this.slideBg = function($compile) {
  return {
    restrict: 'C',
    link: function(scope, element, attrs) {

      element.append($compile('<span class="glyphicon glyphicon-th-list toc" aria-hidden="true" ng-click="goToToc()"></span>')(scope));

      scope.goToToc = function () {
        $("html, body").animate(
          { scrollTop: "0px" },
          function() {
            $("#project-carousel").carousel(0);
            setTimeout(function(){
              var slides = $('.section0 .slide-bg');
              var top_margin = parseInt($('.slide-bg').css('margin-top').replace("px", ""));
              $("html, body").animate(
                { scrollTop: $(slides[1]).offset().top - top_margin + "px" }
              );
            }, 800); 
          }
        );
      }

    }
  }
})