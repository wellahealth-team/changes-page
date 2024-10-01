import { serve } from "inngest/next";
import { sendConfirmEmailNotification } from "../../inngest/email/send-confirm-email-notification";
import { deleteImagesJob } from "../../inngest/jobs/delete-images";
import { sendPostNotification } from "./../../inngest/email/send-post-notification";

// Create an API that hosts zero functions.
export default serve("changes-page", [
  // Emails
  sendConfirmEmailNotification,
  sendPostNotification,
  // Background Jobs
  deleteImagesJob,
]);
