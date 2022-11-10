(() => {
    const app = angular.module('todo', []);

    app.controller('TodoCtrl', ['$scope', $scope => {
        $scope.todos = [
            {
                title: '요가수련',
                completed: false,
                createdAt: Date.now()
            },
            {
                title: '앵귤러 학습',
                completed: false,
                createdAt: Date.now()
            },
            {
                title: '운동하기',
                completed: true,
                createdAt: Date.now()
            }
        ];

        $scope.remove = todo => {
            const idx = $scope.todos.findIndex(item => {
                return item.id === todo.id;
            });

            if(idx > -1) {
                $scope.todos.splice(idx, 1);
            }
        }
    }]);
})();