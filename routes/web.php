<?php

use Inertia\Inertia;
use Illuminate\Auth\Events\Login;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\PageController;
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
Route::get('/dpo', [PageController::class, 'edpo'])->name('edpo');
Route::get('/tertangkap', [PageController::class, 'tertangkap'])->name('tertangkap');

Route::get('/login', [PageController::class, 'login'])->name('login');
Route::post('/login', [LoginController::class, 'login']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/super', [SuperController::class, 'index'])->name('superdashboard');
    Route::get('/super/add-admin', [SuperController::class, 'addAdmin'])->name('superaddadmin');
    Route::post('/super/add-admin', [SuperController::class, 'store_admin']);

    Route::get('/super/edit-admin/{user:id}', [SuperController::class, 'editAdmin'])->name('supereditadmin');
    Route::post('/super/edit-admin/{user:id}', [SuperController::class, 'updateAdmin']);
    Route::post('/super/edit-admin/{user:id}/password', [SuperController::class, 'updatePassword']);
    Route::post('/super/{user:id}/delete', [SuperController::class, 'deleteAdmin']);


    Route::get('/super/edpo', [SuperController::class, 'edpo'])->name('superedpo');

    Route::post('/logout', [LoginController::class, 'logout'])->name('logout');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// require __DIR__ . '/auth.php';