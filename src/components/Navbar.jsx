import { useState } from "react";
import Link from "./Link";
import { CgProfile } from "react-icons/cg";
import Modal from "./Modal";
import RegisterForm from "../pages/Register";
import Receipt from "../pages/ReceiptGen";
import SendAmount from "../pages/SendAmount";
import FeedClientBalance from "../pages/FeedClientBalance";

function Navbar({ isAuth, isCustomer }) {
  const [showOptions, setShowOptions] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReceiptModalOpenForClient, setIsReceiptModalOpenForClient] =
    useState(false);
  const [isReceiptModalOpenForEmployee, setIsReceiptModalOpenForEmployee] =
    useState(false);
  const [isSendAmountModalOpen, setIsSendAmountModalOpen] = useState(false);
  const [isFeedClientModalOpen, setIsFeedClientModalOpen] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const logoutFunction = () => {
    // logout();
    setTimeout(() => (window.location.pathname = "/"), 1000);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openReceiptModalForClient = () => {
    setIsReceiptModalOpenForClient(true);
  };

  const closeReceiptModalForClient = () => {
    setIsReceiptModalOpenForClient(false);
  };

  const openReceiptModalForEmployee = () => {
    setIsReceiptModalOpenForEmployee(true);
  };

  const closeReceiptModalForEmployee = () => {
    setIsReceiptModalOpenForEmployee(false);
  };

  const openSendAmountModal = () => {
    setIsSendAmountModalOpen(true);
  };

  const closeSendAmountModal = () => {
    setIsSendAmountModalOpen(false);
  };

  const openFeedClientModal = () => {
    setIsFeedClientModalOpen(true);
  };

  const closeFeedClientModal = () => {
    setIsFeedClientModalOpen(false);
  };

  const customerList = [
    <div
      className="text-white cursor-pointer hover:border-b-2 hover:text-yellow-200"
      onClick={openReceiptModalForClient}
    >
      Account receipt
    </div>,
    <div
      className="text-white cursor-pointer hover:border-b-2 hover:text-yellow-200"
      onClick={openSendAmountModal}
    >
      Send an amount
    </div>,
    <div className="text-white cursor-pointer hover:border-b-2 hover:text-yellow-200">
      Assistance
    </div>,
  ];

  const employeeList = [
    <div
      className="text-white hover:border-b-2 hover:text-yellow-200 cursor-pointer"
      onClick={openModal}
    >
      Register a customer
    </div>,
    <div
      className="text-white hover:border-b-2 hover:text-yellow-200 cursor-pointer"
      onClick={openFeedClientModal}
    >
      Feed client balance
    </div>,
    <div
      className="text-white hover:border-b-2 hover:text-yellow-200 cursor-pointer"
      onClick={openReceiptModalForEmployee}
    >
      Account receipt
    </div>,
  ];

  return (
    <div>
      <nav className="bg-stone-500 py-6 px-20 mb-10">
        <div className="flex items-center justify-between">
          <Link className="text-white text-lg font-bold" to="/">
            LIBERTY-BANK
          </Link>
          {isAuth && (
            <>
              <div className="lg:flex items-center space-x-6">
                {isCustomer ? customerList : employeeList}
              </div>
              <div className="text-white flex items-center mr-10">
                <span className="px-3">Younes, 300 MAD</span>
                <span
                  className="text-white cursor-pointer"
                  onClick={toggleOptions}
                >
                  <CgProfile size={30} />
                </span>
                {showOptions && (
                  <div className="flex flex-col absolute mt-48 bg-stone-100 p-4 text-black ml-20">
                    <span
                      className="cursor-pointer hover:underline"
                      onClick={logoutFunction}
                    >
                      Notifications
                    </span>
                    <span className="cursor-pointer hover:underline">
                      Profile
                    </span>
                    <span className="cursor-pointer hover:underline">
                      Settings
                    </span>
                    <span className="cursor-pointer hover:underline">
                      Logout
                    </span>
                  </div>
                )}
              </div>
            </>
          )}
          {!isAuth && (
            <div
              className="text-white hover:text-orange-200 cursor-pointer"
              onClick={openModal}
            >
              Signup
            </div>
          )}
        </div>
      </nav>
      {isModalOpen && (
        <Modal onClose={closeModal} size="inset-y-10 inset-x-80">
          <RegisterForm />
        </Modal>
      )}
      {isReceiptModalOpenForClient && (
        <Modal
          onClose={closeReceiptModalForClient}
          size="inset-y-40 inset-x-80"
        >
          <Receipt isCustomer />
        </Modal>
      )}
      {isReceiptModalOpenForEmployee && (
        <Modal
          onClose={closeReceiptModalForEmployee}
          size="inset-y-40 inset-x-80"
        >
          <Receipt IsEmployee />
        </Modal>
      )}

      {isSendAmountModalOpen && (
        <Modal onClose={closeSendAmountModal} size="inset-y-40 inset-x-80">
          <SendAmount />
        </Modal>
      )}

      {isFeedClientModalOpen && (
        <Modal onClose={closeFeedClientModal} size="inset-y-40 inset-x-80">
          <FeedClientBalance />
        </Modal>
      )}
    </div>
  );
}

export default Navbar;
