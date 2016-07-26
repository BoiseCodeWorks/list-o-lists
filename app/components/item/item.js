(function(){

  angular.module('lists')
    .component('taskComponent', {
      template: `<h5>{{$ctrl.taskObj.name}}</h5>`,
      controller: ItemController,
      bindings: {
        taskObj: '<'
      }
    })

    function ItemController() {
      
    }

}())