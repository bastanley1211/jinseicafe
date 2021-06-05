import React from "react";
import { mainBody } from "./Style";
import { Form } from "reactstrap";

function Settings(props) {
  return (
    <>
      <div className="container" style={mainBody}>
        <div className="row">
          <div className="col-12">
            <h1 className="text-center my-3">Application Settings</h1>
          </div>
        </div>
        <div className="row mx-auto">
          <div className="col-12 text-center mx-auto">
            <h2>Notifications</h2>
          </div>
          <div className="col-12 my-2 mx-auto text-center">
            <Form>
              <input type="checkbox" name="emailNotif" id="emailNotif"></input>
              <label htmlFor="emailNotif"> Email</label>
              <br />
              <input type="checkbox" name="textNotif" id="textNotif"></input>
              <label htmlFor="textNotif"> Text</label>
              <br />
              <input type="checkbox" name="pushNotif" id="pushNotif"></input>
              <label htmlFor="pushNotif"> Push</label>
              <br />
            </Form>
          </div>
        </div>
        <div className="row my-3 mx-auto">
          <div className="col-12 text-center mx-auto mb-3">
            <h2>Color Mode</h2>
          </div>
          <div className="col-12 mx-auto text-center mb-3">
            <button className="btn btn-lg btn-light">Switch Mode</button>
          </div>
        </div>

        <div className="row my-3 mx-auto">
          <div className="col-12 mx-auto text-center">
            <h2>Privacy</h2>
          </div>
          <div className="col mx-auto text-center">
            <Form style={{ marginBottom: "60px" }}>
              <input
                type="checkbox"
                name="strictProfile"
                id="strictProfile"
              ></input>
              <label htmlFor="strictProfile">
                <strong>Strict:</strong> can only add friends and not be added
                by others
              </label>
              <br />
              <input
                type="checkbox"
                name="privateProfile"
                id="privateProfile"
              ></input>
              <label htmlFor="privateProfile">
                <strong>Private:</strong> can only be added by phone number
              </label>
              <br />
              <input
                type="checkbox"
                name="publicProfile"
                id="publicProfile"
              ></input>
              <label htmlFor="publicProfile">
                <strong>Public:</strong> can be added by name search or phone
                number
              </label>
              <br />
              <button className="btn btn-lh btn-secondary mt-5">
                Save Changes
              </button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
