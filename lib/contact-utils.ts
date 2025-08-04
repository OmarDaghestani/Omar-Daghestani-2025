export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const sendContactEmail = async (
  formData: ContactFormData
): Promise<{ success: boolean; message: string }> => {
  try {
    // Get your Formspree endpoint from environment variables
    const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (!formspreeEndpoint) {
      console.error("Formspree endpoint not configured");
      return {
        success: false,
        message:
          "Email service not configured. Please set up your Formspree endpoint.",
      };
    }

    console.log("Sending email via Formspree...");
    console.log("Endpoint:", formspreeEndpoint);
    console.log("Form data:", formData);

    const response = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    console.log("Formspree Response status:", response.status);

    if (response.ok) {
      return {
        success: true,
        message: "Message sent successfully! Thank you for contacting me.",
      };
    } else {
      const errorData = await response.text();
      console.error("Formspree error:", errorData);
      return {
        success: false,
        message: "Failed to send message. Please try again.",
      };
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: `An error occurred while sending the message: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    };
  }
};
