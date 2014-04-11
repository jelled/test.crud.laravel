/**
 * Created by Ben Bjurstrom on 4/10/14.
 */

/*
 | -------------------------------------------------------------------
 | Document ready
 | -------------------------------------------------------------------
 */
$(document).ready(function () {
    loadPage();

    window.setTimeout(function () {
        $(".alert").fadeTo(500, 0).slideUp(500, function () {
            $(this).remove();
        });
    }, 1000);
});

/*
 | -------------------------------------------------------------------
 | Setup our templates
 | -------------------------------------------------------------------
 */
var modelTemplateRaw =
    '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
        <div class="modal-dialog">\
            <div class="modal-content">\
                <div class="modal-header">\
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
                    <h4 class="modal-title">{{ title }}</h4>\
                </div>\
                <div class="modal-body">\
                    <form id="modalForm" role="form">\
                        <div class="form-group">\
                            <label for="name">Name</label>\
                            <input type="text" name="name" value="{{ name }}" class="form-control" id="name">\
                            </div>\
                            <div class="form-group">\
                                <label for="team">Team</label>\
                                <input type="text" name="team" value="{{ team }}" class="form-control" id="team">\
                            </div>\
                            <div class="form-group">\
                                <label for="position">Position</label>\
                                <input type="text" name="position" value="{{ position }}" class="form-control" id="position">\
                            </div>\
                            <div class="form-group">\
                                <label for="number">Number</label>\
                                <input type="text" name="number" value="{{ number }}" class="form-control" id="number">\
                            </div>\
                            <div class="form-group">\
                                <label for="college">College</label>\
                                <input type="text" name="college" value="{{ college }}" class="form-control" id="college">\
                            </div>\
                            <div class="form-group">\
                            <label for="years">Years</label>\
                            <input type="text" name="experience" value="{{ experience }}" class="form-control" id="experience">\
                        </div>\
                        <input type="hidden" name="id" id="id" value="{{ id }}"/>\
                        <input type="hidden" name="action" id="action" value="{{ action }}"/>\
                    </form>\
                </div>\
                <div class="modal-footer">\
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
                    <button id="save" type="button" class="btn btn-primary">Save</button>\
                </div>\
            </div>\
        </div>\
    </div>';





var dataTemplateRaw =
    '<tr class="player-{{ id }}">\
        <td>{{ id }}</td>\
        <td>{{ name }}</td>\
        <td>{{ team }}</td>\
        <td>{{ position }}</td>\
        <td>{{ number }}</td>\
        <td>{{ college }}</td>\
        <td>{{ experience }}</td>\
        <td>\
            <a class="btn btn-small btn-primary" onclick="editPlayer({{ id }})" href="#">Edit</a>\
            <a class="btn btn-small btn-danger" onclick="deleteRequest({{ id }})" href="#">Delete</a>\
    </td>\
</tr>';
var dataTemplate = Hogan.compile(dataTemplateRaw);
var modalTemplate = Hogan.compile(modelTemplateRaw);

/*
 | -------------------------------------------------------------------
 | Functions
 | -------------------------------------------------------------------
 */

function saveForm(){
    var data = new Object();
    data.id         = $('#id').val();
    data.name       = $('#name').val();
    data.team       = $('#team').val();
    data.position   = $('#position').val();
    data.number     = $('#number').val();
    data.college    = $('#college').val();
    data.experience = $('#experience').val();
    var action      = $('#action').val();

    if(action == 'post'){
        $.ajax({
            type: "POST",
            url: 'players',
            data: data,
            success: function (response) {
                location.reload();
            }
        });
    }

    if (action == 'put'){
        $.ajax({
            type: "PUT",
            url: 'players/' + data.id,
            data: data,
            success: function (response) {
                location.reload();
            }
        });
    }

}

/*
 * Opens the new player model
 * */
function newPlayer(){
    var data = new Object();
    data.action = 'post';
    data.title = "Create new player";
    $('#myModal').remove();
    var modal = modalTemplate.render(data);
    $("body").append(modal)
    $("#save").bind("click", function () {
        saveForm();
    });
    $('#myModal').modal('show');
}

/*
 * Opens the edit player model
 * */
function editPlayer(id){
    $('#myModal').remove();
    var myTr = [];
    $('.player-' + id).find('td').each(function () {
        myTr.push($(this).text());
    });

    var data = new Object();
    data.id = myTr[0];
    data.name = myTr[1];
    data.team = myTr[2];
    data.position = myTr[3];
    data.number = myTr[4];
    data.college = myTr[5];
    data.experience = myTr[6];
    data.action = 'put';
    data.title = 'Edit player';

    var modal = modalTemplate.render(data);

    $("body").append(modal);
    $("#save").bind("click", function () {
        saveForm();
    });
    $('#myModal').modal('show');
}


/*
 * Loads the AJAX player data into the table
 * */
function loadPage(page) {

    var url = 'players';
    if(page) url = url + '?page=' + page;

    $.ajax({
        type: "GET",
        url: url,
        success: function (response) {
            var target = $('#target');

            for (i = 0; i < response.data.length; ++i) {
                target.append(dataTemplate.render(response.data[i]));
            }


            var options = {
                currentPage: response.current_page,
                totalPages: response.last_page,
                bootstrapMajorVersion:3,
                onPageClicked: function (e, originalEvent, type, page) {
                    target.empty()
                    loadPage(page);
                }
            }

            $('#page').bootstrapPaginator(options);
        }
    });
}

/*
 * Makes a delete request
 * */
function deleteRequest(id) {
    $.ajax({
        type: "DELETE",
        url: 'players/' + id,
        success: function () {
            $('.player-' + id).fadeOut(1000, function () {
                $('.player-' + id).remove();
            });
        }
    });
}


