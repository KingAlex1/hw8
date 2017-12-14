import React from "react";
import { AppRouter }   from "../../AppRouter";
import PrivateRoute from "../../PrivateRoute";
import { shallow, mount, render } from "enzyme";
import { Switch } from "react-router";



describe("Component AppPouter", () => {
    const isAuthorized = true;
    const IsNetworkErrorPresent = false;
    const NetworkError = false;
    const users = { isFetched: false };
    const wrapper = shallow(
        <AppRouter
          isAuthorized={isAuthorized}
          IsNetworkErrorPresent={IsNetworkErrorPresent}
          NetworkError={NetworkError}
          users={users}
        />)
  
    describe("Existence inner components ", () => {
        
      it("Наличие Switch", () => {
        
        expect(wrapper.find(Switch)).toHaveLength(1);
      });
  
      it("наличие компоненты <PrivateRoute path='/user/:name'", () => {
        const component = wrapper.findWhere(
          n => n.props().path === "/user/:name"
        );
        expect(component.is(PrivateRoute)).toBeTruthy();
      });
  
      it("наличие комполненты <Route path='/login' ", () => {
        const component = wrapper.findWhere(item => item.props().path === "/user/me");
        expect(component.is(PrivateRoute)).toBeTruthy();
      });
  
      it("Выводить кнопку logout если props.isAuthorized === true", () => {
        const newProps = {
          isAuthorized: true,
          users: {
            isFetched: true
          }
        };
        wrapper.setProps(newProps);
        expect(wrapper.find(".logout")).toHaveLength(1);
      });

      it("If props.IsNetworkErrorPresent===true and props.users.isFetched === true, error is exist", () => {
        const newProps = {
          IsNetworkErrorPresent: true,
          NetworkError: "Error"
        };
        wrapper.setProps(newProps);
        expect(wrapper.find(".network-error")).toHaveLength(1);
      });
    });
  });