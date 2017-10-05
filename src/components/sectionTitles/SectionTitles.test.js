import React from "react";
import { shallow } from "enzyme";
import SectionTitles from "./SectionTitles";
import "../../../test/setupTests";

describe("<SectionTitles />", () => {
  it("renders without error", () => {
    const component = shallow(<SectionTitles title="Example Title" />);
    expect(true).toEqual(true);
  });

  it("renders one div", () => {
    const component = shallow(<SectionTitles title="Example Title" />);
    expect(component.find("div")).toHaveLength(1);
  });

  it("renders div with correct class", () => {
    const component = shallow(<SectionTitles title="Example Title" />);
    expect(component.find("div").hasClass("title-holder")).toEqual(true);
  });

  it("renders six image tags", () => {
    const component = shallow(<SectionTitles title="Example Title" />);
    expect(component.find("img")).toHaveLength(6);
  });

  it("renders one span", () => {
    const component = shallow(<SectionTitles title="Example Title" />);
    expect(component.find("span")).toHaveLength(1);
  });

  it("renders span with correct text", () => {
    const component = shallow(<SectionTitles title="Example Title" />);
    expect(component.find("span").text()).toEqual("Example Title");
  });
});
