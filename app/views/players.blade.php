<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Ben Bjurstrom: CRUD Test</title>
        <meta name="description" content="Task is to make a CRUD app using laravel.">


        <link rel="stylesheet" href="<?= URL::to('/') ?>/assets/css/style.css"/>
        <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet">
        <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">
    </head>
    <body>
        @include('navbar')

        <div class="container">
            <!-- will be used to show any messages -->
            @if (Session::has('message'))
            <div class="alert alert-info">{{ Session::get('message') }}</div>
            @endif
            <div class="row">
                <div class="col-md-6">
                    <ul id="page"></ul>
                </div>
                <div class="col-md-6">
                    <a class="btn btn-small btn-success pull-right"
                           href="#" onclick="newPlayer()">+ Add Player</a>
                </div>
            </div>

            <table class="table table-striped table-bordered">
                <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Team</td>
                    <td>Position</td>
                    <td>number</td>
                    <td>College</td>
                    <td>Years</td>
                    <td>Edit</td>
                </tr>
                </thead>
                <tbody id="target">

                </tbody>
            </table>
        </div>


        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
        <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
        <script src="http://twitter.github.com/hogan.js/builds/2.0.0/hogan-2.0.0.js"></script>
        <script src="{{ URL::to('assets/js/bootstrap-paginator.min.js') }}"></script>
        <script src="{{ URL::to('assets/js/app.js') }}"></script>
    </body>
</html>