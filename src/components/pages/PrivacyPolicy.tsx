import HeroSection from "../organs/HeroSection";
import { Text } from "../atoms/Text";

export default function PrivacyPolicy() {
  const dataPrivacy = [
    {
      title: "Store information",
      description: ["Store ID", "Store plan", 'Store domain']
    },
    {
      title: "Store owner",
      description: ["Name", "Email address", 'Country', "ZIP code", "City", "Phone number"]
    },
    {
      title: "Store information",
      description: ["Date of installation, upgrade, uninstallation.", "Payment history.", 'All operations inside the App.', "Device used", "Browser information (type, version, language)", "Operating system"]
    }
  ]
  const dataTiktokPrivacy = [
    "Profile Information: We may collect your social media profile information, such as your username, profile picture, and publicly available information associated with your account.",
    "Media Content: We may collect and display media content, such as images and videos, from your social media account based on the permissions granted. This includes captions associated with the media content.",
    "Engagement Metrics: We may collect engagement metrics, such as likes, comments, and shares, for the media content displayed in the App.",
    "Metadata: We may collect metadata associated with your media content, including timestamps, locations, and hashtags, to offer relevant features."
  ]

  const dataTableCookie = [
    {
      Cookie: "shopDomain",
      Provider: "NAVI",
      Description: "Help support connecting the Tiktok account",
      Duration: "Within a usage session"
    },
    {
      Cookie: "redirectTo",
      Provider: "NAVI",
      Description: "Help support connecting the Tiktok account",
      Duration: "Within a usage session"
    },
    {
      Cookie: "__Secure-3PSIDCC",
      Provider: "Google",
      Description: "Used for targeting to profile the interests of website visitors and display relevant and personalized Google Ads.",
      Duration: "1 year"
    }, {
      Cookie: "__Secure-1PSIDCC",
      Provider: "Google",
      Description: "Cookie required to use website options and services.",
      Duration: "1 year"
    }, {
      Cookie: "SIDCC",
      Provider: "Google",
      Description: "Security cookie to confirm visitor authenticity, prevent fraudulent use of credentials, and protect visitor data from unauthorized access.",
      Duration: "1 year"
    }, {
      Cookie: "__Secure-3PAPISID	",
      Provider: "Google",
      Description: "Profiles the interests of website visitors to serve relevant and personalized ads through retargeting.",
      Duration: "1 year"
    }, {
      Cookie: "SAPISID",
      Provider: "Google",
      Description: "Google Analytics customization cookie. Used by the Google + 1 sharing button and is required to link content to your Google 1+ account.",
      Duration: "1 year"
    }, {
      Cookie: "SSID",
      Provider: "Google",
      Description: "Google collects visitor information for videos played out by YouTube, which are played out on integrated maps from Google Maps.",
      Duration: "1 year"
    }, {
      Cookie: "__Secure-1PSID	",
      Provider: "Google",
      Description: "Cookie required to use website options and services.",
      Duration: "1 year"
    }, {
      Cookie: "SID",
      Provider: "Google",
      Description: "Google Analytics customization cookie. Used by the Google + 1 sharing button and is required to link content to your Google 1+ account",
      Duration: "1 year"
    }, {
      Cookie: "__Secure-3PSID",
      Provider: "Google",
      Description: "Targeting cookie. Used to profile the interests of website visitors and display relevant and personalized Google ads.",
      Duration: "1 year"
    }, {
      Cookie: "__Secure-1PAPISID",
      Provider: "Google",
      Description: "These cookies are used to deliver advertisements more relevant to you and your interests.",
      Duration: "1 year"
    }, {
      Cookie: "HSID",
      Provider: "Google",
      Description: "Google Analytics customization cookie. Used by the Google + 1 sharing button and is required to link content to your Google 1+ account.",
      Duration: "1 year"
    }, {
      Cookie: "1P_JAR",
      Provider: "Google",
      Description: "Based on recent searches and previous interactions, custom ads are placed on Google websites.",
      Duration: "1 year"
    }, {
      Cookie: "NID",
      Provider: "Google",
      Description: "Stores visitor preferences and personalizes ads on Google sites based on recent searches and interactions.",
      Duration: "6 months"
    }, {
      Cookie: "SEARCH_SAMESITE	G",
      Provider: "Google",
      Description: "Used to prevent the browser from sending the cookie along with cross-site requests.",
      Duration: "6 months"
    }, {
      Cookie: "AEC",
      Provider: "Google",
      Description: "Ensure that requests within a browsing session are made by the user, and not by other sites",
      Duration: "6 months"
    },

  ]
  const dataCollectible =[
    {
      Collectible : "Store information	",
      Purpose:"To support all features running in the App and make the App work properly"
    },
    {
      Collectible : "Store owner",
      Purpose:"To communicate and provide you with information or advertising relating to our products or services.y"
    },
    {
      Collectible : "The App Utilization	",
      Purpose:"To improve the App experience and apply for behavioral promotion."
    },
    {
      Collectible : "Analytics data",
      Purpose:"To help us customize the Site to improve your experience"
    }
  ]
    
  return (
    <>
      <div className="lg:p-40 sm:p-3 md:p-3">
        <Text as="h2" className="md:text-4xl text-2xl font-medium capitalize text-color3 text-center">
          Privacy Policy
        </Text>
        <div className="pb-10">
          <Text as="h4" className="text-base rounded font-medium text-color3 pb-5">The Information the Site Collects</Text>
          <Text as="p" className="text-sm  font-light text-color3 pb-2">We may collect the following Personal Information from our Site visitors:</Text>
          <ul style={{ listStyleType: 'circle' }}>
            <li>
              <Text as="p" className="text-sm  font-light text-color3"> <b style={{ fontWeight: 'bold' }}>Inquiry Information,</b> including the content of a contact form submission;</Text>
            </li>
            <li>
              <Text as="p" className="text-sm  font-light text-color3"> <b style={{ fontWeight: 'bold' }}>Analytics Data, </b> collected via cookie associated with Shopify and Google Analytics, if you give us your consent.</Text>
            </li>
          </ul>
        </div>
        <div className="pb-10">
          <Text as="h4" className="text-base rounded font-medium text-color3 pb-5">The Information the App Collects</Text>
          <Text as="p" className="text-sm  font-light text-color3 pb-2">After you install the App and give permission, we will collect the following information from your Store:</Text>
          <ul style={{ listStyleType: 'circle' }} className="pb-5">
            {dataPrivacy.map((item) => (
              <li className="pb-5">
                <Text as="p" className="text-sm  font-light text-color3"> {item.title}</Text>
                <ul style={{ listStyleType: 'disc' }} className="pl-5">
                  {item.description.map((description) => (
                    <li>
                      <Text as="p" className="text-sm  font-light text-color3"> {description}</Text>
                    </li>
                  ))}

                </ul>
              </li>
            ))}

          </ul>
          <Text as="p" className="text-sm  font-light text-color3 pb-2">In order to provide the functionality of our Services, we may require you to authorize our App to access your Tiktok account data. This authorization process is initiated by you through the App installation and authentication with your Tiktok credentials. Once authorized, our App(s) may collect certain data from your Tiktok account, including but not limited to:</Text>
          <ul style={{ listStyleType: 'disc' }} className="pl-5">
            {dataTiktokPrivacy.map((item) => (
              <li className="pb-2">
                <Text as="p" className="text-sm  font-light text-color3">{item}</Text>
              </li>
            ))}
          </ul>
          <Text as="p" className="text-sm  font-light text-color3 pb-2">We also partner with Microsoft Clarity and Microsoft Advertising to capture how you use and interact with our apps through behavioral metrics, heatmaps, and session replay to improve and market our products and services. App usage data is captured using first and third-party cookies and other tracking technologies to determine the popularity of our products and online activity. Additionally, we use this information for site optimization, fraud/security purposes, and advertising. For more information about how Microsoft collects and uses your data, visit the <a href="https://privacy.microsoft.com/en-US/privacystatement" style={{ color: 'blue' }}>Microsoft Privacy Statement.</a>

          </Text>

        </div>

        <div className="pb-10">
          <Text as="h4" className="text-base rounded font-medium text-color3 pb-5">How Do We Collect the Data?</Text>
          <Text as="p" className="text-sm  font-light text-color3 pb-2">We collect personal information directly from the relevant individual, through your Shopify account, or using the following technologies:</Text>
          <ul style={{ listStyleType: 'disc' }} className="pl-5">
            <li>
              <Text as="p" className="text-sm  font-light text-color3"> “Cookies” are data files that are placed on the client device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit <a href="http://www.allaboutcookies.org" style={{ color: 'blue' }}>http://www.allaboutcookies.org.</a> </Text>
            </li>
            <li>
              <Text as="p" className="text-sm  font-light text-color3"> We utilize the Tiktok API to access and collect certain information from your social media account. The data collected from your social media account is stored in your Shopify files and our database.</Text>
            </li>
          </ul>
        </div>

        <div className="pb-10">
          <Text as="h4" className="text-base rounded font-medium text-color3 pb-5">How We Use Your Cookies</Text>
          <Text as="p" className="text-sm  font-light text-color3 pb-2">List of Cookies Used on Ecomate Site and App:</Text>


          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tr>
              <th style={{ border: '1px solid #dddddd', textAlign: "left", padding: "8px" }}>Cookie</th>
              <th style={{ border: '1px solid #dddddd', textAlign: "left", padding: "8px" }}>Provider</th>
              <th style={{ border: '1px solid #dddddd', textAlign: "left", padding: "8px" }}>Description</th>
              <th style={{ border: '1px solid #dddddd', textAlign: "left", padding: "8px" }}>Duration</th>
            </tr>
            {dataTableCookie.map((item) => (
              <tr>
                <td style={{ border: '1px solid #dddddd', textAlign: "left", padding: "8px" }} >{item.Cookie}</td>
                <td style={{ border: '1px solid #dddddd', textAlign: "left", padding: "8px" }} >{item.Provider}</td>
                <td style={{ border: '1px solid #dddddd', textAlign: "left", padding: "8px" }} >{item.Description}</td>
                <td style={{ border: '1px solid #dddddd', textAlign: "left", padding: "8px" }} >{item.Duration}</td>
              </tr>
            ))}
          </table>
        </div>

        <div className="pb-10">
          <Text as="h4" className="text-base rounded font-medium text-color3 pb-5">The Information the App doesn't Collect</Text>
          <Text as="p" className="text-sm  font-light text-color3 pb-2">We don’t collect, use, or store information such as customer names, e-mail addresses, phone numbers, physical addresses, geolocations, and IP addresses; which is included in the permission due to the lack of granularity in the Shopify permission mechanism.</Text>
        </div>

        <div className="pb-10">
          <Text as="h4" className="text-base rounded font-medium text-color3 pb-5">How Do We Use Your Information?</Text>
          <Text as="p" className="text-sm  font-light text-color3 pb-2">We use the collected information in order to provide the Service and to operate the App. Specifically:</Text>
          
          <div className="pb-10">
          <Text as="h4" className="text-base rounded font-medium text-color3 pb-5">How We Use Your Cookies</Text>
          <Text as="p" className="text-sm  font-light text-color3 pb-2">List of Cookies Used on Ecomate Site and App:</Text>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tr>
              <th style={{ border: '1px solid #dddddd', textAlign: "left", padding: "8px" }}>Collectible Information</th>
              <th style={{ border: '1px solid #dddddd', textAlign: "left", padding: "8px" }}>Purpose of use</th>
            </tr>
            {dataCollectible.map((item) => (
              <tr>
                <td style={{ border: '1px solid #dddddd', textAlign: "left", padding: "8px" }} >{item.Collectible}</td>
                <td style={{ border: '1px solid #dddddd', textAlign: "left", padding: "8px" }} >{item.Purpose}</td>
              </tr>
            ))}
          </table>
        </div>
        </div>

        <div className="pb-10">
          <Text as="h4" className="text-base rounded font-medium text-color3 pb-5">Sharing the Information</Text>
          <Text as="p" className="text-sm  font-light text-color3 pb-2">We may share the Information we collect to comply with applicable laws and regulations, to respond to a subpoena, search warrant, or other lawful requests for information we receive, or to otherwise protect our rights. However, we will only share this information with a third party with your consent.</Text>
        </div>

        <div className="pb-10">
          <Text as="h4" className="text-base rounded font-medium text-color3 pb-5">Behavioral Advertising</Text>
          <Text as="p" className="text-sm  font-light text-color3 pb-2">As described above, we use the Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page at <a href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work" style={{ color: "blue" }}>http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.</a></Text>
          <Text as="p" className="text-sm  font-light text-color3 pb-2">You can opt out of targeted advertising by hitting the “Unsubscribe” button at the footer of each email. Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at: <a href="http://optout.aboutads.info/" style={{ color: "blue" }}>http://optout.aboutads.info/.</a></Text>
        </div>

        <div className="pb-10">
          <Text as="h4" className="text-base rounded font-medium text-color3 pb-5">Your Rights</Text>
          <Text as="p" className="text-sm  font-light text-color3 pb-2">If you are a European resident, you have the right to access the information we hold about you and to ask that your information be updated or deleted. If you would like to exercise this right, please visit your App account  {`>`} Settings {`>`} Privacy.</Text>
          <Text as="p" className="text-sm  font-light text-color3 pb-2">If your store visitors are in Europe or California and you want to limit tracking for those customers, please adjust Customer privacy in your Shopify store settings (more information can be found at <a href="https://help.shopify.com/en/manual/your-account/privacy/cookies#tracking-european-customers-and-gdpr-compliance" style={{ color: "blue" }}>https://help.shopify.com/en/manual/your-account/privacy/cookies#tracking-european-customers-and-gdpr-compliance"</a>), we will limit our tracking accordingly.</Text>
          <Text as="p" className="text-sm  font-light text-color3 pb-2">Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.</Text>
        </div>

        <div className="pb-10">
          <Text as="h4" className="text-base rounded font-medium text-color3 pb-5">Data Retention </Text>
          <Text as="p" className="text-sm  font-light text-color3 pb-2">We hold all collected information until one of the following things happens:</Text>
          <ul style={{ listStyleType: 'disc' }} className="pl-5">
            <li>
              <Text as="p" className="text-sm  font-light text-color3"> You explicitly exercise your right of deleting the data.</Text>
            </li>
            <li>
              <Text as="p" className="text-sm  font-light text-color3"> You uninstall the app with the indication of data deletion.</Text>
            </li>
          </ul>
          <Text as="p" className="text-sm  font-light text-color3 pb-2">If you want to stop sharing order information, please go to Settings {'>'} Account Privacy and Disable App Tracking.</Text>
        </div>

        <div className="pb-10">
          <Text as="h4" className="text-base rounded font-medium text-color3 pb-5">Changes </Text>
          <Text as="p" className="text-sm  font-light text-color3 pb-2">We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.</Text>
        </div>
      </div>
    </>
  )
}