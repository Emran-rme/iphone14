import { Link } from "react-router-dom";
import BottomNav from "../common/footer/BottomNav";
import Breadcrumb from "../common/footer/Breadcrumb";
import CopyRight from "../common/footer/CopyRight";

const Footer = () => {
  return (
    <footer id="ac-globalfooter">
      <div className="ac-gf-content">
        <section className="text-center text-[#1d1d1f]">
          <div className="flex justify-center pb-[56px] flex-wrap border-b border-[#d2d2d7]">
            <section className="block ac-gf-buystrip-info-column">
              <div className="mt-0 mx-auto pt-14 relative text-center w-[216px] z-[1]">
                <Link
                  to="/"
                  className="box-border block cursor-pointer text-inherit link"
                >
                  <figure className="ac-gf-buystrip-info-icon ac-gf-buystrip-info-icon-shipping"></figure>
                  <h3 className="ac-gf-buystrip-info-title text-[#1d1d1f]">
                    Fast, free delivery
                  </h3>
                  <p className="ac-gf-buystrip-info-copy">
                    Or pick up available items at an Apple Store.
                  </p>
                  <span className="mt-[0.8em] block text-[#06c]">
                    Learn more
                  </span>
                </Link>
              </div>
            </section>
            <section className="block ac-gf-buystrip-info-column">
              <div className="mt-0 mx-auto pt-14 relative text-center w-[216px] z-[1]">
                <Link
                  to="/"
                  className="box-border block cursor-pointer text-inherit link"
                >
                  <figure className="ac-gf-buystrip-info-icon ac-gf-buystrip-info-icon-financing"></figure>
                  <h3 className="ac-gf-buystrip-info-title text-[#1d1d1f]">
                    Pay monthly at 0% APR
                  </h3>
                  <p className="ac-gf-buystrip-info-copy">
                    You can pay over time when you choose to check out with
                    Apple Card Monthly Installments.†
                  </p>
                  <span className="mt-[0.8em] block text-[#06c]">
                    Learn more
                  </span>
                </Link>
              </div>
            </section>
            <section className="block ac-gf-buystrip-info-column">
              <div className="mt-0 mx-auto pt-14 relative text-center w-[216px] z-[1]">
                <Link
                  to="/"
                  className="box-border block cursor-pointer text-inherit link"
                >
                  <figure className="ac-gf-buystrip-info-icon ac-gf-buystrip-info-icon-help"></figure>
                  <h3 className="ac-gf-buystrip-info-title text-[#1d1d1f]">
                    Get help buying
                  </h3>
                  <p className="ac-gf-buystrip-info-copy">
                    Have a question? Call a Specialist or chat online. Call
                    1-800-MY-APPLE.
                  </p>
                  <span className="mt-[0.8em] block text-[#06c]">
                    Learn more
                  </span>
                </Link>
              </div>
            </section>
          </div>
        </section>
        <section className="block  pt-[17px] px-0 pb-[11px] border-b border-[#d2d2d7] ac-gf-sosumi">
          <ul className="m-0 list-none ac-gf-sosumi">
            <li id="footnote-1">
              <small>*</small> Pricing for iPhone&nbsp;14 and
              iPhone&nbsp;14&nbsp;Plus includes a $30 connectivity discount that
              requires activation with AT&amp;T, T-Mobile, Sprint, or Verizon.
              Available to qualified customers and requires 24‑month installment
              loan when you select Citizens One or Apple&nbsp;Card Monthly
              Installments (ACMI) as payment type at checkout at Apple. iPhone
              activation required with AT&amp;T, T-Mobile, Sprint, or Verizon
              for purchases made with ACMI at an Apple&nbsp;Store. Subject to
              credit approval and credit limit. Taxes and shipping are not
              included in ACMI and are subject to your card’s variable APR.
              Additional Apple&nbsp;Card Monthly Installments terms are in the
              Apple&nbsp;Card Customer Agreement. Additional iPhone Payments
              terms are{" "}
              <a href="/legal/sales-support/iphoneinstallments_us/">here</a>.
              ACMI is not available for purchases made online at special
              storefronts. The last month’s payment for each product will be the
              product’s purchase price, less all other payments at the monthly
              payment amount.
            </li>
            <li id="footnote-2">
              <small>**</small> Pricing includes a $30 connectivity discount
              that requires activation with AT&amp;T, T‑Mobile, Sprint, or
              Verizon.
            </li>
          </ul>
          <ol className="m-0 list-outside py-0 px-[17px]">
            <li id="footnote-3">
              iPhone&nbsp;14 and iPhone&nbsp;14&nbsp;Plus are splash, water, and
              dust resistant and were tested under controlled laboratory
              conditions with a rating of IP68 under IEC standard 60529 (maximum
              depth of 6 meters up to 30 minutes). Splash, water, and dust
              resistance are not permanent conditions. Resistance might decrease
              as a result of normal wear. Do not attempt to charge a wet iPhone;
              refer to the user guide for cleaning and drying instructions.
              Liquid damage not covered under warranty.
            </li>
            <li id="footnote-4">
              Service is included for free for two years with the activation of
              any iPhone&nbsp;14 model. Connection and response times vary based
              on location, site conditions, and other factors. See{" "}
              <a href="https://support.apple.com/kb/HT213426">
                https://support.apple.com/kb/HT213426
              </a>{" "}
              for more information.
            </li>
            <li id="footnote-5">
              Emergency SOS uses a cellular connection or Wi‑Fi Calling.
            </li>
            <li id="footnote-6">
              All battery claims depend on network configuration and many other
              factors; actual results will vary. Battery has limited recharge
              cycles and may eventually need to be replaced. Battery life and
              charge cycles vary by use and settings. See{" "}
              <a href="/batteries/">apple.com/batteries</a> and{" "}
              <a href="/iphone/battery.html">apple.com/iphone/battery.html</a>{" "}
              for more information.
            </li>
            <li id="footnote-7">Accessories sold separately.</li>
            <li id="footnote-8">
              The display has rounded corners that follow a beautiful curved
              design, and these corners are within a standard rectangle. When
              measured as a standard rectangular shape, the screen is
              5.42&nbsp;inches (iPhone&nbsp;13&nbsp;mini,
              iPhone&nbsp;12&nbsp;mini), 5.85&nbsp;inches
              (iPhone&nbsp;11&nbsp;Pro, iPhone&nbsp;XS, iPhone&nbsp;X),
              6.06&nbsp;inches (iPhone&nbsp;14, iPhone&nbsp;13&nbsp;Pro,
              iPhone&nbsp;13, iPhone&nbsp;12&nbsp;Pro, iPhone&nbsp;12,
              iPhone&nbsp;11, iPhone&nbsp;XR), 6.12&nbsp;inches
              (iPhone&nbsp;14&nbsp;Pro), 6.46&nbsp;inches
              (iPhone&nbsp;11&nbsp;Pro&nbsp;Max, iPhone&nbsp;XS&nbsp;Max),
              6.68&nbsp;inches (iPhone&nbsp;14&nbsp;Plus,
              iPhone&nbsp;13&nbsp;Pro&nbsp;Max,
              iPhone&nbsp;12&nbsp;Pro&nbsp;Max), or 6.69&nbsp;inches
              (iPhone&nbsp;14&nbsp;Pro&nbsp;Max) diagonally. Actual viewable
              area is&nbsp;less.
            </li>
            <li id="footnote-9">
              iPhone&nbsp;14 models are activated with an eSIM and do not
              support a physical SIM. Use of an eSIM requires a carrier that
              supports eSIM and a wireless service plan (which may include
              restrictions on switching service providers and roaming, even
              after contract expiration). See your carrier for details. To learn
              more, visit <a href="/esim/">apple.com/esim</a>.
            </li>
            <li id="footnote-10">
              Apple&nbsp;Fitness+ requires an iPhone&nbsp;8 or later with
              iOS&nbsp;16.1.
            </li>
            <li id="footnote-11">
              Data plan required. 5G is available in select markets and through
              select carriers. Speeds vary based on site conditions and carrier.
              For details on 5G support, contact your carrier and see{" "}
              <a href="/iphone/cellular/">apple.com/iphone/cellular</a>.
            </li>
            <li id="footnote-12">
              <p>
                <strong>AT&amp;T Special Deal:</strong> Monthly price reflects
                net monthly payment, after application of AT&amp;T trade‑in
                credit applied over 36 months with purchase of an
                iPhone&nbsp;14&nbsp;Pro, iPhone&nbsp;14&nbsp;Pro&nbsp;Max,
                iPhone&nbsp;14, or iPhone&nbsp;14&nbsp;Plus and trade‑in of
                eligible smartphone. Receive credit with purchase of an
                iPhone&nbsp;14, iPhone&nbsp;14&nbsp;Plus,
                iPhone&nbsp;14&nbsp;Pro, or iPhone&nbsp;14&nbsp;Pro&nbsp;Max of
                either $800 or $350 (based upon the model and condition of your
                trade‑in smartphone), max bill credits will not exceed the cost
                of the device. Requires upgrade of an existing line or
                activation of a new line and purchase of a new iPhone&nbsp;14,
                iPhone&nbsp;14&nbsp;Plus, iPhone&nbsp;14&nbsp;Pro, or
                iPhone&nbsp;14&nbsp;Pro&nbsp;Max on qualifying 36 month 0% APR
                installment plan, subject to carrier credit qualification.
                AT&amp;T Installment Plan with Next Up is not eligible for this
                promotion. $0 down for well qualified customers only, or down
                payment may be required and depends on a variety of factors. Tax
                on full retail price due at sale. Requires activation on
                eligible unlimited plan. If you cancel eligible wireless
                service, credits will stop and you will owe the remaining device
                balance. Activation/Upgrade Fee: $35. Trade in device may not be
                on existing installment plan. Bill credits are applied as a
                monthly credit over the 36 month installment plan. Credits start
                within 3 bills. Will receive catchup credits once credits start.
                Wireless line must be on an installment agreement, active, and
                in good standing for 30 days to qualify. Installment agreement
                starts when device is shipped. To get all credits, device must
                remain on agreement for entire term and you must keep eligible
                service on device for entire installment term. Limited time
                offer; subject to change. Limits: one trade‑in per qualifying
                purchase and one credit per line. May not be combinable with
                other offers, discounts, or credits. Purchase, financing, other
                limits, and restrictions apply. Price for iPhone&nbsp;14 and
                iPhone&nbsp;14&nbsp;Plus includes $30 AT&amp;T connectivity
                discount. Activation required.
              </p>
              <p>
                <strong>Sprint Special Deal:</strong> Sprint trade‑in credit in
                the form of a rebate with virtual prepaid card when you trade in
                a qualifying device. Limited-time offer; subject to change.
                Requires activation on any Sprint data plan and submission of a
                promo code at{" "}
                <a href="https://promotions.t-mobile.com" rel="nofollow">
                  promotions.t-mobile.com
                </a>
                . $200 rebate via virtual prepaid Mastercard® Card, which you
                can use online or in‑store via accepted mobile payment apps; no
                cash access &amp; expires in 6 months from issuance. Card is
                issued by Sunrise Banks N.A., Member FDIC, pursuant to a license
                from Mastercard International Incorporated. Mastercard is a
                registered trademark of Mastercard International Incorporated.
                Use of this card constitutes acceptance of the terms and
                conditions stated in the Cardholder Agreement. Lines must be
                active and in good standing when card is issued. Allow up to 2
                billing cycles after fulfillment of offer requirements. Max 4
                per account offer/discounted devices/account. May not be
                combined with some offers or discounts. Sales tax may be
                assessed on full value of new iPhone. Requires trade‑in of an
                iPhone&nbsp;XR or newer in good condition, including
                iPhone&nbsp;SE (2nd generation). Must be at least 18 to trade
                in. Apple or its trade‑in partners reserve the right to refuse
                or limit any trade‑in transaction for any reason. in‑store
                trade‑in requires presentation of a valid, government-issued
                photo ID (local law may require saving this information).
                in‑store promotion availability subject to local law; speak to a
                Specialist to learn more. Additional terms from Apple, Sprint,
                and Apple’s trade‑in partners may apply.
              </p>
              <p>
                <strong>T‑Mobile Special Deal:</strong>
                Monthly price reflects net monthly payment, after application of
                T‑Mobile trade‑in credit applied over 24 months with purchase of
                an iPhone&nbsp;14&nbsp;Pro, iPhone&nbsp;14&nbsp;Pro&nbsp;Max,
                iPhone&nbsp;14, or iPhone&nbsp;14&nbsp;Plus and trade‑in of
                eligible smartphone. Receive credit with purchase of an
                iPhone&nbsp;14, iPhone&nbsp;14&nbsp;Plus,
                iPhone&nbsp;14&nbsp;Pro, or iPhone&nbsp;14&nbsp;Pro&nbsp;Max of
                $1000, $800, or $400 for customers on a Magenta® MAX plan (based
                upon the model and condition of your trade-in smartphone); or
                $500, $400, or $200 for customers on a non‑Magenta® MAX plan
                except Select Choice, Base Essentials, and Value Essentials
                (based upon the model and condition of your trade-in
                smartphone). Max bill credits will not exceed the cost of the
                device. Credit comprised of (i) Apple instant trade-in credit at
                checkout and (ii) T‑Mobile monthly bill credits applied over 24
                months. Customer must remain in the T‑Mobile Equipment
                Installment Program and on eligible date plan for 24 months and
                remain in good standing to receive the full benefit of the bill
                credits; allow 2 bill cycles from valid submission and
                validation of trade-in. Tax on pre-credit price due at sale.
                Limited-time offer; subject to change. Qualifying credit, data
                plan, and trade-in in good condition required. Max 4 promotional
                offers on any iPhone per account. May not be combinable with
                some offers or discounts. Price for iPhone 14 and iPhone 14 Plus
                includes $30 T‑Mobile connectivity discount. Activation
                required.
              </p>
              <p>
                <strong>Verizon Special Deal:</strong>
                Monthly price reflects net monthly payment, after application of
                Verizon trade‑in credit applied over 36 months with purchase of
                an iPhone&nbsp;14&nbsp;Pro, iPhone&nbsp;14&nbsp;Pro&nbsp;Max,
                iPhone&nbsp;14, or iPhone&nbsp;14&nbsp;Plus with credit of $800
                or $400 for customers on a Do More, Play More, Get More, or One
                Unlimited plan (based upon the model and condition of your
                trade‑in smartphone); or $400 or $200 for customers on a Start
                Unlimited plan (based upon the model and condition of your
                trade‑in smartphone). Credit comprised of (i) Apple instant
                trade‑in credit at checkout and (ii) Verizon monthly bill
                credits applied over 36 months. Customer must remain in the
                Verizon Device Payment Program for 36 months to receive the full
                benefit of the Verizon bill credits. Bill credits may take 1‑2
                bill cycles to appear. If it takes two cycles for bill credits
                to appear, you'll see the credit for the first cycle on your
                second bill in addition to that month's credit. Requires
                purchase and activation of a new iPhone&nbsp;14,
                iPhone&nbsp;14&nbsp;Plus, iPhone&nbsp;14&nbsp;Pro, or
                iPhone&nbsp;14&nbsp;Pro&nbsp;Max with the Verizon Device Payment
                Program at 0% APR for 36 months, subject to carrier credit
                qualification, and iPhone availability and limits. Taxes and
                shipping not included in monthly price. Sales tax may be
                assessed on full value of new iPhone. Requires eligible
                unlimited service plan. Requires trade‑in of eligible device in
                eligible condition. Must be at least 18 to trade‑in. Apple or
                its trade‑in partners reserve the right to refuse or limit any
                trade‑in transaction for any reason. In‑store trade‑in requires
                presentation of a valid, government‑issued photo ID (local law
                may require saving this information). In‑store promotion
                availability subject to local law; speak to a Specialist to
                learn more. Limited‑time offer; subject to change. Additional
                terms from Apple, Verizon, and Apple's trade‑in partners may
                apply. Price for iPhone&nbsp;14 and iPhone&nbsp;14&nbsp;Plus
                includes $30 Verizon connectivity discount. Activation required.
              </p>
            </li>
            <li id="footnote-13">
              Trade-in values will vary based on the condition, year, and
              configuration of your eligible trade‑in device. Not all devices
              are eligible for credit. You must be at least 18 years old to be
              eligible to trade in for credit or for an Apple Gift Card.
              Trade‑in value may be applied toward qualifying new device
              purchase, or added to an Apple Gift Card. Actual value awarded is
              based on receipt of a qualifying device matching the description
              provided when estimate was made. Sales tax may be assessed on full
              value of a new device purchase. In‑store trade‑in requires
              presentation of a valid photo ID (local law may require saving
              this information). Offer may not be available in all stores, and
              may vary between in‑store and online trade‑in. Some stores may
              have additional requirements. Apple or its trade‑in partners
              reserve the right to refuse or limit quantity of any trade‑in
              transaction for any reason. More details are available from
              Apple’s trade‑in partner for trade‑in and recycling of eligible
              devices. Restrictions and limitations may apply.
            </li>
            <li id="footnote-14">
              Program available for iPhone&nbsp;14 and iPhone&nbsp;14&nbsp;Pro.
              Available to qualified customers with a credit check and eligible
              U.S. credit or debit card. Requires a 24‑month installment loan
              with a 0% APR from Citizens Bank, N.A. (subject to any interest,
              fees, or other costs payable to the card issuer), purchase of
              AppleCare+ for iPhone, and iPhone activation with one of these
              national carriers: AT&amp;T, Sprint, Verizon, or T‑Mobile. Sales
              tax and any applicable fees due at time of purchase. Full terms
              apply.
            </li>
          </ol>
          <ul>
            <li>
              Some features may not be available for all countries or all areas.{" "}
              <Link to="/">View complete list</Link>.
            </li>
            <li>
              <small>†</small>
              Apple&nbsp;Card Monthly Installments (ACMI) is a 0% APR payment
              option available only in the U.S. to select at checkout for
              certain Apple products purchased at Apple&nbsp;Store locations,{" "}
              <a href="/">apple.com</a>, the Apple&nbsp;Store app, or by calling
              1-800-MY-APPLE and is subject to credit approval and credit limit.
              See{" "}
              <a href="https://support.apple.com/kb/HT211204">
                support.apple.com/kb/HT211204
              </a>{" "}
              for more information about eligible products. Variable APRs for
              Apple&nbsp;Card other than ACMI range from 13.99% to 24.99% based
              on creditworthiness. Rates as of October 1,&nbsp;2022. If you
              choose the pay‑in‑full or one‑time‑payment option for an
              ACMI‑eligible purchase instead of choosing ACMI as the payment
              option at checkout, that purchase will be subject to the variable
              APR assigned to your Apple&nbsp;Card. Taxes and shipping are not
              included in ACMI and are subject to your card’s variable APR. See
              the{" "}
              <a
                href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
                rel="nofollow"
              >
                Apple&nbsp;Card Customer Agreement
              </a>{" "}
              for more information. ACMI is not available for purchases made
              online at the following special stores: Apple Employee Purchase
              Plan; participating corporate Employee Purchase Programs; Apple at
              Work for small businesses; Government, and Veterans and Military
              Purchase Programs, or on refurbished devices. iPhone activation
              required on iPhone purchases made at an Apple&nbsp;Store with one
              of these national carriers: AT&amp;T, Sprint, Verizon,
              or&nbsp;T‑Mobile.
            </li>
            <li>
              <p>
                To access and use all the features of Apple&nbsp;Card, you must
                add Apple&nbsp;Card to Wallet on an iPhone or iPad with the
                latest version of iOS or iPadOS. Update to the latest version by
                going to Settings &gt; General &gt; Software Update. Tap
                Download and Install.
              </p>
              <p>Available for qualifying applicants in the United States.</p>
              <p>
                Apple&nbsp;Card is issued by Goldman Sachs Bank USA, Salt Lake
                City Branch.
              </p>
            </li>
          </ul>
        </section>
        <Breadcrumb />
        <BottomNav />
        <CopyRight />
      </div>
    </footer>
  );
};

export default Footer;
