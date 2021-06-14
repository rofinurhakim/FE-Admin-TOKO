import React from "react";
import NoRecord from "../../assets/svg/no-data.svg";

function NoData() {
  return (
    <div className="jumbotron bg-white">
      <img
        src={NoRecord}
        alt=""
        className="img-fluid d-block mx-auto mb-3"
        style={{ width: 100 }}
      />
      <h3 className="text-center">No Records Found</h3>
    </div>
  );
}

export default NoData;