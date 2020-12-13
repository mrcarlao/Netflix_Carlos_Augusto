import React from "react";
import renderer from "react-test-renderer";
import Avatar from "../../components/Avatar";


test("Criando Component", () => {
    expect(renderer.create(<Avatar />)).toMatchSnapshot();

});