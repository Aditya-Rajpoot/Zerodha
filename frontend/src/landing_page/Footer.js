import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img
              src="media/images/logo.svg"
              className="footer-logo"
              alt="Zerodha logo"
            />
            <p>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          <div className="col">
            <p className="footer-col-title">Company</p>
            <a href="" className="footer-link">About</a>
            <a href="" className="footer-link">Philosophy</a>
            <a href="" className="footer-link">Open source </a>
            <a href="" className="footer-link">Referral programme</a>
            <a href="" className="footer-link">Careers</a>
            <a href="" className="footer-link">Zerodha.tech</a>
            <a href="" className="footer-link">Press & media</a>
            <a href="" className="footer-link">Zerodha cares (CSR)</a>
          </div>

          <div className="col">
            <p className="footer-col-title">Support</p>
            <a href="" className="footer-link">Contact</a>
            <a href="" className="footer-link">Support portal</a>
            <a href="" className="footer-link">Z-Connect blog</a>
            <a href="" className="footer-link">List of charges</a>
            <a href="" className="footer-link">Downloads & resources</a>
          </div>

          <div className="col">
            <p className="footer-col-title">Account</p>
            <a href="" className="footer-link">Open an account</a>
            <a href="" className="footer-link">Fund transfer</a>
            <a href="" className="footer-link">Minor demat account</a>
            <a href="" className="footer-link">NRI demat account</a>
            <a href="" className="footer-link">HUF demat account</a>
            <a href="" className="footer-link">Commodity</a>
            <a href="" className="footer-link">Dematerialisation</a>
            <a href="" className="footer-link">Fund transfer</a>

          </div>
        </div>

        <div className="mt-5 text-muted footer-legal">
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>

        <div className="d-flex flex-wrap footer-bottom-links">
          <a href="" className="footer-bottom-link">NSE</a>
          <a href="" className="footer-bottom-link">BSE</a>
          <a href="" className="footer-bottom-link">MCX</a>
          <a href="" className="footer-bottom-link">MSEI</a>
          <a href="" className="footer-bottom-link">Terms & conditions</a>
          <a href="" className="footer-bottom-link">Policies & procedures</a>
          <a href="" className="footer-bottom-link">Privacy policy</a>
          <a href="" className="footer-bottom-link">Disclosure</a>
          <a href="" className="footer-bottom-link">For investor's attention</a>
          <a href="" className="footer-bottom-link">Investor charter</a>
          <a href="" className="footer-bottom-link">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;