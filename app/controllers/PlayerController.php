<?php

class PlayerController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return Player::paginate(10);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store()
    {
        $player = new Player;
        $player->name = Input::get('name');
        $player->team = Input::get('team');
        $player->position = Input::get('position');
        $player->number = Input::get('number');
        $player->college = Input::get('college');
        $player->experience = Input::get('experience');
        $player->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return Response
     */
    public function show($id)
    {
        return Player::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int $id
     * @return Response
     */
    public function update($id)
    {
        // store
        $player = Player::find($id);
        $player->name = Input::get('name');
        $player->team = Input::get('team');
        $player->position = Input::get('position');
        $player->number = Input::get('number');
        $player->college = Input::get('college');
        $player->experience = Input::get('experience');
        $player->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return Response
     */
    public function destroy($id)
    {
        Player::destroy($id);
    }
}