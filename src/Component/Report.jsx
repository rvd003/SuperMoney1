import React from "react";
import "./Report.css";
import { AiOutlineHome } from "react-icons/ai";
import { ImRadioUnchecked } from "react-icons/im";
import { IoMdNotificationsOutline } from "react-icons/io";

const Report = () => {
  return (
    <div className="Container">
      <div className="Home">
        <b>
          <h5 style={{ marginTop: "20px" }}>
            SUPE<span style={{ color: "#A3C54C" }}>₹</span>MONEY
          </h5>
        </b>
        <div className="H">
          <div>
            <AiOutlineHome />
          </div>
          <div style={{ marginTop: "3px", color: "gray" }}>Home</div>
        </div>
      </div>
      <div className="Sample">
        <div className="img">
          <div className="InnerImg">
            <div>
              <IoMdNotificationsOutline />
            </div>
            <div style={{ fontSize: "10px" }}>
              Rohit Dhatrak
              <br />
              <p>Admin</p>
            </div>
            <div>
              <img
                style={{ borderRadius: "50%", height: "30px" }}
                src="https://avatars.githubusercontent.com/u/101614481?v=4"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* <br/> */}
        <h6>Loan Specific Report</h6>
        <div className="A">
          <div className="amt">
            <div className="Z">
              <h2 style={{ color: "blue" }}>5999000</h2>
              <p>Loan amount financed</p>
            </div>
            <div className="vr"></div>
            <div className="Z">
              <h2 style={{ color: "#A3C54C" }}>5999000</h2>
              <p>Disbursed Amount</p>
            </div>
          </div>
          <div className="age">
            Aging Bucket
            <div className="Inner">
              <div>
                <ImRadioUnchecked color="#A3C54C" />
                <p>Standard</p>
              </div>
              <div>
                <ImRadioUnchecked color="orange" />
                <p>doubtful</p>
              </div>
              <div>
                <ImRadioUnchecked color="blue" />
                <p>sub standard</p>
              </div>
              <div>
                <ImRadioUnchecked color="red" />
                <p>loss</p>
              </div>
            </div>
          </div>
        </div>
        <div className="B">
          <table class="table table-striped">
            <thead>
              <tr className="T">
                <th scope="col">Sr.No</th>
                <th scope="col">Supplier ID</th>
                <th scope="col">Retailer ID</th>
                <th scope="col">Loan ID</th>
                <th scope="col">Loan Status</th>
                <th scope="col">Loan Creater on</th>
                <th scope="col">Loan Disbursed on</th>
                <th scope="col">Loan Amount</th>
                <th scope="col">Disbursed Amount</th>
                <th scope="col">Ageing Bucket</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <th scope="row">12345678</th> */}
                <th scope="row">1</th>
                <td>12345678</td>
                <td>
                  <span>0123456789</span>
                </td>
                <td>10BHG00</td>
                <td style={{ color: "#A3C54C" }}>Approved</td>
                <td>16 nov 2022</td>
                <td>17 nov 2022</td>
                <td>100000</td>
                <td>200000</td>
                <td>
                  <ImRadioUnchecked color="orange" />
                </td>
              </tr>

              <tr>
                <th scope="row">2</th>
                <td>12345678</td>
                <td>
                  <span>0123456789</span>
                </td>
                <td>10BHG00</td>
                <td class="text-danger">Reject</td>
                <td>16 nov 2022</td>
                <td>17 nov 2022</td>
                <td>100000</td>
                <td>200000</td>
                <td>
                  <ImRadioUnchecked color="#A3C54C" />
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>12345678</td>
                <td>
                  <span>0123456789</span>
                </td>
                <td>10BHG00</td>
                <td style={{ color: "#A3C54C" }}>Approved</td>
                <td>16 nov 2022</td>
                <td>17 nov 2022</td>
                <td>100000</td>
                <td>200000</td>
                <td>
                  <ImRadioUnchecked color="red" />
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>12345678</td>
                <td>
                  <span>0123456789</span>
                </td>
                <td>10BHG00</td>
                <td class="text-danger">Reject</td>
                <td>16 nov 2022</td>
                <td>17 nov 2022</td>
                <td>100000</td>
                <td>200000</td>
                <td>
                  <ImRadioUnchecked color="blue" />
                </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>12345678</td>
                <td>
                  <span>0123456789</span>
                </td>
                <td>10BHG00</td>
                <td style={{ color: "#A3C54C" }}>Approved</td>
                <td>16 nov 2022</td>
                <td>17 nov 2022</td>
                <td>100000</td>
                <td>200000</td>
                <td>
                  <ImRadioUnchecked color="orange" />
                </td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>12345678</td>
                <td>
                  <span>0123456789</span>
                </td>
                <td>10BHG00</td>
                <td class="text-danger">Reject</td>
                <td>16 nov 2022</td>
                <td>17 nov 2022</td>
                <td>100000</td>
                <td>200000</td>
                <td>
                  <ImRadioUnchecked color="red" />
                </td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>12345678</td>
                <td>
                  <span>0123456789</span>
                </td>
                <td>10BHG00</td>
                <td style={{ color: "#A3C54C" }}>Approved</td>
                <td>16 nov 2022</td>
                <td>17 nov 2022</td>
                <td>100000</td>
                <td>200000</td>
                <td>
                  <ImRadioUnchecked color="blue" />
                </td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>12345678</td>
                <td>
                  <span>0123456789</span>
                </td>
                <td>10BHG00</td>
                <td class="text-danger">Reject</td>
                <td>16 nov 2022</td>
                <td>17 nov 2022</td>
                <td>100000</td>
                <td>200000</td>
                <td>
                  <ImRadioUnchecked color="#A3C54C" />
                </td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>12345678</td>
                <td>
                  <span>0123456789</span>
                </td>
                <td>10BHG00</td>
                <td style={{ color: "#A3C54C" }}>Approved</td>
                <td>16 nov 2022</td>
                <td>17 nov 2022</td>
                <td>100000</td>
                <td>200000</td>
                <td>
                  <ImRadioUnchecked color="orange" />
                </td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>12345678</td>
                <td>
                  <span>0123456789</span>
                </td>
                <td>10BHG00</td>
                <td class="text-danger">Reject</td>

                <td>16 nov 2022</td>
                <td>17 nov 2022</td>
                <td>100000</td>
                <td>200000</td>
                <td>
                  <ImRadioUnchecked color="#A3C54C" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Report;
