import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/users", formData)
      .then((res) => {
        setResponse(res.data);
        setError(null);
      })
      .catch(() => {
        setError("Gönderim başarısız.");
        setResponse(null);
      });
  };

  return (
    <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-2xl">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
        İletişim Formu
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Adınız"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-posta"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="w-full bg-indigo-800 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-200"
        >
          Gönder
        </button>
      </form>

      {response && (
        <div className="mt-4 text-green-600 dark:text-green-400 font-medium">
          Kullanıcı ID: {response.id} başarıyla gönderildi!
        </div>
      )}
      {error && (
        <div className="mt-4 text-red-600 dark:text-red-400 font-medium">
          {error}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
