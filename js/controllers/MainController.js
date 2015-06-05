app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Science Manuals'; 
  $scope.promo = 'For your viewing pleasure';
  $scope.products = [
    { 
      name: 'Atomic Theory', 
      price: 'Free', 
      pubdate: new Date('2010', '01', '22'),
      url: 'books/atomicTheory.pdf',
      cover: 'images/atomicTheory.jpg' 
    }, 
    { 
      name: 'The Periodic Table', 
      price: 'Free', 
      pubdate: new Date('2010', '01', '22'),
      url: 'books/periodicTable.pdf', 
      cover: 'images/periodicTable.jpg' 
    },
    {
      name: 'Scientific Methods',
      price: 'Free',
      pubdate: new Date('2009', '07', '29'),
      url: 'books/scientificMethod.pdf',
      cover: 'images/scientificMethods.jpg'
    },
    {
      name: 'All About The Solar System',
      price: 'Free',
      pubdate: new Date('2009', '07', '29'),
      url: 'books/solarSystem.pdf',
      cover: 'images/solarSystem.jpg'
    }
  ]
}]); 
  