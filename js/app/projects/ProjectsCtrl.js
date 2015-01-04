OkProjects.controller('ProjectsCtrl', this.ProjectsCtrl = function($scope) {
  $scope.slides = [
    'welcome',
    'messenger',
    'chekhov',
    'wayfinding',
    'dw',
    'ipa',
    'abjad',
    'ashkal',
    'qamoosi',
    'leasemiles',
    'dinner',
    'conclusion'
  ];

  $scope.goToSlide = function (number) {
    $("body").animate(
      { scrollTop: "0px" },
      function() {
        $("#project-carousel").carousel(number);
      }
    );
  }
});
