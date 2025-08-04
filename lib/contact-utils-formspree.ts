export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Alternative using Formspree (very popular for portfolios)
export const sendContactEmailFormspree = async (
  formData: ContactFormData
): Promise<{ success: boolean; message: string }> => {
  try {
    // Get your Formspree endpoint from https://formspree.io/
    const formspreeEndpoint =
      process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "your_formspree_endpoint";

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
      return { success: true, message: "Message sent successfully!" };
    } else {
      return {
        success: false,
        message: "Failed to send message. Please try again.",
      };
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "An error occurred while sending the message. Please try again.",
    };
  }
};

// Alternative using Netlify Forms (if deployed on Netlify)
export const sendContactEmailNetlify = async (
  formData: ContactFormData
): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        "form-name": "contact",
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (response.ok) {
      return { success: true, message: "Message sent successfully!" };
    } else {
      return {
        success: false,
        message: "Failed to send message. Please try again.",
      };
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "An error occurred while sending the message. Please try again.",
    };
  }
};
