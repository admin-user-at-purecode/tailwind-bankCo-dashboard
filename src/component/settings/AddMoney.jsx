import paypalsm from "../../assets/images/payments/paypal-smsvg.svg";
import visa from "../../assets/images/payments/visa.svg";
import master from "../../assets/images/payments/master.svg";
import member from "../../assets/images/avatar/members-3.png";
import CardSelect from "../forms/CardSelect";

function AddMoney() {
  return (
    <>
      <div className="w-[4px] h-[220px] bg-bgray-200 dark:bg-darkblack-400 lg:block hidden rounded-lg"></div>
      <div className="2xl:w-[400px] lg:w-[250px] w-full">
        <div className="w-full">
          <h3 className="text-lg font-bold text-bgray-900 dark:text-white mb-4">
            Add money
          </h3>
          <CardSelect
            currencyOptions={[
              <img src={paypalsm} alt="master" key="1" />,
              <img src={visa} alt="master2" key="2" />,
              <img src={master} alt="master2" key="3" />,
            ]}
          />

          <div className="w-full rounded-lg border border-bgray-200 dark:border-darkblack-400 focus-within:border-success-300 p-4 h-[98px] flex flex-col justify-between">
            <p className="text-sm text-bgray-600 dark:text-darkblack-300 font-medium">
              Enter amount
            </p>
            <div className="w-full h-[35px] flex justify-between items-center">
              <span className="text-2xl text-bgray-900 dark:text-white font-bold">
                $
              </span>
              <label className="w-full">
                <input
                  type="text"
                  className="focus:outline-none w-full p-0 focus:ring-0 border-none text-2xl font-bold text-bgray-900 dark:bg-darkblack-600 dark:text-white"
                />
              </label>
              <div>
                <img src={member} alt="members" />
              </div>
            </div>
          </div>
          <button
            aria-label="none"
            className="bg-success-300 hover:bg-success-400 transition-all text-white text-base font-medium w-full py-4 mt-7 rounded-lg"
          >
            Confirmed
          </button>
        </div>
      </div>
    </>
  );
}

export default AddMoney;
