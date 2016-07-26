(function(){

  angular.module('lists')
    .component('listComponent', {
      template: `
        <div>
          <h3>{{$ctrl.listObj.name}} <span ng-click="$ctrl.addingTask = !$ctrl.addingTask">Toggle Add Task Form</span></h3>
          <div ng-if="$ctrl.addingTask">
            <form ng-submit="$ctrl.addTask($ctrl.newTask)">
            <input ng-model="$ctrl.newTask.name"/>
            <button type="submit">+</button>
            </form>
          </div>
          <div ng-repeat="task in $ctrl.listObj.tasks">
            <button ng-click="$ctrl.removeTask(task)">X</button>
            <task-component  task-obj="task"></task-component>
          </div>

        </div>
      `,
      controller: ListController,
      bindings: {
        listObj: '<'
      }
    })

    ListController.$inject = ['EsService']

    function ListController(EsService) {
      var $ctrl = this;

      $ctrl.removeTask = function(task){
        EsService.removeTask($ctrl.listObj.id,task);
      }

      $ctrl.addTask = function(task){
        EsService.createTask($ctrl.listObj.id, task);
        $ctrl.newTask = {};
      }
    }

}())