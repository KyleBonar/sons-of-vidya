import React from "react";
import { shallow } from "enzyme";
import SocialButtons from "./SocialButtons";
import "../../../test/setupTests";

describe("<SocialButtons />", () => {
  it("renders without crashing", () => {
    const component = shallow(<SocialButtons id="idHere" />);
    expect(true).toEqual(true);
  });

  it("renders single div", () => {
    const component = shallow(<SocialButtons id="idHere" />);
    expect(component.find("div")).toHaveLength(1);
  });

  it("renders correct id", () => {
    const component = shallow(<SocialButtons id="idHere" />);
    expect(component.find("div").getElement().props.id).toEqual("idHere");
  });

  it("renders four anchor tags", () => {
    const component = shallow(<SocialButtons id="idHere" />);
    expect(component.find("a").length).toEqual(4);
  });

  it("renders four image tags", () => {
    const component = shallow(<SocialButtons id="idHere" />);
    expect(component.find("img")).toHaveLength(4);
  });
});
