import React from "react";
function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)"}}>
    <div className="container border-top mt-5">
      <div className="row mt-5">
        <div className="col">
          <img src="/images/logo.svg" style={{ width: "50%" }} />
          <p>
            &copy; 2010 - 2014, Not Zerodha Broking Ltd. All rights reserved.
          </p>
        </div>
        <div className="col">
          <p>Company</p>
          <a href=""className="text-muted text-decoration-none">About</a>
          <br />
          <a href=""className="text-muted text-decoration-none">Products</a>
          <br />
          <a href=""className="text-muted text-decoration-none">Refferal programme</a>
          <br />
          <a href=""className="text-muted text-decoration-none">Carrers</a>
          <br />
          <a href=""className="text-muted text-decoration-none">Zerodha.tech</a>
          <br />
          <a href=""className="text-muted text-decoration-none">Press & media</a>
          <br />
          <a href=""className="text-muted text-decoration-none">Zerodha cares (CSR)</a>
          <br />
        </div>
        <div className="col">
          <p>Support</p>
          <a href=""className="text-muted text-decoration-none">Contact</a>
          <br />
          <a href=""className="text-muted text-decoration-none">Support portal</a>
          <br />
          <a href=""className="text-muted text-decoration-none">Z-Connect blog</a>
          <br />
          <a href=""className="text-muted text-decoration-none">List of charges</a>
          <br />
          <a href=""className="text-muted text-decoration-none">Downloads & resources</a>
          <br />
        </div>
        <div className="col">
          <p>Account</p>
          <a href=""className="text-muted text-decoration-none">Open an account</a>
          <br />
          <a href=""className="text-muted text-decoration-none">Fund transfer</a>
          <br />
          <a href=""className="text-muted text-decoration-none">60 day challenge</a>
          <br />
        </div>
      </div>
      <div className="mt-5  text-small text-muted "style={{fontSize: "14px"}}>
      <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.:
      INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. –
      SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking
      Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
      J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
      complaints pertaining to securities broking please write to
      complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure
      you carefully read the Risk Disclosure Document as prescribed by SEBI |
      ICF</p>
     <p> Procedure to file a complaint on SEBI SCORES: Register on SCORES
      portal. Mandatory details for filing complaints on SCORES: Name, PAN,
      Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
      Speedy redressal of the grievances</p> 
      <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
      <p>Investments in securities market aresubject to market risks; read all 
        the related documents carefully before
      investing.</p> 
      <p>Attention investors: 1) Stock brokers can accept securities as
      margins from clients only by way of pledge in the depository system w.e.f
      September 01, 2020. 2) Update your e-mail and phone number with your stock
      broker / depository participant and receive OTP directly from depository
      on your e-mail and/or mobile number to create pledge. 3) Check your
      securities / MF / bonds in the consolidated account statement issued by
      NSDL/CDSL every month.</p>
      <p>India's largest broker based on networth as per
      NSE. NSE broker factsheet </p>
      <p>"Prevent unauthorised transactions in your
      account. Update your mobile numbers/email IDs with your stock brokers.
      Receive information of your transactions directly from Exchange on your
      mobile/email at the end of the day. Issued in the interest of investors.
      KYC is one time exercise while dealing in securities markets - once KYC is
      done through a SEBI registered intermediary (broker, DP, Mutual Fund
      etc.), you need not undergo the same process again when you approach
      another intermediary." Dear Investor, if you are subscribing to an IPO,
      there is no need to issue a cheque. Please write the Bank account number
      and sign the IPO application form to authorize your bank to make payment
      in case of allotment. In case of non allotment the funds will remain in
      your bank account. As a business we don't give stock tips, and have not
      authorized anyone to trade on behalf of others. If you find anyone
      claiming to be part of Zerodha and offering such services, please create as
      ticket here.</p>
     <p>*Customers availing insurance advisory services offered by
      Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate
      Agent (Composite) License No CA0738) will not have access to the exchange
      investor grievance redressal forum, SEBI SCORES/ODR, or arbitration
      mechanism for such products.</p>
    </div>
    </div>

      {/* Footer Bottom Links */}
      <div className="footer-graveyard-links text-center mt-4 pb-3">
        <ul className="list-inline">
          <li className="list-inline-item">
            <a rel="nofollow" href=""className="text-muted text-decoration-none">NSE </a>
          </li>
          <li className="list-inline-item">
            <a rel="nofollow" href=""className="text-muted text-decoration-none">BSE</a>
          </li>
          <li className="list-inline-item">
            <a rel="nofollow" href=""className="text-muted text-decoration-none">MCX</a>
          </li>
          <li className="list-inline-item">
            <a href=""className="text-muted text-decoration-none">Terms &amp; conditions</a>
          </li>
          <li className="list-inline-item">
            <a href=""className="text-muted text-decoration-none">Policies &amp; procedures</a>
          </li>
          <li className="list-inline-item">
            <a href=""className="text-muted text-decoration-none">Privacy policy</a>
          </li>
          <li className="list-inline-item">
            <a href=""className="text-muted text-decoration-none">Disclosure</a>
          </li>
          <li className="list-inline-item">
            <a href=""className="text-muted text-decoration-none">For investor's attention</a>
          </li>
          <li className="list-inline-item">
            <a href=""className="text-muted text-decoration-none">Investor charter</a>
          </li>
        </ul>
      </div>

    </footer>

    
  );
}

export default Footer;
