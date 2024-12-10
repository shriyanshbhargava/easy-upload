import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

function FAQ() {
  const faqs = [
    { question: 'How secure is DocVerify?', answer: 'DocVerify uses state-of-the-art encryption and security measures to protect your documents and personal information. We comply with international data protection standards and regularly undergo security audits.' },
    { question: 'What types of documents can I verify?', answer: 'DocVerify supports a wide range of documents including but not limited to: government IDs, educational certificates, employment records, and legal documents. If you have a specific document type in mind, please contact our support team.' },
    { question: 'How long does the verification process take?', answer: 'The verification process is typically instantaneous for most documents. However, some complex documents may require additional time, usually no more than 24-48 hours.' },
    { question: 'Can I share my verified documents with others?', answer: 'Yes, DocVerify allows you to securely share your verified documents with trusted parties. You can control who has access and for how long.' },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left font-semibold p-4 bg-white rounded-lg shadow"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;