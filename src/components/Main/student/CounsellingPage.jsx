'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { HeartHandshake, CheckCircle2, ShieldCheck, Loader2, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required."),
  class: z.string().min(1, "Class is required."),
  reason: z.string().min(10, "Please provide a brief description."),
});

const CounsellingPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', class: '', reason: '' },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:5000/api/counselling", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        reset();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was a problem submitting your request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const helpAreas = [
    "Academic stress or doubts",
    "Personal or emotional issues",
    "Exam anxiety or pressure",
    "Career or stream guidance",
    "Low motivation or confidence",
  ];

  return (
    <div className="px-4 py-10 max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center justify-center bg-blue-100 rounded-full w-16 h-16 mx-auto shadow-md">
          <HeartHandshake className="h-8 w-8 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-blue-700">Counselling Request</h1>
        <p className="text-gray-600 max-w-xl mx-auto">We're here to help with your academic, personal, or emotional challenges—confidentially and compassionately.</p>
      </div>

      {/* Help Areas */}
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 shadow-sm">
        <h3 className="text-lg font-semibold text-blue-800 mb-4">Common Reasons Students Reach Out:</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-blue-700 text-sm">
          {helpAreas.map((area, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              {area}
            </li>
          ))}
        </ul>
      </div>

      {/* Form */}
      {submitted ? (
        <div className="text-center py-12 space-y-4">
          <CheckCircle2 className="h-16 w-16 mx-auto text-green-500" />
          <h2 className="text-xl font-bold text-green-700">Submitted Successfully</h2>
          <p className="text-gray-600">Thank you! Our counselor will contact you soon.</p>
          <button onClick={() => setSubmitted(false)} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Submit Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-lg shadow-md border">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Your Name</label>
              <input {...register('name')} className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Class</label>
              <input {...register('class')} className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., Class 10th" />
              {errors.class && <p className="text-red-500 text-sm mt-1">{errors.class.message}</p>}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Reason for Counselling</label>
            <textarea {...register('reason')} rows={4} className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Describe your concern..." />
            {errors.reason && <p className="text-red-500 text-sm mt-1">{errors.reason.message}</p>}
          </div>
          <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white px-6 py-2 rounded flex items-center justify-center hover:bg-blue-700">
            {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
            Submit Request
          </button>
        </form>
      )}

      {/* Counselor Cards */}
      <div className="grid sm:grid-cols-2 gap-6 mt-10">
        {[
          { initials: "RG", name: "Dr. Rajesh Gangwar" },
          { initials: "RS", name: "Mr. Raghuveer Sharan" },
        ].map((counselor, idx) => (
          <div key={idx} className="bg-white border rounded-lg shadow-sm p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-24 h-24 mx-auto rounded-full bg-blue-700 text-white flex items-center justify-center text-3xl border-4 border-blue-300 shadow-inner">
              {counselor.initials}
            </div>
            <h3 className="pt-4 text-xl text-blue-800 font-semibold">{counselor.name}</h3>
            <p className="text-blue-600 font-medium">Student Counselor</p>
            <p className="text-sm text-gray-500 mt-2">Expert in adolescent guidance, emotional health, and academic success.</p>
          </div>
        ))}
      </div>

      {/* Confidentiality Note */}
      <div className="mt-8 p-5 border-l-4 border-blue-600 bg-blue-50 rounded-md">
        <h4 className="flex items-center gap-2 text-blue-800 font-semibold">
          <ShieldCheck className="h-5 w-5" />
          Confidential & Safe
        </h4>
        <p className="text-sm text-blue-700 mt-1">
          All submissions are strictly confidential. Only the counselor will see your message.
        </p>
      </div>
    </div>
  );
};

export default CounsellingPage;
