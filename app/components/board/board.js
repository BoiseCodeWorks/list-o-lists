(function(){

  angular.module('lists')
    .component('boardComponent', {
      template: `
        <div>
          <h1>THE BOARD <span ng-click="$ctrl.addingList = !$ctrl.addingList">Toggle Add List Form</span></h1>
          <div ng-if="$ctrl.addingList">
            <form ng-submit="$ctrl.addList($ctrl.newList)">
            <input ng-model="$ctrl.newList.name"/>
            <button type="submit">+</button>
            </form>
          </div>
          <div ng-repeat="list in $ctrl.lists">
            <button ng-click="$ctrl.removeList(list)">X</button>
            <list-component list-obj="list"></list-component>  
          </div>
        </div>
      `,
      controller: BoardController
    })

    BoardController.$inject = ['EsService']

    function BoardController(EsService) {
      var $ctrl = this;
      $ctrl.lists = EsService.getLists();
      $ctrl.addingList = false;

      $ctrl.removeList = function(list){
        EsService.removeList(list.id);
      }

      $ctrl.addList = function(list){
        EsService.createList(list);
        $ctrl.newList = {};
      }

    }

}())