;(function () {

  var cont = $('#cont');
  var collection = '';

  // Get File
  $.getJSON('data/subcategories.json', function (res) {

    res.forEach( function (cat) {

      collection += '<a target="_blank" href="http://www.netflix.com/browse/genre/' + cat.id + '" class="collection-item">';
      collection += '<span class="filter-title">' + cat.title + '</span></a>';

      cat.subs.forEach( function (sub) {
        collection += '<a target="_blank" href="http://www.netflix.com/browse/genre/' + sub.id + '" class="collection-item sub-category">';
        collection += '<span class="filter-title">' + sub.title + '</span><span class="sub-of">' + cat.title + '</span></a>';
      });

    });

    cont.append(collection);

    // Filter Starter
    $('#search').instaFilta({
      targets: '.filter-title',
      sections: '.collection-item',
      markMatches: true
    });

  });

  // Get All Movies
  var cont2 = $('#cont2');
  var allCollection = '';
  $.getJSON('data/categories.json', function (res) {

    res.forEach( function (cat) {

      allCollection += '<a target="_blank" href="http://www.netflix.com/browse/genre/' + cat.id + '" class="collection-item sub-category">' + cat.name + '</a>';

    });

    cont2.append(allCollection);

  });

}());