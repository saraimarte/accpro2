var grid1 = new Muuri('.grid-1', {
    dragEnabled: true,
    dragContainer: document.body,
    dragSort: function () {
    return [grid1, grid2, grid3]
    }
  });
  
  var grid2 = new Muuri('.grid-2', {
    dragEnabled: true,
    dragContainer: document.body,
    dragSort: function () {
    return [grid1, grid2, grid3]
    }
  });

    
  var grid3 = new Muuri('.grid-3', {
    dragEnabled: true,
    dragContainer: document.body,
    dragSort: function () {
      return [grid1, grid2, grid3]
    }
  });

  