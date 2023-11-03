import React from "react";
import articleStyles from "@/styles/Article.module.css";

function ArticleList2() {
  return (
    <main className={articleStyles.card}>
      <h1>A&G Policy Push Software</h1>
      <p>
        A&G Policy Push software is a robust software solution designed to
        streamline the process of automatically downloading policies from the
        A&G platform and seamlessly pushing them to the Nigerian Insurance
        Industry Database (NIID). This tool offers both manual and automatic
        policy push capabilities, enhancing efficiency in the insurance
        industry. Here's how to get started with A&G Policy Push Software:
      </p>
      <h1>Installation </h1>
      <p>To install A&G Policy Push Software, follow these simple steps:</p>
      <ul>
        <li>
          Click the donload button 👉{" "}
          <span>
            <a
              href="https://github.com/ITACHI1117/AG-Push-exe/archive/refs/heads/main.zip"
              className={articleStyles.downloadButt}
              download="A&Gsetup"
            >
              Downlaod
            </a>{" "}
          </span>
          <i> Version 3.0</i>
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

      <h2 className={articleStyles.heading}>
        How to use the Software and handle errors
      </h2>
      <h1>Pushing Policies Manually</h1>
      <p>A&G Policy Updater makes manual policy updates a breeze:</p>
      <ul>
        <li>Launch the application.</li>
        <li>
          Use the date selector to manually define the start and end dates for
          the policies you wish to push.
        </li>
        <li>Click the "Push" button.</li>
        <li>
          The automated processes will commence, and your policies will be
          pushed to NIID in a matter of 3-5 minutes.
        </li>
        <li>
          After the push is completed, a new window will appear, displaying the
          push results.
        </li>
      </ul>

      <h1>Pushing Policies Automatically </h1>
      <p>
        A&G Policy Updater offers an automated policy push feature for your
        convenience:
      </p>
      <ul>
        <li>Open the application.</li>
        <li>Click the "Push Automatically" button.</li>
        <li>
          The automated process will start, initiating policy pushes starting
          from January of the current year. The start date will be set to the
          1st, and the end date will be set to the 5th.
        </li>
        <li>
          The start and end dates will increment by 5 each time until the end of
          the current month or the current date of the month is reached.
        </li>
        <p>
          Note: <br />
          When the Show Chrome Window button is ON, While pushing policies the
          chrome windows will pop if they are OFF the Windows will be hidden
        </p>
      </ul>

      <h1>Handling Errors Pushing Manually</h1>
      <p>
        When pushing policies manually, you might encounter errors, typically
        due to a poor network connection or an excessively long date range. To
        resolve these issues:
      </p>
      <ul>
        <li>
          Network Connection: Ensure you have a strong network connection to
          prevent network-related errors.
        </li>
        <li>
          Date Range: Keep the date range within reasonable limits, preferably
          as a multiple of 5, to minimize errors.
        </li>
      </ul>

      <h1>Handling Errors Pushing Automatically</h1>
      <p>
        While pushing policies automatically, a few errors may occur, including
        the absence of text in the log file, slow automated processes, or
        unexpected errors causing the process to halt. To address these issues:
      </p>
      <ul>
        <li>
          Network Connection: Confirm that you have a reliable network
          connection.
        </li>
        <li>
          If automatic push fails to return any messages for a specific date
          range, attempt a manual push for that range.
        </li>
        <li>
          Software Update: The software gets updated periodically so you can
          always check this site for new updates
        </li>
      </ul>

      <p>
        A&G Policy Updater empowers insurance professionals with efficient
        policy update capabilities, offering both manual and automatic options
        while providing solutions to common error scenarios. Enjoy a seamless
        policy management experience with A&G Policy Updater!
      </p>
    </main>
  );
}

export default ArticleList2;
