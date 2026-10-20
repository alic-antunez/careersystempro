import LegalLayout, { Field } from "../components/legal/LegalLayout";
import { Link } from "../router";

export default function TermsAndConditions() {
  return (
    <LegalLayout
      title="Terms and Conditions"
      description="Terms and Conditions for purchases of CareerSystemPro digital products: delivery, license, refunds, privacy and applicable law."
    >
      <p>These Terms and Conditions govern access to and purchases of digital products offered under the CareerSystemPro brand through careersystempro.com and the applicable checkout platform.</p>

      <h2>1. Seller Information</h2>
      <p>CareerSystemPro is a commercial brand operated by an individual seller based in Mexico.</p>
      <p>Seller's legal name: <Field name="legalName" placeholder="[INSERT FULL LEGAL NAME]" /></p>
      <p>Country: Mexico</p>
      <p>Business contact email: <Field name="supportEmail" placeholder="[INSERT SUPPORT EMAIL]" /></p>
      <p>Address for legal and consumer notices: <Field name="address" placeholder="[INSERT REQUIRED ADDRESS]" /></p>

      <h2>2. Products and Digital Delivery</h2>
      <p>CareerSystemPro offers digital educational resources for IT professionals, which may include:</p>
      <ul>
        <li>LinkedIn optimization guides.</li>
        <li>IT keyword lists.</li>
        <li>LinkedIn profile templates.</li>
        <li>Profile review checklists.</li>
        <li>Job-search action plans.</li>
        <li>Recruiter outreach scripts.</li>
      </ul>
      <p>The exact materials included in a purchase are those described on the relevant sales page at the time of purchase.</p>
      <p>After payment confirmation, access or download instructions are provided through Hotmart or the delivery method specified at checkout. Delivery timing may depend on payment confirmation and the payment method.</p>

      <h2>3. Pricing and Payments</h2>
      <p>The price, currency, applicable taxes, payment options, and any additional charges are displayed during checkout. Hotmart or its payment partners may process the transaction.</p>
      <p>The final amount charged is the amount confirmed by the checkout provider before the purchase is completed.</p>

      <h2>4. License and Permitted Use</h2>
      <p>Unless expressly stated otherwise, purchases grant the customer a personal, non-exclusive, non-transferable license to use the purchased materials for their own professional development and job search.</p>
      <p>Customers may adapt the templates for their own LinkedIn profiles, résumés, and professional communications.</p>
      <p>Customers may not resell, redistribute, publish, sublicense, or commercially exploit the materials, in whole or in part, without prior written permission from the seller.</p>

      <h2>5. Intellectual Property</h2>
      <p>The CareerSystemPro brand, original written materials, designs, and other original content are owned by the seller or used with permission, as applicable. Purchasing a product does not transfer ownership of the underlying intellectual property.</p>

      <h2>6. No Employment Guarantee</h2>
      <p>CareerSystemPro provides educational resources and practical guidance. Results depend on factors including the user's experience, qualifications, market conditions, and use of the materials.</p>
      <p>No guarantee is made that a customer will obtain interviews, recruiter responses, job offers, promotions, or a particular salary.</p>

      <h2>7. Refunds</h2>
      <p>Eligible purchases are covered by a 7-day refund period, as displayed at checkout and subject to applicable law.</p>
      <p>
        Refund requests must be submitted through Hotmart's refund process at{" "}
        <a href="https://refund.hotmart.com/" target="_blank" rel="noopener noreferrer">
          https://refund.hotmart.com/<span className="sr-only"> (opens in a new tab)</span>
        </a>{" "}
        within the applicable guarantee period.
      </p>
      <p>Refunds are processed according to Hotmart's applicable procedures and the payment method used. This section does not waive or restrict consumer rights that cannot legally be excluded under applicable law.</p>
      <p>For full details, see our <Link href="/refund-policy">Refund Policy</Link>.</p>

      <h2>8. Acceptable Use</h2>
      <p>Customers must not use the website or materials for unlawful purposes, infringe third-party rights, interfere with the website's operation, or misrepresent the materials as their own work for resale or redistribution.</p>

      <h2>9. Website Availability and Updates</h2>
      <p>The website and digital resources may be updated, corrected, or temporarily unavailable for maintenance. Nothing in this section excludes liability where such exclusion is prohibited by law.</p>

      <h2>10. Privacy</h2>
      <p>Personal information is handled as described in the CareerSystemPro <Link href="/privacy-policy">Privacy Notice</Link>.</p>

      <h2>11. Applicable Law</h2>
      <p>These Terms are intended to operate consistently with applicable Mexican law and any mandatory consumer protections applicable to the customer. Nothing here is intended to deprive a consumer of protections that cannot legally be waived.</p>

      <h2>12. Changes to These Terms</h2>
      <p>These Terms may be updated from time to time. The latest version and its effective date will be published on this website. Changes do not retroactively remove rights attached to a completed purchase.</p>

      <h2>13. Contact</h2>
      <p>CareerSystemPro</p>
      <p>Legal name: <Field name="legalName" placeholder="[INSERT FULL LEGAL NAME]" /></p>
      <p>Email: <Field name="supportEmail" placeholder="[INSERT SUPPORT EMAIL]" /></p>
      <p>Address for legal and consumer notices: <Field name="address" placeholder="[INSERT REQUIRED ADDRESS]" /></p>
    </LegalLayout>
  );
}
