import React from 'react';
function Stats() {
    return (
<div className="container p-5">
  <div className="row p-5">

    <div className="col-6 p-5">
      <h1 className="fs-5 mb-5">Trust with confidence</h1>

      <h2 className="fs-4">Customer-first always</h2>
      <p className="text-muted">
        That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores worth of equity investments.
      </p>

      <h2 className="fs-4">No spam or gimmicks</h2>
      <p className="text-muted">
        No gimmicks, spam, "gamification", or annoying push notifications.
      </p>

      <h2 className="fs-4">The Zerodha universe</h2>
      <p className="text-muted">
        Not just an app, but a whole ecosystem.
      </p>

      <h2 className="fs-4">Do better with money</h2>
      <p className="text-muted">
        With initiatives like Nudge and Kill Switch, we help you do better with your money.
      </p>
    </div>

    <div className="col-6 p-5">
      <img src="/images/ecosystem.png" style={{ width: "90%" }} alt="ecosystem" />

      <div className="text-center mt-3">
        <a href="#" className="mx-5" style={{ textDecoration: "none" }}>
          Explore our products <i className="fa fa-long-arrow-right"></i>
        </a>

        <a href="#" style={{ textDecoration: "none" }}>
          Try Kite demo
        </a>
      </div>
    </div>

  </div>
</div>

      );
}

export default Stats;