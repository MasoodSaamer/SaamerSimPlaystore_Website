import React from 'react';
import { resourcesLinks, platformLinks, communityLinks } from "../constants"

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 px-6">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Privacy Policy
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Last updated: February 24, 2025
      </p>
      <div className="mt-6 max-w-4xl text-neutral-500">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            Thank you for choosing to be part of our community at Saamer Simulation Development ("Company," "we," "us," or "our"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at masoodofficial27@gmail.com or use the Contact us page.
          </p>
          <p className="mt-4">
            This privacy notice describes how we might use your information if you:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Download and use our mobile applications found under the publisher name Saamer Simulation Development on the Google Playstore.</li>
          </ul>
          <p className="mt-4">
            Please read this privacy notice carefully, as it will help you understand what we do with the information that we collect.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What Information Do We Collect?</h2>
          <p>
            The personal information that we collect is used for providing and improving the service. It will not be used or shared with anyone except as described in this Privacy Policy. We may require you to provide us with certain personally identifiable information, including but not limited to Internet access. The information that we request will be retained on your device and is not collected by us in any way. The app does use third-party services that may collect information used to identify you.
          </p>
          <p className="mt-4">
            Link to the privacy policies of third-party service providers used by the app:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500">Google Play Services</a></li>
            <li><a href="https://unity3d.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-500">Unity Ads</a></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Other Data We May Collect</h2>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Information related to your app usage, such as region, language, Android version, app version, and network type.</li>
            <li>Information specific to you that may be assigned by third-party service providers and business partners, such as your Google advertising ID.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What Is Our Stance on Third-Party Websites?</h2>
          <p>
            In short: We are not responsible for the safety of any information that you share with third-party providers who advertise, but are not affiliated with, our website.
          </p>
          <p className="mt-4">
            The app may contain advertisements from third parties that are not affiliated with us and which may link to other websites, online services, or mobile applications. We cannot guarantee the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy notice. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services, or applications that may be linked to or from the app. You should review the policies of such third parties and contact them directly to respond to your questions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How Long Do We Keep Your Information?</h2>
          <p>
            In short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.
          </p>
          <p className="mt-4">
            The information collected is stored as long as the user has the app installed. If you don’t want your information to be with us, simply uninstall the app through Google Play.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Service Providers</h2>
          <p>
            We may employ third-party companies and individuals due to the following reasons:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>To facilitate our Service;</li>
            <li>To provide the Service on our behalf;</li>
            <li>To perform Service-related services; or</li>
            <li>To assist us in analyzing how our Service is used.</li>
          </ul>
          <p className="mt-4">
            It is to inform users of this Service that these third parties have access to your personal information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Log Data</h2>
          <p>
            We want to inform you that whenever you use our Service, in case of an error in the app, we collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
          <p>
            Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory. This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Security</h2>
          <p>
            We value your trust in providing us with your personal information, thus we strive to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Links to Other Sites</h2>
          <p>
            This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Children’s Privacy</h2>
          <p>
            These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case that we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take necessary actions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at masoodofficial27@gmail.com or use the Contact us page.
          </p>
        </section>
      </div>

      <footer className="w-full  text-white mt-10 border-t py-10 border-neutral-700">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 px-6">
                <div>
                    <h3 className="text-md font-semibold mb-4 ">
                        Resources
                    </h3>
                    <ul className="space-y-2">
                        {resourcesLinks.map((link, index) => (
                            <li key={index}>
                                <a className="text-neutral-400 hover:text-white" href={link.href} target="_blank" rel="noopener noreferrer" >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            
            </div>
        </footer>
    

    </div>
  );
};

export default PrivacyPolicy;
