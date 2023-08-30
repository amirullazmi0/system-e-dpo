<?php

use Inertia\Inertia;
use Illuminate\Auth\Events\Login;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\PageController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\SuperController;
use App\Http\Controllers\ProfileController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [PageController::class, 'index'])->name('home');
Route::get('/edpo', [PageController::class, 'edpo'])->name('edpo');
Route::get('/edpo/{edpo:id}', [PageController::class, 'detailEdpo']);
Route::get('/tertangkap', [PageController::class, 'tertangkap'])->name('tertangkap');
Route::get('/tertangkap/{edpo:id}', [PageController::class, 'detailTertangkap']);

Route::get('/login', [PageController::class, 'login'])->name('login');
Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout'])->name('logout');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'super'])->group(function () {
    Route::get('/super', [SuperController::class, 'index'])->name('superdashboard');
    Route::get('/super/add-admin', [SuperController::class, 'addAdmin'])->name('superaddadmin');
    Route::post('/super/add-admin', [SuperController::class, 'store_admin']);

    Route::get('/super/edit-admin/{user:id}', [SuperController::class, 'editAdmin'])->name('supereditadmin');
    Route::post('/super/edit-admin/{user:id}', [SuperController::class, 'updateAdmin']);
    Route::post('/super/edit-admin/{user:id}/password', [SuperController::class, 'updatePassword']);
    Route::post('/super/{user:id}/delete', [SuperController::class, 'deleteAdmin']);


    Route::get('/super/edpo', [SuperController::class, 'edpo'])->name('superedpo');
    Route::get('/super/add-edpo', [SuperController::class, 'addEdpo'])->name('super-add-edpo');
    Route::post('/super/add-edpo', [SuperController::class, 'storeEdpo']);

    Route::get('/super/edit-edpo/{edpo:id}', [SuperController::class, 'editEdpo'])->name('supereditedpo');
    Route::post('/super/edit-edpo/{edpo:id}', [SuperController::class, 'updateEdpo']);
    Route::post('/super/edpo/{edpo:id}/delete', [SuperController::class, 'deleteEdpo']);

    Route::get('/super/edpo/detail/{edpo:id}', [SuperController::class, 'detailEdpo']);

    Route::get('/super/tertangkap', [SuperController::class, 'tertangkap'])->name('supertertangkap');
    Route::get('/super/tertangkap/detail/{edpo:id}', [SuperController::class, 'detailTertangkap']);
    Route::post('/super/add-tertangkap/{edpo:id}', [SuperController::class, 'addTertangkap']);
    Route::post('/super/move-tertangkap/{edpo:id}', [SuperController::class, 'moveTertangkap']);

    // ADMIN
});

Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin', [AdminController::class, 'index'])->name('admin-edpo');
    Route::get('/admin/add-edpo', [AdminController::class, 'addEdpo'])->name('admin-add-edpo');
    Route::post('/admin/add-edpo', [AdminController::class, 'storeEdpo']);

    Route::get('/admin/edit-edpo/{edpo:id}', [AdminController::class, 'editEdpo']);
    Route::post('/admin/edit-edpo/{edpo:id}', [AdminController::class, 'updateEdpo']);
    Route::post('/admin/edpo/{edpo:id}/delete', [AdminController::class, 'deleteEdpo']);

    Route::get('/admin/edpo/detail/{edpo:id}', [AdminController::class, 'detailEdpo']);

    Route::get('/admin/tertangkap', [AdminController::class, 'tertangkap'])->name('admin-tertangkap');
    Route::get('/admin/tertangkap/detail/{edpo:id}', [AdminController::class, 'detailTertangkap']);
    Route::post('/admin/add-tertangkap/{edpo:id}', [AdminController::class, 'addTertangkap']);
    Route::post('/admin/move-tertangkap/{edpo:id}', [AdminController::class, 'moveTertangkap']);
});
// require __DIR__ . '/auth.php';