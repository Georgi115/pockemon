import React from "react";
import Preloader from "../preloader/preloader";
import ErrorRequest from "../errorRequest/errorRequest";
import { useEffect } from "react";
import { enterApp } from "../../redux/asyncActionCreators/acyncActionCreators";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const ListPockemon = (props) => {
  const { enterApp, listPockemon, loading, errorRequest } = props;
  useEffect(() => enterApp(), []);
  if (loading) return <Preloader />;
  const app = errorRequest ? (
    <ErrorRequest />
  ) : (
    <div className="App container">
      <button
        onClick={() => {
          enterApp();
        }}
        type="button"
        className="btn btn-success"
      >
        Обновить
      </button>
      <ul>
        {listPockemon.allId.map((idx) => {
          return (
            <li
              key={idx}
              onClick={() => props.history.push(`/pockemon/details/${idx}`)}
            >
              <div className="card card-hover">
                <div className="card-body">
                  <p className="card-text">{listPockemon[idx].name}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
  return app;
};

function mapStateToProps(state) {
  return {
    listPockemon: state.listPockemon,
    loading: state.loading,
    errorRequest: state.errorRequest,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    enterApp: () => dispatch(enterApp()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ListPockemon));
