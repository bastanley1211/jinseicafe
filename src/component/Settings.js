import React from "react";
import { Form } from "reactstrap";

function Settings(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mb-3">Application Settings</h1>
          </div>
        </div>
        <div className="row mx-auto">
          <div className="col mx-auto">
            <h2>Notifications</h2>
          </div>
          <div className="col my-2 mx-auto">
            <Form>
              <input type="checkbox" name="emailNotif" id="emailNotif"></input>
              <label for="emailNotif">Email</label>
              <br />
              <input type="checkbox" name="emailNotif" id="emailNotif"></input>
              <label for="emailNotif">Text</label>
              <br />
              <input type="checkbox" name="emailNotif" id="emailNotif"></input>
              <label for="emailNotif">Push</label>
              <br />
            </Form>
          </div>
        </div>
        <div className="row my-3 mx-auto">
          <div className="col mx-auto">
            <h2>Color Mode</h2>
          </div>
          <div className="col mx-auto">
            <select>
              <option>Dark Mode</option>
              <option>Light Mode</option>
              <option>B&W Mode</option>
            </select>
          </div>
        </div>

        <div className="row my-3 mx-auto">
          <div className="col mx-auto">
            <h2>Privacy</h2>
          </div>
          <div className="col mx-auto">
            <Form>
              <input
                type="checkbox"
                name="strictProfile"
                id="strictProfile"
              ></input>
              <label for="strictProfile">
                <strong>Strict:</strong> can only add friends and not be added
                by others
              </label>
              <br />
              <input
                type="checkbox"
                name="privateProfile"
                id="privateProfile"
              ></input>
              <label for="privateProfile">
                <strong>Private:</strong> can only be added by phone number
              </label>
              <br />
              <input
                type="checkbox"
                name="publicProfile"
                id="publicProfile"
              ></input>
              <label for="publicProfile">
                <strong>Public:</strong> can be added by name search or phone
                number
              </label>
              <br />
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
