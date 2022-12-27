import { Download } from "@mui/icons-material";
import React from "react";

const DownloadApp = () => {
  return (
    <div>
      <div className="hero bg-base-200 md:max-w-[90%] my-7 mx-auto w-full px-2">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/DwXLryT/phone.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-3xl font-bold">Download app form </h1>
            <p>
              Downloading is the transmission of a file or data from one
              computer to another over a network, usually from a larger server
              to a user device. Download can refer to the general transfer of
              data or to transferring a specific file. It can also be called to
              download, DL or D/L. All internet use requires downloading data.
            </p>
            <img
              src="https://i.ibb.co/dL7YtPD/store-removebg-preview-1.png"
              className="md:max-w-[40%] max-w-[50%] py-4"
              alt=""
            />
            <button className="btn btn-primary">
              Get Download <Download />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
