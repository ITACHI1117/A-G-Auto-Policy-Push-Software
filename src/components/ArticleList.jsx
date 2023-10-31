import articleStyles from "@/styles/Article.module.css";

function ArticleList({ articles }) {
  return (
    <main className={articleStyles.card}>
      <h1>A&G Policy Update Software</h1>
      <p>
        The A&G Policy Update Software represents a sophisticated tool designed
        to streamline and expedite the process of policy corrections. Its core
        functionality is centered around automating the update procedure,
        thereby significantly enhancing the efficiency of policy updates. Users
        are required to furnish the system with the pertinent policy details
        necessitating modifications. Upon submission, the software seamlessly
        initiates an automated workflow, proficiently orchestrating the update
        operation. This results in the simultaneous and accurate synchronization
        of policy information across both the A&G Platform and the National
        Insurance Information Database (NIID), a critical component of the
        Nigerian Insurance industry.
      </p>
      <h1>Installation </h1>
      <p>To install A&G Policy Update Software, follow these simple steps:</p>
      <ul>
        <li>
          Click the donload button 👉{" "}
          <span>
            <a
              href="https://github.com/ITACHI1117/A-G-update-exe/archive/refs/heads/main.zip"
              className={articleStyles.downloadButt}
              download="A&Gsetup"
            >
              Downlaod
            </a>{" "}
          </span>
          <i> Version 2.0</i>
        </li>
        <li>
          After downloading the ZIP file, extract its contents to a location of
          your choice on your computer.
        </li>
        <li>
          Locate and run the setup file. Follow the setup wizard's instructions
          to initiate the installation process.
        </li>
        <li>
          Once the installation is complete, the application will automatically
          start running, and a convenient shortcut will be placed on your
          desktop for easy access.
        </li>
        <p>
          Note: <br />
          Because of how the setup file was put together, Windows might think
          it's got a virus, but it's totally clean. Just switch off your Windows
          Defender, get the setup file installed, and then switch it back on
          once you're done installing. Easy peasy!
        </p>
      </ul>

      <h2 className={articleStyles.heading}>How to use the Software</h2>
      
      <p>
        The platform offers the flexibility of updating policies through both
        the Scratch Card and E-Pin modules, allowing users to seamlessly switch
        between these platforms by simply clicking on the respective Scratch
        Card or E-Pin buttons. <br /> <br /> Additionally, the interface
        includes a 'Running Updates' button, which, while not clickable, serves
        to display the real-time count of ongoing update processes. This feature
        ensures users are kept informed about the progress of their policy
        updates. <br /> <br /> For user convenience, there is a 'Show Chrome
        Window' button, which can be toggled on or off. When set to 'OFF,' the
        Chrome window will not appear during the policy correction process,
        contributing to a smoother user experience. <br /> <br /> The data entry
        forms have been meticulously designed for self-explanatory and
        user-friendly interactions. To ensure the accuracy of policy updates, it
        is imperative that users input policy details without spaces. Errors
        stemming from spaces in the policy details can impede the correction
        process, necessitating manual intervention. <br />
        <br /> Policy verification can be conducted using the certificate
        number, which serves as a reliable identifier. Upon successful policy
        correction, an informative pop-up message will confirm the update,
        displaying the policy number alongside a corresponding update message.
        In cases where errors occur, an error message will be presented,
        offering insight into the nature of the issue encountered during the
        update process. This transparent feedback mechanism ensures a smoother
        and more effective policy correction experience for users.
      </p>

      <h1>Handling Errors</h1>
      <p>
        In the event that an unforeseen error hinders the policy correction
        process, the following systematic steps are recommended for resolving
        the issue:
      </p>
      <ul>
        <li>
          Enable Chrome Window Display: If the Chrome window display has been
          disabled, kindly activate it by turning it ON. This step ensures that
          the necessary visual interface is available for the correction
          process.
        </li>
        <li>
          Outdated Chrome Driver: If the Chrome window either briefly appears
          and promptly closes or fails to display at all, this typically
          indicates an issue related to an outdated Chrome driver. To address
          this, it is advisable to update the Chrome driver to its latest
          version, ensuring compatibility with the software.
        </li>
        <li>
          Software Update: If the aforementioned steps do not rectify the
          problem, consider updating the software itself. Software updates often
          include bug fixes, performance enhancements, and compatibility
          improvements that can mitigate unexpected errors and ensure the smooth
          functioning of the policy correction system.
        </li>
      </ul>
      <p>
        By adhering to these steps, users can effectively diagnose and resolve
        unknown errors that may impede the policy correction process, ultimately
        optimizing the performance and reliability of the software.
      </p>
    </main>
  );
}

export default ArticleList;
