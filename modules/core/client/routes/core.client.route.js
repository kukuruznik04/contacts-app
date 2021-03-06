'use strict';

angular
    .module('ContactsApp')
    .config(function ($stateProvider, $urlRouterProvider) {
        // $stateProvider, $urlRouterProvider coming from angular-ui-router

        $stateProvider
            .state('display', {
                url: '/display',
                templateUrl: 'modules/core/client/views/display.core.tpl.html'
            })
            .state('create', {
                url: '/create',
                templateUrl: 'modules/core/client/views/create.core.tpl.html'
            })
            .state('update', {
                url: '/update/:contactId',
                templateUrl: 'modules/core/client/views/update.core.tpl.html',
                resolve: {
                    contactId: function ($stateParams) {
                        return $stateParams.contactId;
                    }
                },
                controller: 'UpdateController'
            })
            .state('delete', {
                url: '/delete',
                templateUrl: 'modules/core/client/views/delete.core.tpl.html'
            })
            .state('table', {
                url: '/table',
                templateUrl: 'modules/core/client/views/table.core.tpl.html'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'modules/core/client/views/login.core.tpl.html'
            });

        $urlRouterProvider.otherwise('/login');

    })