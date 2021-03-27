import React from "react";
import Preloader from "../preloader/preloader";
import ErrorRequest from "../errorRequest/errorRequest";
import { connect } from "react-redux";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import {
  detailsPockemon,
  enterApp,
} from "../../redux/asyncActionCreators/acyncActionCreators";

const PockemonDetails = (props) => {
  const { detailsPockemon, loading, errorRequest, pockemon, enterApp } = props;

  useEffect(() => {
    detailsPockemon(props.match.params.id);
  }, []);
  if (loading || !pockemon) return <Preloader />;
  const app = errorRequest ? (
    <ErrorRequest />
  ) : (
    <div className="container">
      <button
        onClick={() => {
          props.history.push("/");
          enterApp();
        }}
        type="button"
        className="btn btn-success"
      >
        Вернутся к списку
      </button>
      <button
        onClick={() => detailsPockemon(props.match.params.id)}
        type="button"
        className="btn btn-success"
      >
        Обновить
      </button>
      <div className="card">
        <img
          src={pockemon.imageUrlHiRes}
          className="card-img-top"
          alt="картинка"
        />
        <div className="card-body">
          <h5 className="card-title">Имя :{pockemon.name}</h5>
          <h6 className="card-title">Артист: {pockemon.artist}</h6>
          <p className="card-text">id: {pockemon.id}</p>
          <p className="card-text">hp: {pockemon.hp}</p>
        </div>
      </div>
    </div>
  );
  return app;
};

function mapStateToProps(state) {
  return {
    loading: state.loading,
    errorRequest: state.errorRequest,
    pockemon: state.detailsPockemon,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    detailsPockemon: (id) => dispatch(detailsPockemon(id)),
    enterApp: () => dispatch(enterApp()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PockemonDetails));
