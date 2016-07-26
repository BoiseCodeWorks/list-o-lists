(function() {
  
  angular.module('lists')
    .service('EsService', function(){

      var lists = {

      };

      var i = 500;
      function assignId(){
        i++;
        return i;
      }

      this.getLists = function(){
        return lists;
      }

      this.createList = function(list){
        list.id = assignId();
        list.tasks = [];
        lists[list.id] = list;
      }

      this.removeList = function(listId){
        if(!lists[listId]){
          console.error('SoRRY BAD ID, you are lame and I don\'t like you.')
        }
        delete lists[listId]
      }

      this.createTask = function(listId, task){
        if(!lists[listId]){
          console.error('SoRRY BAD ID, you are lame and I don\'t like you.')
        }
        lists[listId].tasks.push(task);
      }

      this.removeTask = function(listId, task){
        if(!lists[listId]){
          console.error('SoRRY BAD ID, you are lame and I don\'t like you.')
        }
        var i = lists[listId].tasks.indexOf(task);
        lists[listId].tasks.splice(i, 1);
      }

    })

}())