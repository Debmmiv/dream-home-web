// ENVIRONMENT VARIABLES: Never hardcode your API URLs
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";

export const registerClient = async (formData, role) => {
  const djangoPayload = {
    first_name: formData.firstName,
    last_name: formData.lastName,
    email: formData.email,
    phone_no: formData.phone,
    gender: formData.gender,
    birthdate: formData.birthdate,
    password: formData.password,
    role: role.toUpperCase(), 
    address: "Address not provided yet" 
  };

  try {
    const response = await fetch(`${API_BASE_URL}/users/clients/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // ACCEPT HEADER: Explicitly tell Django we only accept JSON back
        "Accept": "application/json",
      },
      body: JSON.stringify(djangoPayload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      
      // SECURE LOGGING: Do not log raw backend errors in production
      if (process.env.NODE_ENV === "development") {
        console.error("Django Error:", errorData);
      }
      
      // PARSED ERROR MESSAGES: Don't guess the error, pass the specific backend message if safe
      const errorMessage = errorData?.email 
        ? "That email is already registered." 
        : "Failed to create account. Please check your details.";
        
      throw new Error(errorMessage);
    }

    return await response.json();

  } catch (error) {
    // CATCH NETWORK FAILURES: Handles servers going down or CORS blocks
    if (process.env.NODE_ENV === "development") {
      console.error("Network or parsing error:", error);
    }
    throw new Error(error.message || "A network error occurred. Please try again later.");
  }
};


