import LegalLayout, { Field } from "../components/legal/LegalLayout";

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Notice"
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

      <h2>4. Third-Party Service Providers</h2>
      <p>CareerSystemPro may rely on third-party providers for website hosting, domain and security services, payment processing, digital product delivery, and analytics.</p>
      <p>Depending on the services actually enabled, these providers may include Vercel, Cloudflare, Hotmart, and analytics providers.</p>
      <p>These providers process information under their own terms and privacy practices, as applicable. Their involvement and the information shared with them depend on the features in use and the customer's interaction with the website or checkout.</p>

      <h2>5. Cookies and Similar Technologies</h2>
      <p>The website or its service providers may use essential technologies needed to operate and secure the website. Analytics or advertising cookies and similar technologies should only be enabled and used in accordance with applicable requirements and the site's actual configuration.</p>
      <p>Where applicable, customers can manage cookies through browser settings and any privacy controls made available on the website. Disabling certain technologies may affect some website features.</p>

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

      <h2>9. Children's Privacy</h2>
      <p>CareerSystemPro is intended for adult professionals and is not designed to target children. Please do not submit personal information through the website if you are not legally permitted to do so.</p>

      <h2>10. Changes to This Notice</h2>
      <p>This Notice may be updated to reflect changes in legal requirements, website features, or data practices. The latest version will be published on this page with its updated effective date.</p>

      <h2>11. Contact</h2>
      <p>CareerSystemPro</p>
      <p>Legal name: <Field name="legalName" placeholder="[INSERT FULL LEGAL NAME]" /></p>
      <p>Address: <Field name="address" placeholder="[INSERT ADDRESS REQUIRED FOR PRIVACY AND LEGAL NOTICES]" /></p>
      <p>Email: <Field name="privacyEmail" placeholder="[INSERT PRIVACY EMAIL]" /></p>
    </LegalLayout>
  );
}
