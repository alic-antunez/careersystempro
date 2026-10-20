import LegalLayout, { Field } from "../components/legal/LegalLayout";

export default function RefundPolicy() {
  return (
    <LegalLayout
      title="Refund Policy"
      description="CareerSystemPro refund policy: the 7-day refund period for the digital toolkit and how to request a refund through Hotmart."
    >
      <p>CareerSystemPro provides digital resources designed to help IT professionals improve their LinkedIn profiles and job-search materials.</p>

      <h2>7-Day Refund Guarantee</h2>
      <p>Eligible purchases of the CareerSystemPro digital toolkit are covered by a 7-day refund period, as displayed at checkout and subject to applicable law.</p>
      <p>You may request a refund within 7 calendar days of your purchase through Hotmart's refund process.</p>

      <h2>How to Request a Refund</h2>
      <ol>
        <li>
          Visit{" "}
          <a href="https://refund.hotmart.com/" target="_blank" rel="noopener noreferrer">
            https://refund.hotmart.com/<span className="sr-only"> (opens in a new tab)</span>
          </a>
          .
        </li>
        <li>Enter the transaction information requested by Hotmart.</li>
        <li>Follow the verification instructions to submit your request.</li>
      </ol>
      <p>If you need assistance, you may also contact the seller using the support email provided in your purchase confirmation.</p>

      <h2>Refund Processing</h2>
      <p>Refund requests are handled according to Hotmart's procedures and applicable terms. Once approved, refunds are generally returned through the original payment method. The time it takes for funds to appear may depend on Hotmart, your payment provider, or your bank.</p>

      <h2>Important Information</h2>
      <p>CareerSystemPro provides digital educational materials, including guides, templates, checklists, keyword resources, outreach scripts, and action plans. It does not guarantee interviews, job offers, recruiter responses, salary increases, or employment outcomes.</p>
      <p>This policy does not exclude or limit any consumer rights that cannot legally be excluded or restricted under applicable law.</p>

      <h2>Contact</h2>
      <p>CareerSystemPro</p>
      <p>Email: <Field name="supportEmail" placeholder="[INSERT SUPPORT EMAIL]" /></p>
    </LegalLayout>
  );
}
