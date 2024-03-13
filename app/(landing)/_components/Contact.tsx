"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { useState } from "react";

import { useToast } from "@/components/ui/use-toast";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  [key: string]: string | string[];
};

export default function Contact() {
  const { toast } = useToast();

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const googleFormsEndpoint =
      "https://docs.google.com/forms/d/e/1FAIpQLSf5PEcgag9xd_6A8t7nnPA7ir-fjwZL7FWOfpJVFfkzzild8Q/formResponse"; // Replace with your Google Forms endpoint

    try {
      const formDataEncoded = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((option) => {
            const entryKey = `entry.${getEntryKey(key)}`;
            formDataEncoded.append(entryKey, option);
          });
        } else {
          const entryKey = `entry.${getEntryKey(key)}`;
          formDataEncoded.append(entryKey, value);
        }
      });

      await fetch(googleFormsEndpoint, {
        method: "POST",
        body: formDataEncoded,
      });

      // Reset the form data
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Handle success
    } catch (error) {
      // Handle submission error

      console.log("Error in submission"); // Show the pop-up
    }
  };

  const getEntryKey = (key: string) => {
    // Map the form field name to the corresponding Google Forms entry key
    const entryKeys: Record<string, string> = {
      name: "863150268",
      email: "2088252704",
      subject: "824108105",
      message: "1912699819",
      // Add more fields as needed
    };

    return entryKeys[key];
  };

  return (
    <div className="mx-auto max-w-sm space-y-6 p-8 shadow-2xl rounded-2xl">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-gray-500 dark:text-gray-400">
          We'll get back to you as soon as possible.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              name="name"
              placeholder="Enter your name"
              onChange={handleInputChange}
              required
              type="text"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={formData.email}
              name="email"
              placeholder="Enter your email"
              required
              type="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              value={formData.subject}
              name="subject"
              placeholder="Enter the subject"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              className="min-h-[100px]"
              id="message"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              required
              onChange={handleInputChange}
            />
          </div>
          <Button className="w-full" type="submit">
            Send message
          </Button>
        </div>
      </form>
    </div>
  );
}
