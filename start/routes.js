'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route');
const Database = use('Database');

Route.on('/').render('welcome');

Route.get('game', 'GameController.render');

Route.get('posts', async() => {
  return await Database.table('blog_posts').select('*');
});
