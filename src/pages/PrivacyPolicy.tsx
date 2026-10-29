import LegalLayout, { Field } from "../components/legal/LegalLayout";
import { PRIVACY_NOTICE_UPDATED } from "../config/legal";

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Notice"
      updated={PRIVACY_NOTICE_UPDATED}
      description="How CareerSystemPro handles personal information for careersystempro.com and the sale and delivery of its digital products."
    >
      <p>This Privacy Notice explains how the individual operating CareerSystemPro handles personal information in connection with careersystempro.com and the sale and delivery of CareerSystemPro digital products.</p>

      <h2>1. Identity of the Data Controller</h2>
      <p>Commercial name: CareerSystemPro</p>
      <p>Legal name of the individual seller: <Field name="legalName" placeholder="[INSERT FULL LEGAL NAME]" /></p>
      <p>Country: Mexico</p>
      <p>Address: <Field name="address" placeholder="[INSERT ADDRESS REQUIRED FOR PRIVACY AND LEGAL NOTICES]" /></p>
      <p>Privacy contact email: <Field name="privacyEmail" placeholder="[INSERT PRIVACY EMAIL]" /></p>
      <p>The individual identified above is responsible for personal information processed directly through CareerSystemPro, subject to the roles and responsibilities of third-party service providers.</p>

      <h2>2. Personal Information We May Process</h2>
      <p>Depending on how customers interact with the website or purchase a product, information may include:</p>
      <ul>
        <li>Contact and identification details, such as name and email address.</li>
        <li>Purchase and transaction information, such as product purchased, transaction reference, payment status, and refund status.</li>
        <li>Messages and information voluntarily provided when contacting support.</li>
        <li>Technical information, such as browser, device, website usage, and diagnostic data, if collected by the website or enabled analytics tools.</li>
      </ul>
      <p>Payment card or banking information may be collected and processed directly by Hotmart or its payment partners. CareerSystemPro does not intend to collect or store full payment card details directly.</p>

      <h2>3. Purposes of Processing</h2>
      <p>Personal information may be used, as applicable, to:</p>
      <ul>
        <li>Process and verify purchases.</li>
        <li>Provide access to purchased digital materials.</li>
        <li>Respond to customer support requests.</li>
        <li>Handle refunds, disputes, and transaction-related issues.</li>
        <li>Maintain website security and prevent fraud.</li>
        <li>Meet applicable legal, accounting, and tax obligations.</li>
        <li>Understand website performance and improve the customer experience, where analytics tools are enabled and used lawfully.</li>
        <li>Send promotional communications only where permitted and, when required, with appropriate consent.</li>
      </ul>

      <h2>4. Third-Party Service Providers and Tools</h2>
      <p>CareerSystemPro relies on third-party providers for website hosting, domain and security services, payment processing, digital product delivery, and analytics. The tools in use on this website are:</p>
      <ul>
        <li><strong>Vercel</strong> hosts the website. With your analytics consent, Vercel Web Analytics measures page views and basic usage without using cookies.</li>
        <li><strong>Google Analytics 4</strong> (Google) is used only with your analytics consent. It sets cookies and measures page views and clicks on our purchase buttons. A click on a purchase button shows interest in buying; it is not a completed purchase.</li>
        <li><strong>Google Fonts</strong> loads the website's typefaces from Google's servers when a page loads, so Google may receive your IP address and browser information.</li>
        <li><strong>Hotmart</strong> processes payments and delivers the digital products on its own checkout pages. Hotmart's own privacy practices, cookies, and tracking technologies apply there, and CareerSystemPro does not control them.</li>
        <li><strong>Meta Pixel</strong> (Meta Platforms, operator of Facebook and Instagram) is used only with your advertising consent. It sets cookies (_fbp and _fbc) and sends Meta your page views and clicks on our purchase buttons, together with browser information, so we can measure our ads and show them to people who visited this site. Meta processes this data under its own privacy practices.</li>
      </ul>
      <p>We do not use other advertising or retargeting tools on this website. Any we add in the future will respect the choices described in Section 5 and this Notice will be updated.</p>
      <p>These providers process information under their own terms and privacy practices, as applicable.</p>

      <h2>5. Cookies, Consent, and Global Privacy Control</h2>
      <p>The website stores two items in your browser's local storage that are essential to how it works: your language preference and your privacy choice. They are not used for tracking.</p>
      <p>Optional tools are off by default. Until you make a choice, Google Analytics 4, Vercel Web Analytics and the Meta Pixel do not load, and no analytics or advertising data is collected. You can choose Accept All, Reject Non-Essential, or Customize Preferences, which lets you set Analytics and Advertising separately.</p>
      <ul>
        <li><strong>Essential:</strong> language preference and consent choice. Always on.</li>
        <li><strong>Analytics:</strong> Google Analytics 4 sets first-party cookies (named _ga and _ga_ followed by an identifier) to recognize returning browsers and sessions. Vercel Web Analytics does not use cookies.</li>
        <li><strong>Advertising:</strong> the Meta Pixel sets first-party cookies (_fbp and _fbc) and sends events to Meta to measure our ads and show them to people who visited this site. This setting will also apply to any other advertising tool we may add.</li>
      </ul>
      <p>You can review or change your choice at any time with the "Your Privacy Choices" link in the footer. If you withdraw analytics consent, further collection stops and we remove the Google Analytics cookies from your browser. If you withdraw advertising consent, we stop sending events to Meta and remove the Meta Pixel cookies. Data already collected may remain in Google Analytics or with Meta for the retention periods configured there.</p>
      <p>If your browser sends a Global Privacy Control (GPC) signal, we treat it as an opt-out of advertising: the Advertising setting stays off and cannot be turned on. This means the Meta Pixel never loads for those visitors. A GPC signal does not by itself change your Analytics setting, which stays under your control. We do not currently change how the website behaves based on the "Do Not Track" browser setting.</p>
      <p>You can also manage or delete cookies through your browser settings. Disabling certain technologies may affect some website features.</p>

      <h2>6. Data Retention and Security</h2>
      <p>Personal information is retained only for as long as reasonably necessary for the purposes described in this Notice, including transaction support, legal compliance, accounting, and dispute resolution.</p>
      <p>Reasonable administrative, technical, and organizational safeguards are used to protect information. No method of electronic storage or transmission can be guaranteed to be completely secure.</p>

      <h2>7. Disclosure and International Processing</h2>
      <p>Information may be processed or stored by service providers in Mexico or other countries, depending on their infrastructure and operations. Where required, applicable legal safeguards will be used for transfers or disclosures.</p>
      <p>CareerSystemPro does not sell personal information to third parties. Information may be disclosed to service providers, payment partners, or public authorities when necessary for the purposes described above or when legally required.</p>

      <h2>8. Your Privacy Rights</h2>
      <p>Subject to applicable law, customers may have rights to access, rectify, cancel, or oppose the processing of their personal information (ARCO rights), and to revoke consent where applicable.</p>
      <p>To submit a request, email <Field name="privacyEmail" placeholder="[INSERT PRIVACY EMAIL]" /> with the subject line "Privacy Rights Request." Describe the request and provide sufficient information to help verify identity. Additional information may be requested when legally necessary.</p>
      <p>Requests will be handled in accordance with applicable law.</p>
      <p>Customers may also contact CareerSystemPro to ask how to limit the use or disclosure of their personal information or to opt out of promotional communications.</p>

      <h2>9. US State Privacy Rights</h2>
      <p>Depending on where you live, state privacy laws (for example in California, Colorado, Connecticut, Texas, and Virginia) may give you rights to know or access the personal information we hold about you, correct it, delete it, obtain a copy, opt out of the sale of personal information or of targeted advertising and sharing for cross-context behavioral advertising, and not be treated differently for exercising these rights. These laws apply only to businesses that meet certain thresholds, and the rights available vary by state.</p>
      <p>CareerSystemPro does not sell personal information. With your advertising consent, the Meta Pixel shares limited information (page views, button clicks, and cookie identifiers) with Meta for ad measurement and retargeting, which some state laws treat as targeted advertising or sharing. You can opt out at any time with the "Your Privacy Choices" link in the footer, and a Global Privacy Control signal keeps it off automatically.</p>
      <p>To exercise a right or appeal a decision, email <Field name="privacyEmail" placeholder="[INSERT PRIVACY EMAIL]" /> with the subject line "Privacy Rights Request." We may need to verify your identity. Where the law permits, you may use an authorized agent. Opt-out preference signals such as Global Privacy Control are described in Section 5.</p>

      <h2>10. Children's Privacy</h2>
      <h2>11. Changes to This Notice</h2>
      <p>This Notice may be updated to reflect changes in legal requirements, website features, or data practices. The latest version will be published on this page with its updated effective date.</p>

      <h2>12. Contact</h2>
      <p>CareerSystemPro</p>
      <p>Legal name: <Field name="legalName" placeholder="[INSERT FULL LEGAL NAME]" /></p>
      <p>Address: <Field name="address" placeholder="[INSERT ADDRESS REQUIRED FOR PRIVACY AND LEGAL NOTICES]" /></p>
      <p>Email: <Field name="privacyEmail" placeholder="[INSERT PRIVACY EMAIL]" /></p>
    </LegalLayout>
  );
}
