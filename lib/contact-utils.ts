export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const sendContactEmail = async (
  formData: ContactFormData
): Promise<{ success: boolean; message: string }> => {
  try {
    const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (!formspreeEndpoint) {
      return {
        success: false,
        message:
          "Email service not configured. Please set up your Formspree endpoint.",
      };
    }

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

    if (response.ok) {
      return {
        success: true,
        message: "Message sent successfully! Thank you for contacting me.",
      };
    } else {
      return {
        success: false,
        message: "Failed to send message. Please try again.",
      };
    }
  } catch {
    return {
      success: false,
      message: "An error occurred while sending the message. Please try again.",
    };
  }
};
