"use client";
import { useState } from "react";
type V =
  | "home"
  | "login"
  | "dashboard"
  | "pay"
  | "wallet"
  | "transactions"
  | "profile"
  | "admin";
const svc = [
  { id: "airtime", i: "☎", n: "Airtime", s: "Instant top-up", c: "#e5f8ee" },
  { id: "data", i: "◉", n: "Data", s: "All networks", c: "#eceeff" },
  {
    id: "electricity",
    i: "ϟ",
    n: "Electricity",
    s: "Prepaid & postpaid",
    c: "#fff4d4",
  },
  { id: "tv", i: "▣", n: "Cable TV", s: "DStv, GOtv & more", c: "#ffede7" },
  { id: "betting", i: "◆", n: "Betting", s: "Fund your account", c: "#f2e9ff" },
  {
    id: "education",
    i: "▤",
    n: "Education",
    s: "WAEC, NECO & JAMB",
    c: "#e5f4ff",
  },
];
const tx = [
  {
    i: "ϟ",
    n: "IKEDC Electricity",
    s: "Prepaid • 45009833211",
    d: "Today, 10:42 AM",
    a: "−₦12,500.00",
    st: "Successful",
    c: "#fff4d4",
  },
  {
    i: "＋",
    n: "Wallet funding",
    s: "Bank transfer",
    d: "Yesterday, 6:18 PM",
    a: "+₦25,000.00",
    st: "Successful",
    c: "#e5f8ee",
  },
  {
    i: "◉",
    n: "MTN Data",
    s: "10GB • 0803 456 7812",
    d: "14 Aug, 2:06 PM",
    a: "−₦3,500.00",
    st: "Successful",
    c: "#eceeff",
  },
  {
    i: "▣",
    n: "DStv Compact",
    s: "IUC • 7034281190",
    d: "12 Aug, 9:30 AM",
    a: "−₦15,700.00",
    st: "Processing",
    c: "#ffede7",
  },
];
function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <button className={`logo ${dark ? "dark" : ""}`}>
      <b>P</b>
      <span>TekaBill</span>
    </button>
  );
}
function Landing({ go }: { go: (x: V) => void }) {
  return (
    <div className="landing">
      <header>
        <Logo />
        <nav>
          <a href="#services">Services</a>
          <a href="#how">How it works</a>
          <a href="#security">Security</a>
          <a href="#footer">Support</a>
        </nav>
        <div>
          <button className="plain" onClick={() => go("login")}>
            Sign in
          </button>
          <button className="primary small" onClick={() => go("login")}>
            Create free account
          </button>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="pill">● PAYMENTS THAT SIMPLY WORK</span>
            <h1>
              Everyday payments,
              <br />
              <em>made effortless.</em>
            </h1>
            <p>
              Buy airtime, pay electricity, renew TV subscriptions and manage
              every bill from one beautifully simple account.
            </p>
            <div className="hero-actions">
              <button className="primary" onClick={() => go("login")}>
                Get started — it’s free →
              </button>
              <button
                className="watch"
                onClick={() => document.getElementById("how")?.scrollIntoView()}
              >
                ▶ &nbsp; See how it works
              </button>
            </div>
            <div className="trust">
              <span>AO</span>
              <span>KI</span>
              <span>NE</span>
              <div>
                <b>Trusted by 25,000+ Nigerians</b>
                <small>★★★★★ &nbsp; 4.9 average rating</small>
              </div>
            </div>
          </div>
          <Phone />
        </section>
        <section className="partners">
          <small>POWERING PAYMENTS ACROSS NIGERIA</small>
          <div>
            <b>MTN</b>
            <b>airtel</b>
            <b>Glo</b>
            <b>DStv</b>
            <b>₦ECO</b>
            <b>IKEDC</b>
          </div>
        </section>
        <section className="features" id="services">
          <Title
            over="ONE APP. EVERY PAYMENT."
            title="Everything you need, right at your fingertips."
            text="From daily essentials to monthly bills, TekaBill keeps your payments organised and stress-free."
          />
          <div className="feature-grid">
            {svc.map((s) => (
              <article key={s.id}>
                <i style={{ background: s.c }}>{s.i}</i>
                <div>
                  <h3>{s.n}</h3>
                  <p>{s.s}</p>
                </div>
                <button onClick={() => go("login")}>→</button>
              </article>
            ))}
          </div>
        </section>
        <section className="steps" id="how">
          <div>
            <span className="pill">SIMPLE BY DESIGN</span>
            <h2>From bill to paid in three easy steps.</h2>
            <p>
              No queues. No confusing forms. Just fast, reliable payments
              whenever you need them.
            </p>
            <button className="primary" onClick={() => go("login")}>
              Open your account →
            </button>
          </div>
          <ol>
            {[
              [
                "01",
                "Choose a service",
                "Select airtime, data, electricity, TV or another bill.",
              ],
              [
                "02",
                "Enter your details",
                "We verify the account before you confirm payment.",
              ],
              [
                "03",
                "Pay and relax",
                "Get instant confirmation and a digital receipt.",
              ],
            ].map((x) => (
              <li key={x[0]}>
                <b>{x[0]}</b>
                <div>
                  <h3>{x[1]}</h3>
                  <p>{x[2]}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <section className="security" id="security">
          <strong>✓</strong>
          <div>
            <small>BUILT AROUND YOUR TRUST</small>
            <h2>Your money deserves serious protection.</h2>
          </div>
          {[
            ["256-bit encryption", "Your details remain private."],
            ["Transaction PIN", "Every payment needs approval."],
            ["24/7 monitoring", "Unusual activity is flagged."],
          ].map((x) => (
            <p key={x[0]}>
              <b>{x[0]}</b>
              <span>{x[1]}</span>
            </p>
          ))}
        </section>
      </main>
      <footer id="footer">
        <Logo dark />
        <p>Fast, simple and secure payments for everyday Nigeria.</p>
        <span>© 2026 TekaBill Technologies. Demo interface.</span>
      </footer>
    </div>
  );
}
function Phone() {
  return (
    <div className="visual">
      <div className="halo" />
      <div className="phone">
        <div className="phone-head">
          <b>P</b>
          <span>Good morning, David</span>
          <i>⌁</i>
        </div>
        <small>Available balance</small>
        <h3>₦48,250.00</h3>
        <div className="phone-actions">
          <button>＋ Fund</button>
          <button>↗ Send</button>
          <button>▦ History</button>
        </div>
        <div className="phone-services">
          {svc.slice(0, 4).map((s) => (
            <div key={s.id}>
              <i style={{ background: s.c }}>{s.i}</i>
              <span>{s.n}</span>
            </div>
          ))}
        </div>
        <div className="phone-tx">
          <i>ϟ</i>
          <p>
            <b>IKEDC Electricity</b>
            <span>Today, 10:42 AM</span>
          </p>
          <strong>−₦12,500</strong>
        </div>
      </div>
      <div className="pop p1">
        ✓{" "}
        <p>
          <b>Payment successful</b>
          <span>Your electricity token is ready</span>
        </p>
      </div>
      <div className="pop p2">
        ⌾{" "}
        <p>
          <b>Bank-grade security</b>
          <span>Your money is protected</span>
        </p>
      </div>
    </div>
  );
}
function Title({
  over,
  title,
  text,
}: {
  over: string;
  title: string;
  text: string;
}) {
  return (
    <div className="title">
      <small>{over}</small>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
function Login({ go }: { go: (x: V) => void }) {
  return (
    <div className="login">
      <aside>
        <Logo dark />
        <div>
          <span className="pill pale">ALL YOUR BILLS. ONE ACCOUNT.</span>
          <h1>Take control of every payment.</h1>
          <p>
            Join thousands of Nigerians paying smarter, faster and more
            securely.
          </p>
          <ul>
            <li>✓ Instant payment confirmation</li>
            <li>✓ Digital receipts for every transaction</li>
            <li>✓ Protected with bank-grade security</li>
          </ul>
        </div>
        <small>TekaBill • Built for Nigeria</small>
      </aside>
      <main>
        <button className="back" onClick={() => go("home")}>
          ← Back to home
        </button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            go("dashboard");
          }}
        >
          <div className="login-logo">
            <Logo />
          </div>
          <small>WELCOME BACK</small>
          <h2>Sign in to TekaBill</h2>
          <p>Enter your details to continue to your account.</p>
          <label>
            Email address
            <input type="email" defaultValue="david@example.com" />
          </label>
          <label>
            Password
            <input type="password" defaultValue="password123" />
          </label>
          <div className="remember">
            <label>
              <input type="checkbox" defaultChecked /> Remember me
            </label>
            <a>Forgot password?</a>
          </div>
          <button className="primary full">Sign in securely →</button>
          <div className="or">or continue with</div>
          <button className="google" type="button">
            G &nbsp; Continue with Google
          </button>
          <p className="signup">
            New to TekaBill? <a>Create a free account</a>
          </p>
        </form>
      </main>
    </div>
  );
}
const nav: [V, string, string][] = [
  ["dashboard", "⌂", "Overview"],
  ["pay", "▦", "Pay bills"],
  ["wallet", "▰", "Wallet"],
  ["transactions", "↕", "Transactions"],
  ["profile", "○", "Profile"],
];
function Shell({
  v,
  go,
  children,
}: {
  v: V;
  go: (x: V) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="shell">
      <aside>
        <Logo dark />
        <nav>
          {nav.map((n) => (
            <button
              key={n[0]}
              className={v === n[0] ? "active" : ""}
              onClick={() => go(n[0])}
            >
              <i>{n[1]}</i>
              {n[2]}
            </button>
          ))}
        </nav>
        <div className="side-bottom">
          <button onClick={() => go("admin")}>◇ &nbsp; Admin demo</button>
          <button>? &nbsp; Help & support</button>
          <div className="user">
            <b>DA</b>
            <p>
              <strong>David Armstrong</strong>
              <span>Tier 2 verified</span>
            </p>
            <button onClick={() => go("home")}>↪</button>
          </div>
        </div>
      </aside>
      <main>
        <header>
          <div className="mobile-logo">
            <Logo />
          </div>
          <label className="search">
            ⌕ <input placeholder="Search transactions, bills..." />
          </label>
          <div className="avatar">DA</div>
        </header>
        {children}
        <nav className="bottom-nav">
          {nav.slice(0, 4).map((n) => (
            <button
              key={n[0]}
              className={v === n[0] ? "active" : ""}
              onClick={() => go(n[0])}
            >
              <i>{n[1]}</i>
              <span>{n[2]}</span>
            </button>
          ))}
        </nav>
      </main>
    </div>
  );
}
function ST({
  over,
  title,
  text,
  action,
}: {
  over: string;
  title: string;
  text: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="screen-title">
      <div>
        <small>{over}</small>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      {action}
    </div>
  );
}
function Head({
  title,
  text,
  action,
}: {
  title: string;
  text: string;
  action?: string;
}) {
  return (
    <div className="head">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      {action && <button>{action}</button>}
    </div>
  );
}
function Tx({ t }: { t: (typeof tx)[number] }) {
  return (
    <div className="tx">
      <i style={{ background: t.c }}>{t.i}</i>
      <p>
        <b>{t.n}</b>
        <span>{t.s}</span>
      </p>
      <p className="amount">
        <b>{t.a}</b>
        <span>{t.d}</span>
      </p>
      <em className={t.st === "Processing" ? "pending" : ""}>{t.st}</em>
    </div>
  );
}
function Dashboard({ go }: { go: (x: V) => void }) {
  return (
    <div className="screen">
      <ST
        over="MONDAY, 16 AUGUST"
        title="Good morning, David 👋"
        text="Here’s what’s happening with your money today."
        action={
          <button className="primary small" onClick={() => go("pay")}>
            ＋ Make a payment
          </button>
        }
      />
      <div className="metrics">
        <div className="balance">
          <small>Available balance</small>
          <h2>
            ₦48,250<span>.00</span>
          </h2>
          <p>Ledger balance: ₦48,250.00</p>
          <div>
            <button onClick={() => go("wallet")}>＋ Fund wallet</button>
            <button>↗ Send money</button>
          </div>
        </div>
        <article>
          <i>↗</i>
          <small>Spent this month</small>
          <h3>₦34,780.00</h3>
          <p>↓ 12.4% vs last month</p>
        </article>
        <article>
          <i className="purple">◎</i>
          <small>Rewards earned</small>
          <h3>₦1,240.00</h3>
          <p>＋₦180 this month</p>
        </article>
      </div>
      <section className="quick">
        <Head
          title="Quick payments"
          text="What would you like to pay for?"
          action="View all →"
        />
        <div>
          {svc.map((s) => (
            <button key={s.id} onClick={() => go("pay")}>
              <i style={{ background: s.c }}>{s.i}</i>
              {s.n}
            </button>
          ))}
        </div>
      </section>
      <div className="dash-bottom">
        <section className="panel">
          <Head
            title="Recent transactions"
            text="Your latest account activity"
            action="View all →"
          />
          {tx.slice(0, 3).map((t, i) => (
            <Tx key={i} t={t} />
          ))}
        </section>
        <section className="panel spending">
          <Head title="Monthly spending" text="August 2026" />
          <div className="bars">
            {[38, 60, 45, 76, 55, 88, 63, 80, 48, 92, 64, 82].map((x, i) => (
              <i
                key={i}
                style={{ height: x + "%" }}
                className={i === 9 ? "hot" : ""}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
function Pay() {
  const [s, setS] = useState(svc[0]),
    [a, setA] = useState("1000"),
    [done, setDone] = useState(false);
  return (
    <div className="screen">
      <ST
        over="PAYMENTS"
        title="Pay a bill"
        text="Select a service and enter the payment details."
      />
      <div className="pay-grid">
        <section className="panel service-select">
          <h2>1. Choose a service</h2>
          <div>
            {svc.map((x) => (
              <button
                key={x.id}
                className={x.id === s.id ? "selected" : ""}
                onClick={() => {
                  setS(x);
                  setDone(false);
                }}
              >
                <i style={{ background: x.c }}>{x.i}</i>
                {x.n}
              </button>
            ))}
          </div>
        </section>
        <section className="panel pay-form">
          <header>
            <i style={{ background: s.c }}>{s.i}</i>
            <div>
              <small>PAYING FOR</small>
              <h2>{s.n}</h2>
            </div>
          </header>
          {done ? (
            <div className="success">
              <i>✓</i>
              <h2>Payment successful</h2>
              <p>
                Your {s.n.toLowerCase()} payment of{" "}
                <b>₦{Number(a).toLocaleString()}.00</b> was completed.
              </p>
              <span>
                Reference <b>PLK-260816-4F2A91</b>
              </span>
              <button className="primary full" onClick={() => setDone(false)}>
                Make another payment
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
            >
              <label>
                {s.id === "electricity"
                  ? "Meter number"
                  : s.id === "tv"
                    ? "Smartcard / IUC number"
                    : s.id === "betting"
                      ? "Betting account ID"
                      : s.id === "education"
                        ? "Candidate number"
                        : "Phone number"}
                <input placeholder="Enter customer details" required />
              </label>
              {["data", "tv", "education"].includes(s.id) && (
                <label>
                  Select package
                  <select>
                    <option>Choose a package</option>
                    <option>Standard package</option>
                    <option>Premium package</option>
                  </select>
                </label>
              )}
              <label>
                Amount (₦)
                <input
                  type="number"
                  value={a}
                  onChange={(e) => setA(e.target.value)}
                  min="100"
                />
              </label>
              <div className="chips">
                {[500, 1000, 2000, 5000].map((x) => (
                  <button type="button" key={x} onClick={() => setA(String(x))}>
                    ₦{x.toLocaleString()}
                  </button>
                ))}
              </div>
              <div className="summary">
                <p>
                  Amount <b>₦{Number(a).toLocaleString()}.00</b>
                </p>
                <p>
                  Service fee <b>₦0.00</b>
                </p>
                <strong>
                  Total <b>₦{Number(a).toLocaleString()}.00</b>
                </strong>
              </div>
              <button className="primary full">Confirm and pay →</button>
              <small className="safe">
                ⌾ Secured with your transaction PIN
              </small>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}
function Wallet() {
  return (
    <div className="screen">
      <ST
        over="MY WALLET"
        title="Wallet"
        text="Fund your account and manage your balance."
        action={<button className="primary small">＋ Fund wallet</button>}
      />
      <div className="wallet-grid">
        <div className="balance large">
          <small>Available balance</small>
          <h2>
            ₦48,250<span>.00</span>
          </h2>
          <div>
            <p>
              <span>Ledger balance</span>
              <b>₦48,250.00</b>
            </p>
            <p>
              <span>Reserved balance</span>
              <b>₦0.00</b>
            </p>
          </div>
        </div>
        <div className="panel bank">
          <small>YOUR TEKABILL ACCOUNT</small>
          <h3>Wema Bank</h3>
          <h2>9374 201 663</h2>
          <p>DAVID ARMSTRONG</p>
          <button>▣ Copy account number</button>
        </div>
      </div>
      <section className="panel wallet-list">
        <Head
          title="Wallet activity"
          text="Money in and out of your TekaBill wallet"
          action="Download statement ↓"
        />
        {tx.map((t, i) => (
          <Tx key={i} t={t} />
        ))}
      </section>
    </div>
  );
}
function Transactions() {
  const [f, setF] = useState("All");
  return (
    <div className="screen">
      <ST
        over="ACTIVITY"
        title="Transactions"
        text="Track every payment and wallet movement."
        action={<button className="outline">Download statement ↓</button>}
      />
      <section className="panel tx-panel">
        <div className="filters">
          {["All", "Successful", "Processing"].map((x) => (
            <button
              key={x}
              className={f === x ? "active" : ""}
              onClick={() => setF(x)}
            >
              {x}
            </button>
          ))}
        </div>
        <div className="date-row">AUGUST 2026</div>
        {tx
          .filter((t) => f === "All" || t.st === f)
          .map((t, i) => (
            <Tx key={i} t={t} />
          ))}
      </section>
    </div>
  );
}
function Profile() {
  return (
    <div className="screen">
      <ST
        over="ACCOUNT"
        title="Profile & settings"
        text="Manage your identity, security and preferences."
      />
      <div className="profile-grid">
        <section className="panel profile">
          <div>DA</div>
          <h2>David Armstrong</h2>
          <p>david@example.com</p>
          <span>✓ Tier 2 verified</span>
          <button className="outline">Edit personal information</button>
        </section>
        <section className="settings">
          {[
            ["♙", "Identity verification", "Your identity is fully verified."],
            ["⌾", "Security", "Password, transaction PIN and devices"],
            ["◌", "Notifications", "Push, email and SMS preferences"],
            [
              "▦",
              "Saved beneficiaries",
              "Manage frequently used bill accounts",
            ],
            ["?", "Help & support", "FAQs, live support and disputes"],
          ].map((x, i) => (
            <article key={x[1]}>
              <i>{x[0]}</i>
              <div>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
              </div>
              {i === 0 ? <span>Verified</span> : <button>›</button>}
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
function Admin({ go }: { go: (x: V) => void }) {
  return (
    <div className="admin">
      <aside>
        <Logo dark />
        <small>OPERATIONS CONSOLE</small>
        <nav>
          {[
            "▦  Overview",
            "↕  Transactions",
            "♙  Customers",
            "▤  Bill products",
            "▰  Reconciliation",
            "◇  Providers",
            "⌾  Risk & compliance",
            "◌  Support",
          ].map((x, i) => (
            <button className={i === 0 ? "active" : ""} key={x}>
              {x}
            </button>
          ))}
        </nav>
        <button className="exit" onClick={() => go("dashboard")}>
          ← Customer app
        </button>
      </aside>
      <main>
        <header>
          <div>
            <small>OPERATIONS</small>
            <h1>Platform overview</h1>
          </div>
          <div className="admin-user">
            <span>OA</span>
            <p>
              <b>Olamide Adeyemi</b>
              <small>Super administrator</small>
            </p>
          </div>
        </header>
        <div className="admin-content">
          <div className="alert">
            ✓ &nbsp; <b>All systems operational</b>&nbsp; Provider success rate
            is healthy across all categories.
          </div>
          <section className="admin-metrics">
            {[
              ["Total payment volume", "₦28.4M", "↗ 18.2% this month"],
              ["Transactions today", "2,846", "↗ 9.4% vs yesterday"],
              ["Success rate", "98.7%", "↗ 0.6% this week"],
              ["Pending review", "14", "6 require attention"],
            ].map((x, i) => (
              <article key={x[0]}>
                <small>{x[0]}</small>
                <h2>{x[1]}</h2>
                <p className={i === 3 ? "warn" : "up"}>{x[2]}</p>
              </article>
            ))}
          </section>
          <div className="admin-grid">
            <section className="panel">
              <Head title="Transaction volume" text="Last 14 days" />
              <div className="line-chart">
                <svg viewBox="0 0 700 190" preserveAspectRatio="none">
                  <path
                    d="M0 165 C60 150 70 90 125 115 S220 135 270 70 S360 110 405 75 S500 120 555 55 S650 75 700 30"
                    fill="none"
                    stroke="#13a36d"
                    strokeWidth="4"
                  />
                </svg>
              </div>
            </section>
            <section className="panel providers">
              <Head title="Provider health" text="Live fulfilment status" />
              {[
                ["Monnify Bills", "99.2%", "₦2.8M"],
                ["Flutterwave", "98.6%", "₦1.4M"],
                ["VFD Services", "97.9%", "₦860K"],
              ].map((x) => (
                <div key={x[0]}>
                  <i />
                  <p>
                    <b>{x[0]}</b>
                    <span>Available: {x[2]}</span>
                  </p>
                  <strong>{x[1]}</strong>
                </div>
              ))}
            </section>
          </div>
          <section className="panel admin-table">
            <Head
              title="Recent transactions"
              text="Live platform activity"
              action="View all →"
            />
            <table>
              <thead>
                <tr>
                  <th>REFERENCE</th>
                  <th>CUSTOMER</th>
                  <th>SERVICE</th>
                  <th>AMOUNT</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {tx.map((t, i) => (
                  <tr key={i}>
                    <td>PLK-2608-{42 + i}A9</td>
                    <td>
                      {
                        [
                          "David Armstrong",
                          "Nneka Obi",
                          "Tunde Akinola",
                          "Maryam Bello",
                        ][i]
                      }
                    </td>
                    <td>{t.n}</td>
                    <td>{t.a}</td>
                    <td>
                      <em className={t.st === "Processing" ? "pending" : ""}>
                        {t.st}
                      </em>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </main>
    </div>
  );
}
export default function Home() {
  const [v, setV] = useState<V>("home");
  if (v === "home") return <Landing go={setV} />;
  if (v === "login") return <Login go={setV} />;
  if (v === "admin") return <Admin go={setV} />;
  return (
    <Shell v={v} go={setV}>
      {v === "dashboard" ? (
        <Dashboard go={setV} />
      ) : v === "pay" ? (
        <Pay />
      ) : v === "wallet" ? (
        <Wallet />
      ) : v === "transactions" ? (
        <Transactions />
      ) : (
        <Profile />
      )}
    </Shell>
  );
}
