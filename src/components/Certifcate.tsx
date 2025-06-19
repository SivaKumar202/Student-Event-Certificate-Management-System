import { useState } from "react";
import { motion } from "framer-motion";
import { db, collection, getDocs, query, where } from "../firebaseConfig";

interface CertificateData {
  email: string;
  certificate: string; // URL to the certificate
  certificateKey: string;
  name: string;
}

export default function CertificateForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [certificateUrl, setCertificateUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setCertificateUrl(null);

    if (!email.trim()) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      // Query Firestore to check if the email exists
      const certificatesRef = collection(db, "users");
      const q = query(certificatesRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Fetch the first matching certificate
        const certificateData = querySnapshot.docs[0].data() as CertificateData;
        setCertificateUrl(certificateData.certificate);
      } else {
        setError("No certificate found for this email.");
      }
    } catch (error) {
      console.error("Error fetching certificate:", error);
      setError("Error fetching certificate. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl p-12 bg-gray-900 rounded-2xl shadow-2xl border border-gray-700"
      >
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold text-center text-cyan-400"
        >
          Generate Your Certificate
        </motion.h2>
        <motion.p
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-center text-gray-400 mt-2"
        >
          Enter your email to fetch your IEEE event participation certificate
        </motion.p>

        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label className="text-lg text-gray-300">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none"
            />
          </motion.div>
          <motion.button
            type="submit"
            disabled={loading}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full px-4 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 rounded-lg text-white font-semibold text-lg shadow-md hover:shadow-lg transition-all"
          >
            {loading ? "Fetching..." : "Get Certificate"}
          </motion.button>
        </form>

        {/* Display Certificate Link */}
        {certificateUrl && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 text-center"
          >
            <p className="text-lg text-gray-300">Certificate Found:</p>
            <a
              href={certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline"
            >
              View Your Certificate
            </a>
          </motion.div>
        )}

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 text-center text-red-400"
          >
            {error}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
