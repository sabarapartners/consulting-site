export default {
  async fetch(request) {
    const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Sabara Partners — M&A support and value creation for private equity and corporate teams.">
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='48' fill='%230f1e3d'/><circle cx='50' cy='50' r='36' fill='%23c8a24b'/><text x='50' y='62' font-family='Helvetica' font-size='32' font-weight='700' text-anchor='middle' fill='%230f1e3d'>SP</text></svg>">
<title>Sabara Partners — Transaction & Transformation</title>
<style>
:root{--navy:#0f1e3d;--navy-light:#1c3155;--gold:#c8a24b;--gold-light:#e0c878;--light:#f7f6f2;--gray:#6b6b6b;--white:#fff}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:Georgia,'Times New Roman',serif;color:var(--navy);line-height:1.7;background:var(--white)}
h1,h2,h3,h4{font-weight:600;line-height:1.25}
a{color:var(--gold);text-decoration:none}a:hover{text-decoration:underline}
.container{max-width:1100px;margin:0 auto;padding:0 24px}
.section{padding:80px 0}.section-alt{background:var(--light)}
.section-title{text-align:center;font-size:2.2rem;margin-bottom:12px}
.section-subtitle{text-align:center;color:var(--gray);font-size:1.1rem;margin-bottom:48px;font-style:italic}
.btn{display:inline-block;padding:14px 36px;border-radius:4px;font-size:1rem;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:600;letter-spacing:.5px;transition:all .2s ease;cursor:pointer;border:none}
.btn-primary{background:var(--gold);color:var(--navy)}.btn-primary:hover{background:var(--gold-light);text-decoration:none}
.btn-outline{border:2px solid var(--white);color:var(--white);background:transparent}.btn-outline:hover{background:var(--white);color:var(--navy);text-decoration:none}
.site-header{position:sticky;top:0;z-index:100;background:var(--navy);padding:18px 0}
.header-inner{display:flex;align-items:center;justify-content:space-between}
.logo{display:flex;align-items:center;gap:12px;color:var(--white);font-size:1.25rem;font-weight:600}
.logo:hover{text-decoration:none}
.logo-mark{display:flex;align-items:center;justify-content:center;width:42px;height:42px;background:var(--gold);color:var(--navy);border-radius:50%;font-size:1rem;font-weight:700;font-family:'Helvetica Neue',Arial,sans-serif}
.nav{display:flex;gap:28px}
.nav a{color:var(--white);font-family:'Helvetica Neue',Arial,sans-serif;font-size:.9rem;letter-spacing:.3px}
.nav a:hover{color:var(--gold-light);text-decoration:none}
.hero{background:linear-gradient(135deg,var(--navy),var(--navy-light));color:var(--white);padding:100px 0 90px;text-align:center}
.hero-tagline{font-family:'Helvetica Neue',Arial,sans-serif;font-size:.8rem;letter-spacing:3px;color:var(--gold);margin-bottom:24px}
.hero h1{font-size:3rem;margin-bottom:24px;letter-spacing:-.5px}
.hero-subtitle{font-size:1.25rem;max-width:640px;margin:0 auto 40px;color:rgba(255,255,255,.85)}
.hero-actions{display:flex;gap:20px;justify-content:center;flex-wrap:wrap}
.steps-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:40px;max-width:900px;margin:0 auto}
.step{text-align:center;padding:24px}
.step-num{display:inline-block;font-size:2.5rem;font-weight:700;color:var(--gold);margin-bottom:16px;font-family:'Helvetica Neue',Arial,sans-serif}
.step h3{font-size:1.3rem;margin-bottom:12px}
.step p{color:var(--gray);font-family:'Helvetica Neue',Arial,sans-serif;font-size:.95rem}
.subsection{margin-bottom:48px}
.subsection:last-child{margin-bottom:0}
.subsection-header{display:flex;align-items:center;gap:16px;margin-bottom:28px}
.subsection-icon{display:flex;align-items:center;justify-content:center;width:48px;height:48px;background:var(--gold);color:var(--navy);border-radius:8px;font-size:1.4rem;flex-shrink:0}
.subsection-title{font-size:1.5rem;color:var(--navy)}
.subsection-desc{color:var(--gray);font-family:'Helvetica Neue',Arial,sans-serif;font-size:1rem;margin-bottom:20px;padding-left:64px}
.item-list{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;padding-left:64px}
.item{background:var(--white);padding:20px 24px;border-radius:6px;border-left:3px solid var(--gold)}
.item h4{font-size:1.05rem;margin-bottom:6px;color:var(--navy)}
.item p{color:var(--gray);font-size:.9rem;font-family:'Helvetica Neue',Arial,sans-serif}
.result-box{margin-top:24px;padding:16px 24px;background:var(--navy);color:var(--white);border-radius:6px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:.95rem;margin-left:64px}
.result-box strong{color:var(--gold)}
.transform-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.transform-card{background:var(--white);padding:32px 24px;border-radius:8px;box-shadow:0 2px 12px rgba(15,30,61,.06);transition:transform .2s,box-shadow .2s}
.transform-card:hover{transform:translateY(-4px);box-shadow:0 6px 24px rgba(15,30,61,.12)}
.transform-card h4{font-size:1.15rem;margin-bottom:10px;color:var(--navy)}
.transform-card p{color:var(--gray);font-size:.92rem;font-family:'Helvetica Neue',Arial,sans-serif}
.about-inner{display:grid;grid-template-columns:1.2fr 1fr;gap:60px;align-items:start}
.about-text h2{font-size:2.2rem;margin-bottom:8px}
.about-text .founder-role{color:var(--gold);font-size:1.1rem;font-style:italic;margin-bottom:24px;display:block}
.about-text p{color:var(--gray);font-family:'Helvetica Neue',Arial,sans-serif;margin-bottom:18px;font-size:1.02rem}
.credentials{margin-top:32px;padding-top:32px;border-top:1px solid #e0e0e0}
.cred-label{font-size:.8rem;text-transform:uppercase;letter-spacing:1px;color:var(--gold);font-family:'Helvetica Neue',Arial,sans-serif;font-weight:600;margin-bottom:4px}
.cred-item{margin-bottom:16px}
.cred-item span{color:var(--navy);font-family:'Helvetica Neue',Arial,sans-serif;font-size:.95rem}
.about-image{position:sticky;top:100px}
.profile-img{width:100%;max-width:400px;border-radius:12px;display:block;margin:0 auto;box-shadow:0 4px 24px rgba(15,30,61,.15)}
.contact-inner{display:grid;grid-template-columns:1fr 1.3fr;gap:60px;max-width:900px;margin:0 auto}
.contact-info{display:flex;flex-direction:column;gap:28px}
.info-label{display:block;font-size:.8rem;text-transform:uppercase;letter-spacing:1px;color:var(--gold);margin-bottom:6px;font-family:'Helvetica Neue',Arial,sans-serif;font-weight:600}
.info-item a,.info-item span{color:var(--navy);font-size:1.05rem}
.contact-form{display:flex;flex-direction:column;gap:16px}
.contact-form input,.contact-form textarea{padding:14px 18px;border:1px solid #d0d0d0;border-radius:6px;font-size:1rem;font-family:'Helvetica Neue',Arial,sans-serif;background:var(--white)}
.contact-form input:focus,.contact-form textarea:focus{outline:none;border-color:var(--gold)}
.contact-form .btn{align-self:flex-start;margin-top:8px}
.site-footer{background:var(--navy);color:rgba(255,255,255,.7);padding:40px 0}
.footer-inner{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px}
.footer-brand{display:flex;align-items:center;gap:10px;color:var(--white);font-size:1.1rem}
.footer-brand .logo-mark{width:36px;height:36px;font-size:.85rem}
.footer-copy{font-size:.9rem;font-family:'Helvetica Neue',Arial,sans-serif}
.footer-links{display:flex;gap:24px}
.footer-links a{color:rgba(255,255,255,.7);font-family:'Helvetica Neue',Arial,sans-serif;font-size:.9rem}
.footer-links a:hover{color:var(--gold-light)}
@media(max-width:900px){.transform-grid{grid-template-columns:repeat(2,1fr)}.item-list{grid-template-columns:1fr}}
@media(max-width:800px){.about-inner{grid-template-columns:1fr}.about-image{display:none}}
@media(max-width:700px){.contact-inner{grid-template-columns:1fr}}
@media(max-width:640px){.hero h1{font-size:2rem}.hero-subtitle{font-size:1.1rem}.nav{gap:14px}.logo-text{display:none}.steps-grid{grid-template-columns:1fr}.transform-grid{grid-template-columns:1fr}.subsection-desc,.item-list,.result-box{padding-left:0;margin-left:0}}
</style>
</head>
<body>
<header class="site-header"><div class="container header-inner"><a href="/" class="logo"><img src="/SP Logo big.png" alt="Sabara Partners" style="height:90px;width:auto"></a><nav class="nav"><a href="#approach">Approach</a><a href="#transaction">Transaction</a><a href="#transformation">Transformation</a><a href="#about">About</a><a href="#contact">Contact</a></nav></div></header>
<section class="hero"><div class="container"><div class="hero-tagline">DILIGENCE &middot; M&amp;A SUPPORT &middot; VALUE CREATION</div><h1>Transaction and Support.</h1><p class="hero-subtitle">We help private equity and corporate teams evaluate opportunities, prepare for transactions, and turn investment priorities into practical improvement plans.</p><div class="hero-actions"><a href="#contact" class="btn btn-primary">Discuss your next priority</a><a href="#transaction" class="btn btn-outline">See what we do</a></div></div></section>
<section id="approach" class="section section-alt"><div class="container"><h2 class="section-title">Approach</h2><p class="section-subtitle">From the evidence to an execution roadmap</p><div class="steps-grid"><div class="step"><span class="step-num">01</span><h3>Assess the business</h3><p>Evidence and assumptions.</p></div><div class="step"><span class="step-num">02</span><h3>Inform the deal</h3><p>Risks and decision implications.</p></div><div class="step"><span class="step-num">03</span><h3>Plan value creation</h3><p>Priorities and execution roadmap.</p></div></div></div></section>
<section id="transaction" class="section"><div class="container"><h2 class="section-title">Transaction</h2><p class="section-subtitle">Support the process on both sides of the deal</p>
<div class="subsection"><div class="subsection-header"><div class="subsection-icon">&#129309;</div><h3 class="subsection-title">M&amp;A Support</h3></div><p class="subsection-desc">Support the process on both sides of the deal.</p><div class="item-list"><div class="item"><h4>Buy side</h4><p>Evaluate targets, coordinate diligence, and prepare decision materials.</p></div><div class="item"><h4>Sell side</h4><p>Strengthen the business narrative, prepare supporting materials, and manage buyer questions.</p></div></div><div class="result-box"><strong>Result:</strong> A clearer case and a coordinated process.</div></div>
<div class="subsection"><div class="subsection-header"><div class="subsection-icon">&#9881;</div><h3 class="subsection-title">Integration Management Office</h3></div><p class="subsection-desc">Run the integration as one program, from signing through Day 1 and beyond.</p><div class="item-list"><div class="item"><h4>Setup and governance</h4><p>Establish the IMO structure, steering committee, decision rights, and cadence, with a named lead for every workstream.</p></div><div class="item"><h4>Integration planning</h4><p>Build the integrated plan across functions, with Day 1 requirements, milestones, and dependencies.</p></div><div class="item"><h4>Synergy and benefits tracking</h4><p>Turn the synergy case into initiatives with owners, targets, and timing, and report progress against the baseline.</p></div><div class="item"><h4>Risk and issue management</h4><p>Maintain a single log of risks, issues, and cross-workstream dependencies, and escalate what needs a decision.</p></div><div class="item"><h4>Change management and communications</h4><p>Coordinate messaging to employees, customers, and partners, and track adoption of new ways of working.</p></div></div><div class="result-box"><strong>Result:</strong> One integrated plan, clear accountability, and regular reporting to leadership.</div></div>
</div></section>
<section id="transformation" class="section section-alt"><div class="container"><h2 class="section-title">Transformation</h2><p class="section-subtitle">Move from identified potential to execution.</p><div class="transform-grid"><div class="transform-card"><h4>Prioritize and build</h4><p>Prioritize growth and margin opportunities, and build initiatives with management.</p></div><div class="transform-card"><h4>Cost and margin improvement</h4><p>Reduce cost to serve and overhead, and lift gross margin through procurement, product mix, and process changes.</p></div><div class="transform-card"><h4>Operational performance</h4><p>Raise productivity, throughput, and quality, and remove the bottlenecks that limit capacity.</p></div><div class="transform-card"><h4>Technology and digital enablement</h4><p>Prioritize the systems, automation, and data investments that pay back within the plan.</p></div><div class="transform-card"><h4>Organization and talent</h4><p>Align the operating model, leadership, and incentives to the value creation plan.</p></div><div class="transform-card"><h4>Track progress</h4><p>Establish owners, milestones, and performance measures to track progress.</p></div></div><div class="result-box" style="margin:32px auto 0;max-width:600px;text-align:center;margin-left:auto;margin-right:auto"><strong>Result:</strong> An actionable roadmap with clear accountability.</div></div></section>
<section id="about" class="section"><div class="container about-inner"><div class="about-text"><h2>Anuj Saxena, Founder</h2><span class="founder-role">25+ years in M&amp;A and value creation</span><p>I have spent more than 25 years in mergers and acquisitions and technology-driven value creation, working with executives and investors on the decisions that determine whether a deal pays back.</p><p>My career began in telecom engineering and product work at Motorola, Nokia Siemens Networks and NewNet. I then moved into strategy and transformation advisory at Accenture Strategy, AlixPartners and Portage Point Partners, and later led technology, media and telecom transaction-to-transformation work at a global advisory firm.</p><p>Sabara Partners lets me work directly with clients, with fewer layers between the advice and the people who act on it. Many clients need a focused workstream, not a large team. I started Sabara Partners to offer experienced, hands-on support sized to the question, from a single diligence workstream to the full deal lifecycle.</p><div class="credentials"><div class="cred-item"><span class="cred-label">MBA</span><br><span>Kellogg School of Management, 2006</span></div><div class="cred-item"><span class="cred-label">MS, Electrical Engineering</span><br><span>University of Michigan, 1999</span></div><div class="cred-item"><span class="cred-label">BS, Electrical Engineering</span><br><span>Wayne State University, 1998</span></div><div class="cred-item"><span class="cred-label">Based in</span><br><span>Chicago area</span></div></div></div><div class="about-image"><img class="profile-img" src="https://i.imgur.com/qrd5Fli.png" onerror="this.onerror=null;this.src='https://i.imgur.com/qrd5Fli.jpg'" alt="Anuj Saxena, Founder" /></div></div></section>
<section id="contact" class="section section-alt"><div class="container"><h2 class="section-title">Discuss your next transaction or value creation priority.</h2><p class="section-subtitle">Engage Sabara Partners for a focused workstream or support across the deal lifecycle</p><div class="contact-inner"><div class="contact-info"><div class="info-item"><span class="info-label">Email</span><a href="mailto:sabarapartners@gmail.com">sabarapartners@gmail.com</a></div><div class="info-item"><span class="info-label">Location</span><span>Chicago area</span></div></div><div class="contact-form"><script type="text/javascript" src="https://www.jotform.com/jsform/263147173288059"></script></div></div></div></section>
<footer class="site-footer"><div class="container footer-inner"><div class="footer-brand"><img src="/SP Logo small.png" alt="Sabara Partners" style="height:70px;width:auto"></div><p class="footer-copy">&copy; 2026 Sabara Partners</p><div class="footer-links"><a href="#approach">Approach</a><a href="#transaction">Transaction</a><a href="#transformation">Transformation</a><a href="#about">About</a><a href="#contact">Contact</a></div></div></footer>
</body>
</html>`;
    return new Response(html, {
      headers: { "Content-Type": "text/html;charset=UTF-8" }
    });
  }
};
